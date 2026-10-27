# ⚡ Agon Electric — Website

Next.js 14 business website for Agon Electric, Toronto.

## 🚀 Getting Started (Localhost)

### 1. Install dependencies
```bash
npm install
```

### 2. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout (Navbar + Footer on every page)
│   ├── globals.css        # Global styles + Tailwind
│   ├── page.js            # Home page
│   ├── services/page.js   # Services page
│   ├── about/page.js      # About page
│   ├── reviews/page.js    # Reviews page
│   └── contact/page.js    # Contact page
└── components/
    ├── Navbar.js           # Sticky nav with mobile menu
    ├── Footer.js           # Footer with links + contact
    └── WhatsAppButton.js   # Floating WhatsApp button
```

---

## ✏️ Things To Customize

### Contact form (Formspree)
1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form → copy your Form ID
3. Replace `YOUR_FORM_ID` in:
   - `src/app/page.js`
   - `src/app/contact/page.js`

### Google Maps embed
In `src/app/contact/page.js`, replace the placeholder div with a real iframe:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%" height="192" style={{border:0}} allowFullScreen loading="lazy"
/>
```

### Google Review link
In `src/app/reviews/page.js`, replace `YOUR_GOOGLE_REVIEW_LINK` with your
actual Google Business review link (get it from your Google Business Profile dashboard).

### WhatsApp number
Already set to `14372987771`. If it changes, update `src/components/WhatsAppButton.js`
and `src/components/Footer.js`.

---

## 🌐 Deploying to Vercel (when ready)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → Import project from GitHub
3. Vercel auto-detects Next.js — just click Deploy
4. Add your custom domain in Vercel dashboard → Settings → Domains

**Cost:** Vercel free tier is enough for this site. Only pay for the domain (~$13 CAD/yr).

---

## 🛠️ Built With

- [Next.js 14](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Formspree](https://formspree.io/) — Contact form handling (free)
- [Vercel](https://vercel.com/) — Deployment (free)
