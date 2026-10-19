# Subhan Ali — Personal Portfolio

A professional, editorial, minimal personal portfolio website built with **React (Vite)** and **Vanilla CSS** (CSS variables, modern semantic HTML, no Tailwind, no UI libraries).

Designed with an honest, confident, editorial aesthetic specifically tailored for showcasing work to clients, collaborators, and potential employers.

---

## ⚡ Quickstart

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` (or the port displayed in the terminal).

### 3. Build for Production
```bash
npm run build
```
This builds an optimized production bundle inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Edit Your Content

All personal content and site configuration lives in **a single file**:
`src/data/siteData.js`

To update your portfolio, simply open [src/data/siteData.js](file:///c:/Users/subhan/Desktop/portifoloi/src/data/siteData.js) and modify:
- **`name`**: Your display name
- **`title`**: Your professional title
- **`tagline`**: 1-2 sentence value statement
- **`about`**: Background narrative
- **`location`**: City and country
- **`email`**: Your contact email
- **`whatsappNumber`**: Your WhatsApp number in international format (e.g. `923234114338`)
- **`whatsappMessage`**: Pre-filled message for WhatsApp direct chats
- **`github`**: GitHub profile URL
- **`linkedin`**: LinkedIn profile URL
- **`stats`**: Array of stats cards (`Projects Built`, `Technologies`, `Currently Learning`)
- **`skills`**: Categorized skills dictionary (`Frontend`, `Backend`, `Mobile`, `Tools & Workflow`)
- **`services`**: Services offered
- **`projects`**: Array of project objects with:
  - `title`, `description`, `fullDescription`, `role`, `tech`, `image`, `liveUrl`, `githubUrl`
  - *Tip: If `liveUrl` or `githubUrl` is empty (`""`), the corresponding button will automatically stay hidden.*
- **`testimonials`**: Array of client feedback. *Left empty by default (`[]`) so the section remains hidden until real client testimonials are added.*
- **`formspreeId`**: Your Formspree form ID for the contact form

---

## 🖼️ How to Replace Images & CV

All static assets are located in the `public/` directory:

| Asset | Path | Description | Recommended Dimensions |
| :--- | :--- | :--- | :--- |
| **Profile Photo** | `public/images/profile.jpg` | Your headshot photo | 600x600 px (1:1 square) |
| **Project 1** | `public/images/projects/project-1.png` | Web app screenshot | 1200x675 px (16:9) |
| **Project 2** | `public/images/projects/project-2.png` | Mobile app showcase | 1200x675 px (16:9) |
| **Project 3** | `public/images/projects/project-3.png` | Business site mockup | 1200x675 px (16:9) |
| **Curriculum Vitae**| `public/cv/cv.pdf` | Your downloadable PDF CV | Standard A4 / Letter PDF |
| **Favicon** | `public/favicon.svg` | Browser tab icon | Vector SVG |

> **Graceful Image Fallbacks**: If an image is missing or cannot be loaded, the site displays a neat neutral geometric placeholder with the project or profile title instead of a broken browser icon.

---

## 📬 Contact Form Setup (Formspree)

1. Go to [https://formspree.io/](https://formspree.io/) and create a free account.
2. Create a new form and copy your Form ID (e.g., `xpznkoyz`).
3. Open `src/data/siteData.js` and update:
   ```javascript
   export const formspreeId = "your_actual_form_id";
   ```
4. Now, messages sent via the contact form will be delivered directly to your email inbox!

---

## 🚀 Deployment Guide

### Deploying to Vercel (Recommended)

#### Option A: Via GitHub (Continuous Deployment)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/subhanaliwebdeveloper/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New..."** → **"Project"** and import your repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**. Any future commit to `main` will automatically deploy!

#### Option B: Via Vercel CLI
```bash
npx vercel
```

---

### Deploying to Netlify

#### Option A: Drag & Drop
1. Run `npm run build` in your terminal.
2. Log into [netlify.com](https://netlify.com/).
3. Drag the generated `dist/` folder directly into the Netlify Sites dashboard.

#### Option B: Git Integration
1. Connect your repository on Netlify.
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **"Deploy site"**.

---

## 📁 Project Structure

```
├── public/
│   ├── cv/
│   │   └── cv.pdf                 # Downloadable CV
│   ├── images/
│   │   ├── profile.jpg            # Hero portrait
│   │   └── projects/              # Project screenshots
│   │       ├── project-1.png
│   │       ├── project-2.png
│   │       └── project-3.png
│   └── favicon.svg                # Monogram SVG favicon
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx        # Contact form with validation
│   │   ├── FloatingWhatsApp.jsx   # Tasteful floating WhatsApp CTA
│   │   ├── Footer.jsx             # Minimalist editorial footer
│   │   ├── Header.jsx             # Sticky nav & mobile drawer
│   │   ├── ImageWithFallback.jsx  # Zero-broken-image loader
│   │   ├── ProjectCard.jsx        # Project card with conditional links
│   │   └── ProjectModal.jsx       # Accessible project detail dialog
│   ├── data/
│   │   └── siteData.js            # Single source of truth for all content
│   ├── hooks/
│   │   ├── useScrollSpy.js        # Active section tracking for nav
│   │   └── useTheme.js            # Light/Dark mode with persistence
│   ├── sections/
│   │   ├── AboutSection.jsx       # Narrative & honest stats
│   │   ├── ContactSection.jsx     # Channels & contact form
│   │   ├── HeroSection.jsx        # Intro, CTA buttons & portrait
│   │   ├── ProjectsSection.jsx    # Projects grid & modal trigger
│   │   ├── ServicesSection.jsx    # Numbered service cards
│   │   ├── SkillsSection.jsx      # Categorized tag lists
│   │   └── TestimonialsSection.jsx# Conditional testimonials section
│   ├── styles/
│   │   ├── base.css               # Reset, typography, accessibility
│   │   ├── components.css         # Buttons, header, drawer, modal, forms
│   │   ├── responsive.css         # Breakpoint rules (360px, 768px, 1280px)
│   │   ├── sections.css           # Grid layouts and section typography
│   │   └── variables.css          # Design tokens & color palettes
│   ├── App.jsx                    # Root layout
│   ├── index.css                  # Main cascade stylesheet
│   └── main.jsx                   # Entry point
├── index.html                     # Semantic HTML, Google Fonts, SEO meta
├── package.json                   # Dependencies and scripts
└── vite.config.js                 # Vite configuration
```

---

## 🎨 Design System Notes

- **Aesthetic**: Minimal, editorial, magazine-inspired layout.
- **Palette**: Warm off-white background (`#fbfaf8`), crisp charcoal typography (`#171615`), and a restrained terracotta accent (`#b44322`). In dark mode: deep inky charcoal (`#131312`) and soft warm terracotta (`#e06846`).
- **Typography**: Google Fonts [`Fraunces`](https://fonts.google.com/specimen/Fraunces) (editorial serif headings) paired with [`DM Sans`](https://fonts.google.com/specimen/DM+Sans) (clean sans-serif body).
- **Accessibility**: Semantic elements (`<main>`, `<header>`, `<section>`, `<article>`, `<dialog>`, `<footer>`), visible focus rings, WCAG AA/AAA contrast ratios, and `prefers-reduced-motion` compliance.
