(function () {
  const body = document.body;
  let lastScroll = window.scrollY;
  body.dataset.scrollDir = "down";

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else if (Math.abs(entry.boundingClientRect.top) > window.innerHeight * 1.2) {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px 18% 0px",
    }
  );

  document.querySelectorAll(".slide-item").forEach((item) => observer.observe(item));

  const updateDirection = () => {
    const current = window.scrollY;
    if (Math.abs(current - lastScroll) > 6) {
      body.dataset.scrollDir = current > lastScroll ? "down" : "up";
      lastScroll = current;
    }
  };

  window.addEventListener("scroll", updateDirection, { passive: true });
})();
