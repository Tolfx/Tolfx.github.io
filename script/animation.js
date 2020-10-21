const powerOut_One = gsap.timeline({ defaults: { ease: "power1.out" } });

//Coming soon container

powerOut_One.to(
  ".container",
  { y: "-50%", duration: 1, stagger: 0.5 },
);
powerOut_One.fromTo(".header", { opacity: 0 }, { opacity: 1, duration: 0.5 });
powerOut_One.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 0.5 });
powerOut_One.fromTo(
  ".intro-text",
  { opacity: 0 },
  { opacity: 1, duration: 0.5 },
);
powerOut_One.fromTo(
  "#about",
  { opacity: 0 },
  { opacity: 1, duration: 0.5 },
);
powerOut_One.fromTo(
  ".flexbox-container",
  { opacity: 0 },
  { opacity: 1, duration: 0.25 },
);

powerOut_One.fromTo("#repos-text", { opacity: 0 }, { opacity: 1, duration: 0.25 });
powerOut_One.fromTo(
  ".flexbox-repo",
  { opacity: 0 },
  { opacity: 1, duration: 0.25 },
);
powerOut_One.fromTo(".payments", { opacity: 0 }, { opacity: 1, duration: 0-25 });
powerOut_One.fromTo("footer", { opacity: 0 }, { opacity: 1, duration: 0.25 });
