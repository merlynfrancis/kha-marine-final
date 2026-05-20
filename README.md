# KHA Marine — Static Website

Premium UAE marine engineering / fiberglass boat manufacturing website.
Pure static: HTML + CSS + vanilla JavaScript. No build step. No framework.

> Formerly **Mazboat / Mazboats** — rebranded as **KHA Marine**.

---

## File Structure

```
kha-marine/
├── index.html              Home
├── about.html              About / story / values
├── manufacturing.html      Fiberglass process + capabilities
├── models.html             Boat catalog (filterable)
├── services.html           Manufacturing & marine services
├── maintenance.html        Maintenance programs
├── projects.html           Government & enterprise case studies
├── seven-seas.html         "7 Seas" brand philosophy
├── contact.html            Contact + inquiry form + FAQ
├── 404.html                Not found
│
├── css/
│   ├── themes.css          Color tokens for all 3 themes (edit colors here)
│   ├── styles.css          Component & layout styles
│   └── responsive.css      Breakpoints (1100 / 900 / 680 / 460)
│
├── js/
│   ├── data.js             ALL site content (models, services, clients, FAQs…)
│   ├── theme.js            Theme switcher (Ocean / Steel / Gulf)
│   ├── main.js             Header, mobile drawer, ribbon, footer year
│   ├── animations.js       Scroll reveal (IntersectionObserver)
│   ├── models.js           Model catalog filtering
│   └── hero-canvas.js      WebGL hero shimmer (optional, mobile-disabled)
│
├── assets/
│   ├── icons/              Favicon + brand mark SVGs
│   ├── logos/              Client/partner logos (placeholder SVGs)
│   └── images/             (Empty; real photos go here)
│
├── vercel.json             Vercel config (clean URLs)
└── README.md               This file
```

---

## Deploy

### Option A — Vercel (drag & drop)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag the entire `kha-marine` folder onto the page.
3. Click **Deploy**. That's it — no build settings, no env vars.

### Option B — Vercel CLI

```bash
npm i -g vercel
cd kha-marine
vercel        # follow prompts for first deploy
vercel --prod # promote to production
```

### Option C — Any static host

Upload the folder contents to Netlify, Cloudflare Pages, GitHub Pages, S3, or any web host. There is no build step — what you see is what gets served.

---

## Customize

### 1. Replace contact details (do this first)

These values appear in every page footer + the contact page. Find & replace across all files:

| Placeholder            | Replace with                                                               |
| ---------------------- | -------------------------------------------------------------------------- |
| `971000000000`         | Your WhatsApp number, digits only, with country code (e.g. `971501234567`) |
| `hello@khamarine.ae` | Your real email                                                            |
| `+971 52 292 7079`     | Your phone number for display                                              |

Quick command (macOS / Linux):

```bash
# WhatsApp number
grep -rl "971000000000" . | xargs sed -i '' 's/971000000000/971501234567/g'

# Email
grep -rl "hello@khamarine.ae" . | xargs sed -i '' 's/hello@khamarine.ae/info@yourdomain.ae/g'
```

### 2. Edit content (models, services, clients, FAQs, etc.)

**All text content lives in `js/data.js`.** This is the only file you need to edit to change product descriptions, service offerings, client lists, project case studies, FAQ entries, or process steps.

Example — adding a new boat model:

```js
// In js/data.js, find the `models` array and add an entry:
{
  id: 'patrol-x',
  name: 'Patrol X-Series',
  category: 'patrol',
  categoryLabel: 'Patrol',
  length: '12.4 m',
  capacity: '8 crew',
  use: 'Coastal patrol & rapid response',
  description: 'Reinforced hull engineered for sustained high-speed operation in Gulf conditions.',
  image: 'assets/images/patrol-x.jpg'   // or an Unsplash URL
}
```

### 3. Replace placeholder logos

Logos in `assets/logos/` are simple SVG placeholders that use `currentColor` so they automatically recolor with each theme. To use real logos:

- Replace the SVG files with your own (preferably SVG with `fill="currentColor"` for theme support).
- If using PNG/JPG instead, add the new filename to the `clients` array in `js/data.js`.

### 4. Edit theme colors

Open `css/themes.css`. Each theme is a single block of CSS variables:

```css
[data-theme="ocean"] {
  --bg: #050a14; /* Page background */
  --accent: #4a9eff; /* Primary accent (links, buttons, highlights) */
  --text: #e8edf5; /* Body text */
  /* …etc */
}
```

Change the hex values and reload — the entire site retints. To add a fourth theme, copy a block, give it a new name (e.g. `[data-theme="midnight"]`), then add a button to the `.theme-switch` group in each page's `<head>` snippet. Allowed theme names also need to be added to the inline anti-FOUC script in each `<head>` and to `js/theme.js`.

### 5. WebGL hero shimmer

The hero canvas runs a tiny GLSL shimmer behind the home page headline. It's already disabled on mobile and respects `prefers-reduced-motion`.

- **To slow it down**: open `js/hero-canvas.js` and lower `TIME_SCALE` (default `0.00012`).
- **To soften it**: open `css/styles.css`, find `.hero-canvas`, and lower its `opacity`.
- **To remove entirely**: in `index.html`, delete the `<canvas class="hero-canvas">` element and the `<script src="js/hero-canvas.js">` tag. The CSS gradient backdrop alone looks polished.

### 6. Form submission (contact page)

The form on `contact.html` currently shows an `alert()` placeholder. To wire it to a real backend:

- **Easy**: use [Formspree](https://formspree.io/) — change the form's `action` to your Formspree endpoint and remove the `onsubmit` handler.
- **Self-hosted**: replace the placeholder handler in `contact.html` with a `fetch()` POST to your API.
- **WhatsApp shortcut**: the form already has a "Send via WhatsApp" button beside the submit button — many UAE businesses prefer this.

---

## Browser Support

- Modern Chrome, Safari, Firefox, Edge (last 2 years).
- Mobile Safari & Chrome on iOS/Android.
- Graceful degradation: WebGL canvas is skipped on devices without WebGL or on mobile, falling back to a CSS gradient. Animations are disabled when `prefers-reduced-motion` is set.

## Performance Notes

- No JavaScript framework. Total JS is under 25 KB unminified.
- Fonts loaded via Google Fonts with `display=swap` and preconnect.
- Images use Unsplash placeholders — replace with your own optimized JPEGs/WebPs in `assets/images/` and they'll cache through the CDN.
- Target: Lighthouse 95+ across the board.

## Notes for the Developer Handing This Off

- The `<head>` block is repeated across pages because there's no template engine. If you change the navigation or footer, change it in every HTML file (or re-introduce a build step like `eleventy` or even server-side includes).
- Themes set via `data-theme` on `<html>`. The inline script in `<head>` reads `localStorage` before stylesheets load, preventing a flash of the wrong theme.
- All scroll-reveal animations key off the `.reveal` class — add it to any element you want to animate in, with optional `data-delay="1"` through `data-delay="4"` for staggering.
