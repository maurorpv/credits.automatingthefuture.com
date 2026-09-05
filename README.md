# credits.automatingthefuture.com

Dated public notes on official AI and cloud programs a solo, unincorporated builder can start with a personal email.

Live: https://credits.automatingthefuture.com

Every apply link goes to the provider. This repo does not issue credits or sit in front of official pages.

## What’s here

- `index.html` — honesty rules and the card list
- `programs/{id}.html` — one usage sketch per program
- `data/programs.json` — source of truth for cards and pages
- `method.html` — how listings are added, checked, and retired

## How it stays current

1. Edit `data/programs.json` (limits, catch, official URL, `checked` date).
2. Rebuild dedicated pages with `node build.mjs`.
3. Upload the changed files to the site KV namespace.

Full rules: https://credits.automatingthefuture.com/method.html

## License

Content is provided as-is, no warranty. Program terms belong to the providers.
