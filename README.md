# Profile Card

A simple, responsive profile card built with HTML, CSS, and vanilla JavaScript. It displays an avatar, name, bio, social links, hobbies/dislikes,also an about-me and a contact me page and a live-updating timestamp in milliseconds. Icons are provided via Font Awesome CDN.

## Features

- Responsive layout (mobile to desktop)
- Accessible structure with semantic elements and focus styles
- Live time display that updates every second
- Social links with external-icon support

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla)
- Font Awesome (CDN)

## Project Structure

- `index.html` — Main page with profile markup
- `about.html` — Sub page with about me details
- `contact.html` — Sub page with form to contact
- `work1.css` — Styles for layout, typography, and responsiveness
- `work.js` — Updates the time element every second
- `profile.jpg` — Avatar image used in the card

## Run Locally

1. Serve with a simple local server (optional)

- VS Code Live Server: Open the folder in VS Code, right‑click `index.html` → "Open with Live Server"
- Python (Windows): `py -m http.server 5500` then open http://localhost:5500/
- Node (with npm): `npx serve -p 5500` then open http://localhost:5500/

## Customization

- Name: edit the `<h2 data-testid="test-user-name">` in `index.html`
- Bio: edit the `<p data-testid="test-user-bio">` in `index.html`
- Social links: update the anchors in the `nav[data-testid="test-user-social-links"]` list
- Hobbies/Dislikes: edit the list items under their respective sections
- Avatar: replace `profile.jpg` (keep the same filename or update the `src` in `index.html`)
- Time format: by default shows `Date.now()` (milliseconds). To change formatting, adjust `work.js` to use `new Date()` and a formatter such as `toLocaleString()`.

## Notes on Accessibility

- Semantic elements (`header`, `nav`, `section`, `time`) are used
- Focus outlines are visible for keyboard navigation
- Icons include appropriate ARIA labels on links

## Dependencies

- Font Awesome loaded via CDN: `https://kit.fontawesome.com/93d9fc9c96.js`
