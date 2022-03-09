gsap.fromTo(".header", { opacity: 0 }, { opacity: 1, duration: 1 });

gsap.fromTo(
  ".hero__left",
  { x: "-100%", opacity: 0 },
  { x: 0, opacity: 1, duration: 1 }
);

gsap.fromTo(
  ".hero__right",
  { x: "100%", opacity: 0 },
  { x: 0, opacity: 1, duration: 1 }
);

const servicesItemObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    let tween = gsap.fromTo(
      entry.target,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.3, delay: index * 0.2 }
    );
    if (entry.isIntersecting) {
      tween.play();
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".services__item").forEach((item) => {
  servicesItemObserver.observe(item);
});

const featuresItemObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      let tweenTL = gsap.timeline();
      tweenTL
        .fromTo(
          entry.target,
          { x: 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 2,
            delay: index * 0.3,
            ease: "back.out(0.1)",
          }
        )
        .fromTo(
          entry.target.querySelector(".features__item-body"),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1 }
        );
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".features__item").forEach((item) => {
  featuresItemObserver.observe(item);
});
