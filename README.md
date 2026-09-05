# credits.automatingthefuture.com

Free, public notes on AI and cloud credits for **unincorporated indie hackers**.

This is not a product. There is no checkout. We do not issue credits.

## Hosting

The site is a static Worker on Cloudflare (Workers Static Assets), not GitHub Pages.

- Zone already on Cloudflare: `automatingthefuture.com`
- Intended hostname: `https://credits.automatingthefuture.com`
- Preview: `https://credits-automatingthefuture.maurorpv.workers.dev` after first deploy

### Deploy

From this repo:

```bash
npx wrangler deploy
```

Wrangler will:

1. Upload the HTML/CSS/JS/JSON as Worker assets
2. Create DNS + certificate for `credits.automatingthefuture.com` (custom domain)
3. Publish `credits-automatingthefuture.maurorpv.workers.dev`

Do **not** add a CNAME to `*.github.io`. The Worker custom domain creates the DNS record itself.

### Edit listings

Change `data/programs.json` and bump the date in `app.js`. Redeploy.

## License

Content as-is. Program terms belong to the providers.
