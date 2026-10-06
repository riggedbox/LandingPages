(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const animated = new WeakSet();
  const activeAnimations = new WeakMap();

  const stop = (element) => {
    const animation = activeAnimations.get(element);
    if (animation) animation.pause();
  };

  const reveal = (element) => {
    if (reduceMotion.matches || animated.has(element)) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      animated.add(element);
      return;
    }
    stop(element);
    const animation = anime({
      targets: element,
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 380,
      delay: Number(element.dataset.animationDelay || 0),
      easing: 'easeOutCubic',
      autoplay: true,
      complete: () => animated.add(element)
    });
    activeAnimations.set(element, animation);
  };

  const bindReversible = (element) => {
    if (reduceMotion.matches) return;
    const enter = () => {
      stop(element);
      activeAnimations.set(element, anime({ targets: element, translateY: -6, scale: 1.015, duration: 140, easing: 'easeOutQuad' }));
    };
    const leave = () => {
      stop(element);
      activeAnimations.set(element, anime({ targets: element, translateY: 0, scale: 1, duration: 170, easing: 'easeOutQuad' }));
    };
    element.addEventListener('mouseenter', enter, { passive: true });
    element.addEventListener('mouseleave', leave, { passive: true });
    element.addEventListener('focusin', enter);
    element.addEventListener('focusout', leave);
  };

  function init() {
    if (!window.anime || !document.querySelector('main')) return;
    const revealItems = [...document.querySelectorAll('.reveal')];
    revealItems.forEach((element, index) => { element.dataset.animationDelay = Math.min(index * 45, 360); });
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { reveal(entry.target); instance.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach((element) => observer.observe(element));

    document.querySelectorAll('.feature-card, .step, .float-card, .cta-panel, .button, .text-link').forEach(bindReversible);
    reduceMotion.addEventListener?.('change', () => {
      if (reduceMotion.matches) revealItems.forEach((element) => reveal(element));
    });
  }

  document.addEventListener('DOMContentLoaded', init, { once: true });
})();
