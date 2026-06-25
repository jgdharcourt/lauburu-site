/* Lauburu — fiche pro : menu mobile + carrousel "La fromagerie". */
(function () {
  "use strict";

  /* ---- Menu mobile -------------------------------------------------- */
  var head = document.getElementById("head");
  var burger = head && head.querySelector(".burger");
  if (burger) {
    burger.addEventListener("click", function () { head.classList.toggle("open"); });
    head.querySelectorAll("nav a").forEach(function (a) {
      a.addEventListener("click", function () { head.classList.remove("open"); });
    });
  }

  /* ---- Carrousel « La fromagerie » ---------------------------------- */
  (function carousel() {
    var root = document.querySelector("[data-carousel]");
    if (!root) return;
    var track = root.querySelector(".carousel__track");
    var slides = Array.prototype.slice.call(track.children);
    var prev = root.querySelector("[data-prev]");
    var next = root.querySelector("[data-next]");
    var dotsWrap = root.querySelector(".carousel__dots");
    if (!slides.length) return;

    var dots = slides.map(function (_, i) {
      var b = document.createElement("button");
      b.className = "carousel__dot";
      b.type = "button";
      b.setAttribute("aria-label", "Aller à la photo " + (i + 1));
      b.addEventListener("click", function () { scrollToIndex(i); });
      dotsWrap.appendChild(b);
      return b;
    });

    var current = 0;
    function setActive(i) {
      current = i;
      dots.forEach(function (d, j) { d.classList.toggle("is-active", j === i); });
    }
    function scrollToIndex(i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      track.scrollTo({ left: slides[i].offsetLeft - track.offsetLeft, behavior: "smooth" });
      setActive(i);
    }
    prev && prev.addEventListener("click", function () { scrollToIndex(current - 1); });
    next && next.addEventListener("click", function () { scrollToIndex(current + 1); });

    var raf = false;
    track.addEventListener("scroll", function () {
      if (raf) return;
      raf = true;
      requestAnimationFrame(function () {
        raf = false;
        var center = track.scrollLeft + track.clientWidth / 2;
        var best = 0, bestDist = Infinity;
        slides.forEach(function (s, i) {
          var c = s.offsetLeft - track.offsetLeft + s.clientWidth / 2;
          var d = Math.abs(c - center);
          if (d < bestDist) { bestDist = d; best = i; }
        });
        setActive(best);
      });
    }, { passive: true });

    setActive(0);
  })();
})();
