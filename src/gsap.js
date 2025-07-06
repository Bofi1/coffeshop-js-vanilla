window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

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
    end: "1000px center",
    toggleActions: `play reverse play reverse`,
    markers: true,
  },
});

gsap.to("#qr", {
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#qr",
    start: "1200px center",
    end: "1500px center",
    toggleActions: `play reverse play reverse`,
    markers: true,
  },
});

gsap.to("#promos1", {
  y: -20,
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#promos1",
    start: "1700px center",
    end: "2000px center",
    toggleActions: `play reverse play reverse`,
    markers: true,
  },
});

gsap.to("#promos2", {
  y: -20,
  opacity: 1,
  duration: 0.6,
  scrollTrigger: {
    trigger: "#promos2",
    start: "1700px center",
    end: "2000px center",
    toggleActions: `play reverse play reverse`,
    markers: true,
  },
});

gsap.to("#promos3", {
  y: -20,
  opacity: 1,
  duration: 0.7,
  scrollTrigger: {
    trigger: "#promos3",
    start: "1700px center",
    end: "2000px center",
    toggleActions: `play reverse play reverse`,
    markers: true,
  },
});
