import type { HarnessModel, OptionChoice } from "./api";

/** The distinct provider groups of a harness's models, in catalog order. */
export function providerGroups(models: readonly HarnessModel[]): OptionChoice[] {
  const seen = new Map<string, OptionChoice>();
  for (const entry of models) {
    if (entry.providerGroup && !seen.has(entry.providerGroup.id)) seen.set(entry.providerGroup.id, entry.providerGroup);
  }
  return [...seen.values()];
}

/** The model a provider switch lands on: the same model under the new
 * provider when it has one (by display name), else its first model. */
export function providerSwitchTarget(
  models: readonly HarnessModel[],
  current: string | null | undefined,
  group: string,
  label: (model: HarnessModel) => string,
): string | undefined {
  const candidates = models.filter((entry) => entry.providerGroup?.id === group);
  const selected = models.find((entry) => entry.id === current);
  const same = selected && candidates.find((entry) => label(entry) === label(selected));
  return (same ?? candidates[0])?.id;
}
