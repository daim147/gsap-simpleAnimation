gsap.registerPlugin(ScrollTrigger);
function init() {
  const timeLine = gsap.timeline({
    scrollTrigger: {
      trigger: "#intro",
      start: "top+=100 top",
      end: "+=300",
      scrub: 1,
      //   markers: true,
    },
  });
  timeLine
    .to(".content", {
      opacity: 0,
    })
    .to(
      ".content img",
      {
        x: 200,
      },
      0
    )
    .to(
      ".content h1, .content p",
      {
        x: -200,
      },
      0
    );

  document.querySelectorAll(".project").forEach((project) => {
    const image = project.querySelector("img");
    const heading = project.querySelector("h2");
    const p = project.querySelector("p");
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: project,
        start: "top top+=150",
        end: "bottom center+=100",
        toggleActions: "play none none reset",
        // markers: true,
      },
      defaults: {
        ease: "bounce",
      },
    });
    timeline
      .from(image, {
        y: 200,
        opacity: 0,
      })
      .from([heading, p], {
        y: 200,
        opacity: 0,
        delay: 0.2,
      });
  });
}

window.addEventListener("load", function () {
  init();
});
