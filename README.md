# Net-Shield Website

Welcome to the **Net-Shield** website repository! This guide will walk you through the steps of deploying the website using **GitHub Pages** and a custom domain (`www.net-shield.net`), while ensuring the site is secured via **SSL**.

## Prerequisites

Before deploying, ensure the following:

* A **GitHub repository** for the project.
* A **Cloudflare** account for DNS management.
* **Vite** is configured for the build.
* A registered custom domain (e.g., `www.net-shield.net`) pointed to **Cloudflare**.

## 1. **Setting Up the Website**

### 1.1 Clone the Repository

```bash
git clone https://github.com/your-org/net-shield-website.git
cd net-shield-website
```

### 1.2 Install Dependencies

```bash
npm install
```

### 1.3 Build the Site

```bash
npm run build
```

---

## 2. **Setting Up GitHub Pages**

1. Go to your **GitHub repository** → **Settings** → **Pages**.
2. Set **Source** to `main` (or your preferred branch).
3. Ensure the root directory is set for deployment (where `index.html` is located).

---

## 3. **Custom Domain Setup**

### 3.1 Cloudflare DNS Configuration

Ensure you have the following DNS records set up in **Cloudflare** (or your DNS provider):

* **A Record for Apex domain (`@`)**: Points to GitHub Pages’ IPs.
* **CNAME Record for `www`**: Points to `yourusername.github.io`.

**Verify DNS Propagation** using a tool like [DNSChecker](https://dnschecker.org).

### 3.2 GitHub Pages Custom Domain

1. Go to **GitHub Settings** → **Pages**.
2. Enter `www.net-shield.net` under **Custom Domain** and save.

---

## 4. **Setting Up SSL (HTTPS)**

### 4.1 Enable HTTPS on GitHub Pages

Once the DNS is correctly configured, GitHub Pages will automatically issue an SSL certificate.

1. Go to **Settings** → **Pages**.
2. Enable **Enforce HTTPS**.

### 4.2 Cloudflare SSL Configuration

1. Log into **Cloudflare** and navigate to **SSL/TLS**.
2. Set SSL mode to **Full (strict)**.

---

## 5. **Redirect Root Domain to `www`**

To redirect `https://net-shield.net` to `https://www.net-shield.net`, use a **Page Rule** in Cloudflare:

1. Go to **Cloudflare** → **Page Rules**.
2. Create a new rule with the following settings:

   * **URL Pattern**: `https://net-shield.net/*`
   * **Setting**: **Forwarding URL (301)** to `https://www.net-shield.net/$1`.

---

## 6. **Final Testing**

* **Test the Website** at `https://www.net-shield.net` to ensure everything works.
* **Check SSL** by looking for the padlock in the browser.
* **Test Redirect** by visiting `https://net-shield.net`.

---

## 7. **Troubleshooting**

* **SSL not working?** Double-check DNS settings, and ensure Cloudflare SSL is set to **Full (strict)**.
* **Custom domain not working?** Wait for DNS propagation or check Cloudflare settings.

---

## 8. **Additional Resources**

* [GitHub Pages Documentation](https://docs.github.com/en/pages)
* [Cloudflare DNS Setup Guide](https://developers.cloudflare.com/fundamentals/dns/)
* [Vite Documentation](https://vitejs.dev/)