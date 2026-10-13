> **Это форк** [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch),
> в который добавлены агенты [Kimi Code, MiniMax Code и ZCode](docs/new-harnesses.md).
> Его релизы — настольное приложение для Windows и Linux и CLI `orx`. Они
> публикуются из этого репозитория и обновляются из него же. Это сборки
> development-канала: телеметрия и отзывы не уходят в alphaXiv, код не
> подписан (поэтому Windows показывает предупреждение SmartScreen:
> **Подробнее** → **Выполнить в любом случае**), приложения для macOS нет.

<div align="center">

<h1><img src=".github/readme-assets/openresearch.svg" alt="" width="56" align="absmiddle" /> OpenResearch</h1>

Локальная среда и рабочее пространство для исследовательских агентов.

<p><em>проект <a href="https://alphaxiv.org"><img src=".github/readme-assets/alphaxiv.svg" alt="" width="18" height="18" align="absmiddle" /> alphaXiv</a></em></p>

<p>
<a href="https://github.com/artur-shaikhutdinov/OpenResearch-Kimi-MiniMax-ZCode/releases/latest"><img src="https://img.shields.io/github/v/release/artur-shaikhutdinov/OpenResearch-Kimi-MiniMax-ZCode?style=flat-square" alt="Последний релиз" /></a>
<a href="https://github.com/artur-shaikhutdinov/OpenResearch-Kimi-MiniMax-ZCode/blob/main/LICENSE"><img src="https://img.shields.io/github/license/artur-shaikhutdinov/OpenResearch-Kimi-MiniMax-ZCode?style=flat-square" alt="Лицензия" /></a>
<a href="https://doi.org/10.5281/zenodo.23025872"><img src="https://img.shields.io/badge/DOI-10.5281%2Fzenodo.23025872-blue?style=flat-square" alt="DOI 10.5281/zenodo.23025872" /></a>
</p>

<p><a href="README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.ko.md">한국어</a> · <a href="README.zh.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ru.md">Русский</a></p>

<p><img src=".github/readme-assets/openresearch-screenshot.png" alt="Настольное приложение OpenResearch: разговор с исследовательским агентом и логи экспериментов" width="680" /></p>

<hr />

<p>Нужен ли вам помощник или инструмент для автономных исследований, OpenResearch ускорит вашу работу. Запускайте исследовательских агентов, которые изучают литературу, выдвигают гипотезы, ставят эксперименты и готовят исследовательские материалы.</p>

<p>
<a href="https://github.com/artur-shaikhutdinov/OpenResearch-Kimi-MiniMax-ZCode/releases/latest/download/OpenResearch-Setup.exe"><picture><source media="(prefers-color-scheme: dark)" srcset=".github/readme-assets/download-windows-dark.svg"><img src=".github/readme-assets/download-windows.svg" alt="Скачать OpenResearch для Windows (бета)" width="220" height="44" /></picture></a>
<a href="https://github.com/artur-shaikhutdinov/OpenResearch-Kimi-MiniMax-ZCode/releases/latest"><picture><source media="(prefers-color-scheme: dark)" srcset=".github/readme-assets/download-linux-dark.svg"><img src=".github/readme-assets/download-linux.svg" alt="Скачать OpenResearch для Linux" width="220" height="44" /></picture></a>
</p>

<p>
<a href="https://openresearch.sh/docs"><img src=".github/readme-assets/action-documentation.svg" alt="Документация" width="132" height="24" /></a><img src=".github/readme-assets/action-separator.svg" alt=" · " width="12" height="24" />
<a href="https://github.com/artur-shaikhutdinov/OpenResearch-Kimi-MiniMax-ZCode/releases"><img src=".github/readme-assets/action-releases.svg" alt="Релизы" width="78" height="24" /></a>
</p>

<p><sub>Для бета-версии под Windows нужен <a href="docs/windows.md">Git for Windows</a></sub></p>

<p><a href="https://trendshift.io/repositories/89363"><img src="https://trendshift.io/api/badge/repositories/89363" alt="GitHub Trending: репозиторий дня №1" width="250" height="55" /></a>
<a href="https://trendshift.io/repositories/89363?utm_source=trendshift-badge&amp;utm_medium=badge&amp;utm_campaign=badge-trendshift-89363" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/89363/daily?language=Rust" alt="alphaXiv/OpenResearch | Trendshift" width="250" height="55" /></a></p>

</div>

## Начало работы

**Мы рекомендуем настольное приложение.** Скачайте его для своей платформы:

- [Windows (бета)](https://github.com/artur-shaikhutdinov/OpenResearch-Kimi-MiniMax-ZCode/releases/latest/download/OpenResearch-Setup.exe) — нужен [Git for Windows](docs/windows.md)
- Linux: [x86_64](https://github.com/artur-shaikhutdinov/OpenResearch-Kimi-MiniMax-ZCode/releases/latest/download/OpenResearch-x86_64.AppImage) · [ARM64](https://github.com/artur-shaikhutdinov/OpenResearch-Kimi-MiniMax-ZCode/releases/latest/download/OpenResearch-aarch64.AppImage) ([подробнее](docs/linux.md))

<details>
<summary>Предпочитаете отдельный CLI?</summary>

В Windows (после установки [Git for Windows](docs/windows.md)):

```powershell
powershell -ExecutionPolicy Bypass -c "irm https://github.com/artur-shaikhutdinov/OpenResearch-Kimi-MiniMax-ZCode/releases/latest/download/openresearch-cli-installer.ps1 | iex"
```

В Linux:

```sh
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/artur-shaikhutdinov/OpenResearch-Kimi-MiniMax-ZCode/releases/latest/download/openresearch-cli-installer.sh | sh
orx up
```

`orx up` открывает локальную панель по адресу `http://127.0.0.1:4791`. В macOS
соберите `orx` из исходников командой `cargo install --path .`.

</details>

Создайте аккаунт на [openresearch.sh](https://openresearch.sh), чтобы получать
новости по почте и пользоваться управляемыми вычислениями OpenResearch.

## Как это работает

**Работайте с любимым агентом для программирования.** OpenResearch напрямую поддерживает <img src=".github/readme-assets/claude.svg" alt="" width="18" height="18" align="texttop" /> Claude Code,
<img src=".github/readme-assets/codex.svg" alt="" width="18" height="18" align="texttop" /> Codex,
<img src=".github/readme-assets/opencode.svg" alt="" width="18" height="18" align="texttop" /> OpenCode,
<img src=".github/readme-assets/cursor.svg" alt="" width="18" height="18" align="texttop" /> Cursor,
<img src=".github/readme-assets/antigravity.svg" alt="" width="18" height="18" align="texttop" /> Google Antigravity,
<img src=".github/readme-assets/kimi.svg" alt="" width="18" height="18" align="texttop" /> Kimi Code,
<img src=".github/readme-assets/minimax.png" alt="" width="18" height="18" align="texttop" /> MiniMax Code и
<img src=".github/readme-assets/zcode.svg" alt="" width="18" height="18" align="texttop" /> ZCode.
Можно также [использовать локальную модель](docs/local-models.md) с OpenCode через
<img src=".github/readme-assets/lmstudio.svg" alt="" width="18" height="18" align="texttop" /> LM Studio,
<img src=".github/readme-assets/omlx.svg" alt="" width="18" height="18" align="texttop" /> oMLX,
<img src=".github/readme-assets/ollama.svg" alt="" width="18" height="18" align="texttop" /> Ollama или собственный адрес сервера.

**Опирайте гипотезы на свежую литературу.** OpenResearch интегрирован с <img src=".github/readme-assets/alphaxiv.svg" alt="" width="18" height="18" align="absmiddle" /> alphaXiv, <img src=".github/readme-assets/biorxiv.svg" alt="" width="18" height="18" align="absmiddle" /> bioRxiv и <img src=".github/readme-assets/pubmed.svg" alt="" width="18" height="18" align="absmiddle" /> PubMed, поэтому агенты находят подходящие статьи, выдвигают обоснованные гипотезы и связывают свои эксперименты с существующими исследованиями.

**Выбирайте, где считать.** Запускайте эксперименты локально или через SSH,
Slurm,
<img src=".github/readme-assets/kubernetes.svg" alt="" width="18" height="18" align="texttop" /> Kubernetes,
<img src=".github/readme-assets/modal.svg" alt="" width="18" height="18" align="texttop" /> Modal,
<img src=".github/readme-assets/thinking-machines.svg" alt="" width="18" height="18" align="texttop" /> Tinker,
<img src=".github/readme-assets/ray.svg" alt="" width="18" height="18" align="texttop" /> Ray,
<img src=".github/readme-assets/huggingface.svg" alt="" width="18" height="18" align="texttop" /> Hugging Face Jobs и
управляемые вычисления OpenResearch.

**Дайте агентам память о каждом эксперименте.** OpenResearch записывает каждый эксперимент в локальную SQL-базу и хранит его логи, код
и артефакты на вашем компьютере, чтобы агенты могли
учиться на прошлых результатах и решать, что попробовать дальше. В настольном приложении
легко увидеть, что сделали ваши агенты, и проверить данные, на которых основан каждый результат.

**Ваши исследования остаются вашими.** Всё работает полностью локально. Мы не собираем ваш код и трассы агентов. Ваши проекты,
разговоры, эксперименты, логи и артефакты остаются на вашем компьютере и под вашим
контролем.

## Статистика использования

Официальные релизные сборки отправляют обобщённые события использования, привязанные
к случайному ID установки; эту отправку можно отключить. В них нет кода, запросов,
содержимого файлов и путей, названий репозиториев, токенов, адресов почты, а также
идентификаторов проектов и экспериментов.

Отключить статистику использования можно в настройках настольного приложения или командой `orx telemetry off`.
