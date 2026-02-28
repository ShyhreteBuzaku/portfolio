# Deploy Portfolio to DigitalOcean and Connect GoDaddy Domain

Two main options: **App Platform** (easiest, recommended) or a **Droplet** (more control).

---

## Option 1: DigitalOcean App Platform (recommended)

App Platform builds and runs your Next.js app and gives you a URL. You then point your GoDaddy domain to it.

### 1. Push your code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-shb.git
git push -u origin main
```

### 2. Create the app on DigitalOcean

1. Go to [DigitalOcean](https://cloud.digitalocean.com) → **Apps** → **Create App**.
2. Choose **GitHub** and authorize DigitalOcean. Select your `portfolio-shb` repo and branch (e.g. `main`).
3. DigitalOcean should detect **Next.js**. If not:
   - **Build Command:** `npm run build`
   - **Run Command:** `npm run start`
   - **HTTP Port:** `3000`
4. Under **Resources**, use the default **Basic** plan (or upgrade if you want).
5. Click **Next** → **Next** → **Create Resources**. Wait for the first build and deploy.
6. You’ll get a URL like `https://portfolio-shb-xxxxx.ondigitalocean.app`. Open it to confirm the site works.

### 3. Add your custom domain in DigitalOcean

1. In your app → **Settings** → **Domains**.
2. Click **Add Domain**.
3. Enter your domain (e.g. `yourdomain.com`) and, if you want, `www.yourdomain.com`.
4. DigitalOcean will show the exact DNS records you need. Usually something like:
   - **CNAME** for `www` → `portfolio-shb-xxxxx.ondigitalocean.app` (or the value they show)
   - For the **root** domain (`yourdomain.com`), they may show a CNAME to the same target or an A record; use what they display.

### 4. Point your GoDaddy domain to DigitalOcean

1. Log in to [GoDaddy](https://www.godaddy.com) → **My Products** → your domain → **DNS** (or **Manage DNS**).
2. Add or edit records to match what DigitalOcean showed:

   **For `www.yourdomain.com`:**
   - Type: **CNAME**
   - Name: `www` (or `www.yourdomain.com` if GoDaddy shows it that way)
   - Value: the hostname DigitalOcean gave you (e.g. `portfolio-shb-xxxxx.ondigitalocean.app`)
   - TTL: 600 or 1 Hour

   **For root `yourdomain.com`:**
   - If DigitalOcean gives you an **A** record: Type **A**, Name `@`, Value = the IP they show.
   - If they give you a **CNAME** for root: Type **CNAME**, Name `@`, Value = the hostname they show (some registrars allow CNAME on root; GoDaddy sometimes uses “CNAME flattening” or an alias—follow what DO displays).

3. Remove or avoid duplicate records (e.g. old A record for `@` pointing elsewhere) so the new ones take effect.
4. Save. DNS can take from a few minutes up to 24–48 hours to propagate.

### 5. SSL (HTTPS)

On App Platform, SSL is usually automatic once the domain is correctly pointed. After DNS propagates, your `https://yourdomain.com` and `https://www.yourdomain.com` should work.

---

## Option 2: Deploy on a Droplet (VPS)

Use this if you prefer a server you fully control (Node, Nginx, PM2, etc.).

### 1. Create a Droplet

1. DigitalOcean → **Droplets** → **Create Droplet**.
2. Choose an image (e.g. **Ubuntu 22.04**), a plan (Basic $6/mo is enough to start), and a region. Add your SSH key.
3. Create the Droplet and note its **IP address**.

### 2. Build your app locally (or in CI)

```bash
npm run build
```

Upload the whole project to the Droplet (e.g. with `rsync`, Git, or SCP), including:
- `.next` (build output)
- `node_modules` (or run `npm ci` on the server)
- `package.json`, `next.config.mjs`, `public/`, etc.

### 3. Run Next.js on the Droplet

SSH into the Droplet, then for example:

```bash
# Install Node (e.g. 20.x)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# In your app directory
npm ci --production=false
npm run build
npm run start   # or use PM2: pm2 start npm --name "portfolio" -- start
```

Run on port **3000** (or another port and put Nginx in front).

### 4. Nginx (optional but recommended)

Install Nginx and proxy to your app:

```bash
sudo apt install nginx
```

Create a server block (e.g. `/etc/nginx/sites-available/portfolio`):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable it, test, reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### 5. Point GoDaddy to the Droplet

In GoDaddy DNS:

- **A record:** Name `@`, Value = your **Droplet IP**, TTL 600.
- **CNAME record:** Name `www`, Value `yourdomain.com` (so www points to the same IP) or another target if you prefer.

### 6. SSL on the Droplet

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts. Certbot will configure HTTPS and renewals.

---

## Quick reference: GoDaddy DNS

| Goal              | Type  | Name | Value                          |
|------------------|-------|------|---------------------------------|
| `www` → App Plat.| CNAME | www  | `yourapp.ondigitalocean.app`    |
| Root → App Plat. | A or CNAME | @ | IP or hostname from DigitalOcean |
| Root → Droplet   | A     | @    | Your Droplet IP                 |
| `www` → Droplet  | CNAME | www  | `yourdomain.com`               |

After changing DNS, check with:

- [https://dnschecker.org](https://dnschecker.org) (search for your domain and `www`).
- `dig yourdomain.com` or `nslookup yourdomain.com` from your machine.

Once DNS points to DigitalOcean and (on Droplet) Nginx and SSL are set, your GoDaddy domain will serve your portfolio from DigitalOcean.
