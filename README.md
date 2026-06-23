# st287 ខ្ទិះកាហ្វេ

Single-page website for st287 Ktis Café — a specialty coffee shop on Street 287, Boeung Kak II, Toul Kork, Phnom Penh. Plain HTML, CSS, and JavaScript. No frameworks, no build step, no dependencies.

## Structure

```
index.html          Main page
css/style.css       All styles and animations
js/script.js        Nav, scroll reveal, hours highlight
manifest.json       PWA manifest
assets/             Logo, cafe photo, colour reference
```

## Features

- **Sticky nav** — background appears after 50px scroll
- **Responsive hamburger menu** — overlay nav for mobile
- **Scroll reveal** — sections animate in via IntersectionObserver
- **Today's hours highlight** — detects current day using Cambodia time (UTC+7) and highlights the correct row
- **PWA manifest** — installable on mobile home screen

## Usage

Open `index.html` in a browser. No install or build needed.

## Customisation

- **Name & content** — find and replace `st287 ខ្ទិះកាហ្វេ` throughout `index.html`
- **Colours** — CSS variables at the top of `style.css`
- **Menu items** — edit `.menu-card` blocks in `index.html`
- **Hours & location** — update the `visit-section` in `index.html`
- **PWA metadata** — edit `manifest.json`

## Fonts

Loaded from Google Fonts: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond), [DM Sans](https://fonts.google.com/specimen/DM+Sans), [Space Mono](https://fonts.google.com/specimen/Space+Mono), [Noto Sans Khmer](https://fonts.google.com/specimen/Noto+Sans+Khmer). Requires internet connection to render correctly.
