# credits.automatingthefuture.com

Free, public notes on AI and cloud credits for **unincorporated indie hackers**.

This is not a product. There is no checkout. We do not issue credits. Official apply links go to the provider.

Live (once DNS + Pages are on): https://credits.automatingthefuture.com

## What is here

- Homepage: honesty rules, a realistic stack, dated program cards
- Coming soon placeholders: non-US founders, students, voice/video, expiry calendar
- `data/programs.json`: the same catalog as structured data
- `method.html`: how listings are chosen

## Publish on GitHub Pages + custom subdomain

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / root (`/`)
4. At your domain registrar, add a CNAME:

   ```
   credits.automatingthefuture.com  →  maurorpv.github.io
   ```

5. In Pages, add custom domain `credits.automatingthefuture.com` and wait for HTTPS.

The `CNAME` file in this repo is already set.

## Edit a listing

Change `data/programs.json` **and** the `PROGRAMS` array in `index.html` (keep them in sync). Update the Checked date when you re-verify an official URL.

## License

Content is provided as-is, no warranty. Program terms belong to the providers.
