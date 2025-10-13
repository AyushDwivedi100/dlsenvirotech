# Favicon Icons Required for PWA

For the Progressive Web App (PWA) to work properly, you need to add the following favicon images to the `client/public/` folder:

## Required Files:

1. **favicon-192.png** - 192x192 pixels PNG icon
2. **favicon-512.png** - 512x512 pixels PNG icon

## How to Create:

1. Start with your company logo (preferably square format)
2. Resize to 512x512 pixels and save as `favicon-512.png`
3. Resize to 192x192 pixels and save as `favicon-192.png`
4. Place both files in `client/public/` folder

## Online Tools:

- [Favicon Generator](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Canva](https://www.canva.com/) - for creating square logos

## After Adding Icons:

1. Rebuild the project: `npm run build`
2. The icons will be automatically copied to the `dist` folder
3. Deploy to Hostinger following the DEPLOYMENT.md guide
