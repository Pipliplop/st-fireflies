(function () {
  const NUM_FIREFLIES = 35;

  function spawnFireflies() {
    for (let i = 0; i < NUM_FIREFLIES; i++) {
      const f = document.createElement("div");
      f.className = "firefly";

      f.style.position = "fixed";
      f.style.width = "6px";
      f.style.height = "6px";
      f.style.borderRadius = "50%";

      f.style.background = "radial-gradient(circle, #dfffaa 0%, #7cff5a 40%, transparent 70%)";
      f.style.boxShadow = "0 0 6px #cfff9a, 0 0 12px #7cff5a, 0 0 20px #7cff5a";

      f.style.left = Math.random() * 100 + "vw";
      f.style.top = Math.random() * 100 + "vh";

      f.style.pointerEvents = "none";
      f.style.zIndex = "999999";

      f.animate([
        { transform: "translate(0, 0)", opacity: 0 },
        { transform: "translate(30px, -40px)", opacity: 1 },
        { transform: "translate(-20px, -80px)", opacity: 0 }
      ], {
        duration: 8000 + Math.random() * 5000,
        iterations: Infinity,
        easing: "ease-in-out"
      });

      document.body.appendChild(f);
    }
  }

  setTimeout(spawnFireflies, 2000);
})();
