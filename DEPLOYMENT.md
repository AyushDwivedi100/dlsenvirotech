# Deployment Guide for Hostinger Premium Web Hosting

This guide will help you deploy the DLS Envirotech website to Hostinger's Premium Web Hosting plan.

## 📋 Prerequisites

- Hostinger Premium Web Hosting account
- FTP credentials or File Manager access from hPanel
- Domain configured in Hostinger

## 🏗️ Building the Static Site

### Step 1: Build the Project Locally

Run the following commands in your local development environment:

```bash
# Navigate to the client directory
cd client

# Install dependencies (if not already installed)
npm install

# Build the static site
npm run build
```

This will create a `dist` folder inside the `client` directory with all your static files.

### Step 2: Verify Build Output

Check that the `client/dist` folder contains:
- `index.html` - Main HTML file
- `assets/` - CSS, JavaScript, and other assets
- `.htaccess` - Apache configuration
- `manifest.json` - PWA manifest
- `robots.txt` - Search engine directives
- `sitemap.xml` - XML sitemap
- `sitemap.txt` - Text sitemap
- All other static assets (images, fonts, etc.)

## 🚀 Deployment Methods

### Method 1: Manual Upload via File Manager (Recommended for Beginners)

1. **Login to hPanel**
   - Go to [Hostinger hPanel](https://hpanel.hostinger.com)
   - Login with your credentials

2. **Open File Manager**
   - Navigate to **Files** → **File Manager**
   - You'll see the `/public_html` directory

3. **Clear public_html (First Time Only)**
   - Delete any default files in `/public_html`
   - Keep the folder empty

4. **Upload Build Files**
   - Navigate to the `client/dist` folder on your local machine
   - Select **ALL** files and folders inside `dist`
   - Upload them directly to `/public_html` (NOT into a subdirectory)

5. **Verify Structure**
   - Your `/public_html` should look like:
     ```
     /public_html/
       ├── index.html
       ├── .htaccess
       ├── manifest.json
       ├── robots.txt
       ├── sitemap.xml
       ├── sitemap.txt
       ├── assets/
       │   ├── index-[hash].js
       │   ├── index-[hash].css
       │   └── ...
       └── [other static files]
     ```

6. **Set Permissions**
   - Files: 644
   - Folders: 755
   - (Usually set automatically by Hostinger)

### Method 2: FTP Upload

1. **Get FTP Credentials**
   - In hPanel, go to **Files** → **FTP Accounts**
   - Note down: hostname, username, password, port (21)

2. **Connect via FTP Client** (FileZilla recommended)
   - Host: Your FTP hostname (e.g., `ftp.yourdomain.com`)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21

3. **Upload Files**
   - Navigate to `/public_html` on the remote server
   - Upload all contents from `client/dist` folder
   - Ensure `.htaccess` is uploaded (show hidden files in FileZilla)

### Method 3: Git Auto-Deployment (Advanced)

1. **Setup Git in hPanel**
   - Go to **Advanced** → **Git**
   - Click **Create New Repository**

2. **Configure Repository**
   - Repository URL: Your GitHub repo URL
   - Branch: `main` or `master`
   - Deployment path: Leave blank (deploys to `/public_html`)

3. **Add Build Script**
   - In your repository, add a `.hostinger-deploy.sh` script:
     ```bash
     #!/bin/bash
     cd client
     npm install
     npm run build
     cp -r dist/* ../public_html/
     ```

4. **Setup GitHub Webhook**
   - Copy webhook URL from Hostinger
   - Add to GitHub: **Settings** → **Webhooks** → **Add webhook**
   - Paste URL and save

5. **Auto Deploy**
   - Every push to your branch will auto-deploy to Hostinger

## ⚙️ Post-Deployment Configuration

### 1. SSL Certificate
- Hostinger automatically installs free SSL
- Verify at: **Security** → **SSL**
- Force HTTPS is enabled via `.htaccess`

### 2. Update Domain in Files
Before building, update `dlsenvirotech.com` to your actual domain in:
- `client/public/robots.txt` (line 13)
- `client/public/sitemap.xml` (all `<loc>` tags)
- `client/public/sitemap.txt` (all URLs)

### 3. Verify Deployment
Visit your website:
- Main site: `https://yourdomain.com`
- Sitemap: `https://yourdomain.com/sitemap.xml`
- Robots: `https://yourdomain.com/robots.txt`
- Manifest: `https://yourdomain.com/manifest.json`

### 4. Test Routes
Since this is a Single Page Application (SPA), test these routes:
- `/services`
- `/portfolio`
- `/about`
- `/contact`
- `/gallery`
- `/quote`
- `/news`

All should work thanks to the `.htaccess` rewrite rules.

## 🔧 Important Files Explained

### `.htaccess`
- Forces HTTPS
- Handles React Router (SPA routing)
- Enables Gzip compression
- Sets browser caching
- Security headers

### `manifest.json`
- PWA support
- Add to home screen functionality
- App branding

### `robots.txt`
- Search engine crawling rules
- Links to sitemap

### `sitemap.xml` & `sitemap.txt`
- SEO optimization
- Helps search engines index pages

## 🐛 Troubleshooting

### Issue: 404 Errors on Routes
**Solution:** Verify `.htaccess` is uploaded and mod_rewrite is enabled in Hostinger (it's enabled by default).

### Issue: Styles Not Loading
**Solution:** 
- Check browser console for errors
- Verify all files in `assets/` folder are uploaded
- Clear browser cache (Ctrl+Shift+R)

### Issue: Blank Page
**Solution:**
- Check browser console for JavaScript errors
- Verify `index.html` is in `/public_html` root
- Ensure all asset paths are correct

### Issue: Images Not Showing
**Solution:**
- Verify image files are in the correct directories
- Check file permissions (644 for files)
- Ensure paths are relative, not absolute

## 📊 Performance Optimization

The `.htaccess` file includes:
- **Gzip Compression** - Reduces file sizes
- **Browser Caching** - Speeds up repeat visits
- **Security Headers** - Protects your site

Additional tips:
- Images are cached for 1 year
- CSS/JS cached for 1 month
- HTML not cached (instant updates)

## 🔄 Updating Your Site

When you make changes:

1. **Rebuild locally:**
   ```bash
   cd client
   npm run build
   ```

2. **Upload updated files:**
   - Upload only changed files from `dist/` to `/public_html/`
   - Or upload everything to ensure consistency

3. **Clear cache:**
   - In hPanel: **Advanced** → **Cache Manager** → **Clear All**
   - Tell visitors to hard refresh (Ctrl+Shift+R)

## 📞 Support

- **Hostinger Support:** Available 24/7 via chat in hPanel
- **Documentation:** https://support.hostinger.com

## ✅ Deployment Checklist

- [ ] Built the site (`npm run build`)
- [ ] Updated domain in sitemap and robots.txt
- [ ] Uploaded all files to `/public_html`
- [ ] Verified `.htaccess` is present
- [ ] SSL certificate is active
- [ ] Tested all routes (services, about, contact, etc.)
- [ ] Checked sitemap.xml and robots.txt are accessible
- [ ] Verified manifest.json loads
- [ ] Tested on mobile devices
- [ ] Submitted sitemap to Google Search Console

---

**Your DLS Envirotech website is now live on Hostinger! 🎉**
