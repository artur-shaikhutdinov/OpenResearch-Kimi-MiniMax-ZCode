// Runs ZCode's own runtime (`ORX_ZCODE_RUNTIME`, the desktop app's
// `resources/glm/zcode.cjs`) as `zcode app-server --stdio`, signed in the way
// `zcode -p` is.
//
// The app's app-server leaves the account to its host: the ZCode app sends the
// Coding Plan providers and each request's credentials. orx is not that host,
// so the runtime would find no Coding Plan model. The command-line paths start
// the same provider registry with `{standalone: …}`, which reads the sign-in
// from ZCode's own credential store; this loader passes that option to the
// app-server's call as well, in memory, without touching the app's files.
//
// The bundle is minified, so the functions are found by the names it
// registers for them. A build where they cannot be found runs unchanged (API-key
// providers still work) and says so on stderr, which orx reads back.
"use strict";

const Module = require("node:module");
const path = require("node:path");

const UNAVAILABLE = "orx: ZCode standalone sign-in unavailable";
const READY_LOG = "Worker Provider Registry \\u5DF2\\u5C31\\u7EEA";

function registeredName(source, label) {
  const match = source.match(new RegExp(`r\\(([\\w$]+),"${label}"\\)`));
  return match ? match[1] : undefined;
}

function escape(name) {
  return name.replace(/\$/g, "\\$");
}

/** `source` with the app-server's provider registry started standalone. */
function standalone(source) {
  // Builds that already choose the sign-in themselves (the npm repack's
  // `ZCODE_APP_SERVER_AUTH_MODE`, standalone by default).
  if (source.includes("appServerRegistryOptions")) return { source, status: "native" };
  const start = registeredName(source, "startProcessProviderRegistryRuntime");
  const reporter = registeredName(source, "createCliProviderRefreshReporter");
  const ready = source.indexOf(READY_LOG);
  if (!start || !reporter || ready < 0) return { source, status: "unavailable" };
  const call = source.lastIndexOf(`create:r(()=>${start}(`, ready);
  if (call < 0 || ready - call > 4000) return { source, status: "unavailable" };
  const match = source
    .slice(call)
    .match(new RegExp(`^create:r\\(\\(\\)=>${escape(start)}\\(([\\w$]+)(?:,\\{\\})?\\),"create"\\)`));
  if (!match) return { source, status: "unavailable" };
  const patched = `create:r(()=>${start}(${match[1]},{standalone:${reporter}(process.stderr)}),"create")`;
  return {
    source: source.slice(0, call) + patched + source.slice(call + match[0].length),
    status: "patched",
  };
}

module.exports = { standalone, UNAVAILABLE };

if (require.main === module) {
  const runtime = process.env.ORX_ZCODE_RUNTIME;
  if (!runtime) {
    process.stderr.write("orx: ORX_ZCODE_RUNTIME is not set\n");
    process.exit(2);
  }
  const target = path.resolve(runtime);
  const compile = Module.prototype._compile;
  Module.prototype._compile = function (content, filename) {
    if (path.resolve(filename) !== target) return compile.call(this, content, filename);
    Module.prototype._compile = compile;
    const result = standalone(content);
    if (result.status === "unavailable") process.stderr.write(`${UNAVAILABLE}\n`);
    return compile.call(this, result.source, filename);
  };
  process.argv[1] = target;
  Module.runMain();
}
