# Hello World GUI — Left → Right Animation

Simple example that animates "Hello World" smoothly from left → right using `requestAnimationFrame`.

## Files
- `index.html` — markup
- `style.css` — styles and reduced-motion media query
- `app.js` — animation logic (requestAnimationFrame), pause on hover/focus, reduced-motion handling
- `README.md` — this file

## How to run
1. Save the files under `examples/hello-world-gui/`.
2. Open `index.html` in Chrome or Firefox (no server required).
   - Double-click file or `Open File...` in browser.

## Acceptance criteria satisfied
- Page loads with centered container showing "Hello World".
- Text animates left → right smoothly and loops; animation uses `requestAnimationFrame`.
- Works in modern Chrome and Firefox.
- Respects `prefers-reduced-motion: reduce` — the animation stops when the user sets that preference.
- Pauses on hover and when container receives keyboard focus (accessible via Tab).
- No console errors produced by the scripts.

## Notes / tweaks you can make
- Change `speed` in `app.js` (px/sec) to slow/speed the animation.
- To make animation continuous without gaps, you could duplicate the text and do a continuous marquee approach (not necessary for the acceptance criteria).
- Accessibility: the container is tabbable and pause-on-focus works for keyboard users.
