# DLS Envirotech Corporation - Website

Professional STP, ETP & Industrial Water Treatment Solutions website built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start for Hostinger Deployment

### 1. Configure Your Domain (One-Time)

Edit `client/.env.production`:

```env
VITE_DOMAIN=yourdomain.com
```

### 2. Build & Deploy

```bash
cd client
npm run build
```

### 3. Upload to Hostinger

Upload **ALL files** from `client/dist/` to `/public_html/` in Hostinger File Manager.

**That's it!** ✨

---

## 📚 Documentation

- **[QUICK-DEPLOY.md](./QUICK-DEPLOY.md)** - Simple deployment guide (recommended)
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Detailed deployment instructions with troubleshooting

---

## ✨ What Happens Automatically

When you run `npm run build`:

✅ Domain automatically replaced in sitemap.xml, sitemap.txt, robots.txt  
✅ Sitemap dates updated to today  
✅ All static files optimized and generated  
✅ `.htaccess` configured for React Router & HTTPS  
✅ PWA manifest included  
✅ SEO files ready for search engines

---

## 🛠️ Development

### Run Locally

```bash
# Install dependencies
cd client
npm install

# Start development server
npm run dev
```

Visit http://localhost:5000

### Project Structure

```
client/
├── src/              # React components and pages
├── public/           # Static assets (logos, sitemaps, etc.)
├── dist/             # Production build output (after npm run build)
├── .env.production   # Production domain configuration
└── scripts/          # Build automation scripts
```

---

## 📦 Included Files for Hostinger

The build automatically generates:

- ✅ `index.html` - Main HTML
- ✅ `.htaccess` - Apache config (HTTPS, routing, caching)
- ✅ `manifest.json` - PWA support
- ✅ `robots.txt` - Search engine rules
- ✅ `sitemap.xml` - XML sitemap
- ✅ `sitemap.txt` - Text sitemap
- ✅ `assets/` - Optimized CSS, JS, images

---

## 🔧 Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Build:** Vite
- **Routing:** Wouter (client-side routing)
- **Hosting:** Hostinger Premium (static files only)

---

## 📝 Important Notes

- This is a **static website** - no Node.js server required
- The `.htaccess` file handles all React Router routes
- Domain is configured in `client/.env.production`
- Build process is fully automated
- PWA-ready with manifest.json

---

## 🆘 Troubleshooting

**Routes return 404?**  
→ Verify `.htaccess` is uploaded (it's hidden)

**Domain not updated?**  
→ Edit `client/.env.production` and rebuild

**Styles not loading?**  
→ Clear browser cache (Ctrl+Shift+R)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed troubleshooting.

---

## 📞 Support

- **Hostinger Support:** 24/7 in hPanel
- **Build Issues:** Check terminal output

---

**Built for Hostinger Premium Web Hosting** 🎉
