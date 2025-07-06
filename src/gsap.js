gsap.to("#first", {
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#first",
    start: "450px 300px",
    toggleActions: `play none none reverse`,
    markers: true,
  },
});

gsap.to("#second", {
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#second",
    start: "700px center",
    toggleActions: `play none none reverse`,
    markers: true,
  },
});
