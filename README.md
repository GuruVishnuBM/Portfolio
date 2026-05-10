# Guru Vishnu B M — Portfolio

A full stack developer portfolio built with React + Vite, featuring a deep navy & blue theme with EmailJS contact form integration.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## 📧 EmailJS Setup (to receive contact emails)

1. Sign up free at https://www.emailjs.com (200 emails/month free)
2. **Add Email Service** → Connect your Gmail account → Copy the **Service ID**
3. **Create Email Template** → Use these variables in the body:

   ```
   Name:    {{from_name}}
   Email:   {{from_email}}
   Message: {{message}}
   ```
   Set **To Email** → `guruvishnu7@gmail.com` → Save → Copy the **Template ID**

4. Go to **Account → API Keys** → Copy your **Public Key**

5. Open `src/emailjs.config.js` and paste your keys:

   ```js
   export const EMAILJS_CONFIG = {
     SERVICE_ID:  "service_xxxxxxx",
     TEMPLATE_ID: "template_xxxxxxx",
     PUBLIC_KEY:  "your_public_key",
   }
   ```

---

## ✏️ Customising Content

All portfolio content lives in **`src/data.js`** — edit it to update:
- Name, role, location, bio, social links
- Projects (title, description, tech stack, link)
- Skills and proficiency percentages
- Stats (years of experience, projects, clients)

---

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              ← React entry point
    ├── App.jsx               ← App root
    ├── Portfolio.jsx         ← Assembles all sections
    ├── index.css             ← Global reset + CSS variables
    ├── globals.css           ← Shared utilities, buttons, animations
    ├── data.js               ← All your portfolio content
    ├── emailjs.config.js     ← EmailJS credentials
    └── components/
        ├── Nav.jsx / .module.css
        ├── Hero.jsx / .module.css
        ├── About.jsx / .module.css
        ├── Projects.jsx / .module.css
        ├── Skills.jsx / .module.css
        ├── Contact.jsx / .module.css
        └── Footer.jsx / .module.css
```

---

## 🏗️ Build for Production

```bash
npm run build
# Output goes to /dist — deploy to Vercel, Netlify, or GitHub Pages
```

### Deploy to Vercel (recommended — free)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag & drop the /dist folder at app.netlify.com/drop
```
