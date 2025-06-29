(function () {
  const marquee = document.getElementById("marquee");
  const helloEl = document.getElementById("hello");
  const container = document.getElementById("container");

  let speed = 120;
  const reducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    helloEl.style.transform = "translateX(0)";
    helloEl.style.left = "0";
    helloEl.setAttribute("aria-hidden", "false");
    return;
  }

  let lastTime = null;
  let x = 0; // current x position (px) — we will animate translateX(x)
  let running = true;

  function pause() {
    running = false;
  }
  function resume() {
    running = true;
    lastTime = null;
    requestAnimationFrame(loop);
  }

  marquee.addEventListener("mouseenter", pause);
  marquee.addEventListener("mouseleave", resume);
  container.addEventListener("focus", pause);
  container.addEventListener("blur", resume);

  let textWidth = 0;
  let containerWidth = 0;
  function measure() {
    // use getBoundingClientRect for subpixel accuracy
    const textRect = helloEl.getBoundingClientRect();
    const contRect = marquee.getBoundingClientRect();
    textWidth = Math.ceil(textRect.width);
    containerWidth = Math.ceil(contRect.width);
    // start with text just outside left boundary
    x = -textWidth;
    helloEl.style.transform = `translateX(${x}px)`;
  }

  // Animation loop
  function loop(ts) {
    if (!running) {
      lastTime = ts;
      return;
    } // keep lastTime updated while paused
    if (lastTime == null) lastTime = ts;
    const dt = (ts - lastTime) / 1000; // seconds since last frame
    lastTime = ts;

    x += speed * dt;

    // If text fully passed the right edge, reset to left
    if (x > containerWidth) {
      x = -textWidth;
    }

    // Apply transform
    helloEl.style.transform = `translateX(${x}px)`;

    // Next frame
    requestAnimationFrame(loop);
  }

  function start() {
    measure();
    setTimeout(() => {
      lastTime = null;
      requestAnimationFrame(loop);
    }, 20);
  }

  // Re-measure on resize and on font load
  window.addEventListener("resize", measure);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(start).catch(start);
  } else {
    start();
  }
})();
