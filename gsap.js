const loader = document.getElementById("loader");

window.onload = function () {
  setTimeout(function () {
    $(".loader-bg").fadeToggle();
  }, 1500);

  //   loader.classList.add("display-none");

  var ruleBg1 = CSSRulePlugin.getRule(".header-main-title:before");
  var ruleBg2 = CSSRulePlugin.getRule(".header-main-title:after");

  var headerTL = gsap.timeline({ defaults: { delay: 0 } });

  gsap.registerPlugin(ScrollTrigger);

  headerTL
    .to(ruleBg1, {
      delay: 1.5,
      duration: 0.4,
      cssRule: { scaleX: 1, ease: "power2.out" },
    })
    .to(ruleBg2, { duration: 0.1, cssRule: { opacity: 1 } })
    .to(ruleBg1, { duration: 0.1, cssRule: { opacity: 0 } })
    .to(ruleBg2, { duration: 0.4, cssRule: { scaleX: 0, ease: "power2.out" } })
    .from(".reveal-text", 0.3, { opacity: 0, y: 50 })
    .from(".header-sub", 0.3, { opacity: 0, y: 50 }, "-=0.3")
    .from(".header-link", 0.3, { opacity: 0, y: 50 }, "-=0.3");

  var worksHead1 = CSSRulePlugin.getRule(".reveal-work-header:before");
  var worksHead2 = CSSRulePlugin.getRule(".reveal-work-header:after");

  let worksHeaderTL = gsap.timeline({
    scrollTrigger: { trigger: ".reveal-work-header" },
    defaults: { delay: 0 },
  });

  worksHeaderTL
    .to(worksHead1, {
      duration: 0.4,
      cssRule: { scaleX: 1, ease: "power2.out" },
    })
    .to(worksHead2, { duration: 0.1, cssRule: { opacity: 1 } })
    .to(worksHead1, { duration: 0.1, cssRule: { opacity: 0 } })
    .to(worksHead2, {
      duration: 0.4,
      cssRule: { scaleX: 0, ease: "power2.out" },
    })
    .from(".work-head-title-text", 0.3, { opacity: 0, y: 50 });

  gsap.from(".work-head-sub", {
    scrollTrigger: ".work-head-sub",
    opacity: 0,
    y: 50,
  });

  /*____________card 1 ____________ */

  var card1before = CSSRulePlugin.getRule(".card1-title:before");
  var card1after = CSSRulePlugin.getRule(".card1-title:after");

  let cardTitleTL1 = gsap.timeline({
    scrollTrigger: { trigger: ".card1-title" },
    defaults: { delay: 0 },
  });

  cardTitleTL1
    .to(card1before, {
      duration: 0.4,
      cssRule: { scaleX: 1, ease: "power2.out" },
    })
    .to(card1after, { duration: 0.1, cssRule: { opacity: 1 } })
    .to(card1before, { duration: 0.1, cssRule: { opacity: 0 } })
    .to(card1after, {
      duration: 0.4,
      cssRule: { scaleX: 0, ease: "power2.out" },
    })
    .from(".card1-title-reveal", 0.3, { opacity: 0, y: 50 });

  gsap.from(".card1-tech", {
    scrollTrigger: ".card1-tech",
    opacity: 0,
    y: 50,
  });
  gsap.from(".card1-desc", {
    scrollTrigger: ".card1-desc",
    opacity: 0,
    y: 50,
  });
  gsap.from(".card1-link", {
    scrollTrigger: ".card1-link",
    opacity: 0,
    y: 50,
  });

  var card1ImgBefore = CSSRulePlugin.getRule(".card1-img:before");
  var card1ImgAfter = CSSRulePlugin.getRule(".card1-img:after");

  let cardImgTL1 = gsap.timeline({
    scrollTrigger: { trigger: ".card1-title" },
    defaults: { delay: 0 },
  });

  cardImgTL1
    .to(card1ImgBefore, {
      duration: 0.4,
      cssRule: { scaleX: 1, ease: "power2.out" },
    })
    .to(card1ImgAfter, { duration: 0.1, cssRule: { opacity: 1 } })
    .to(card1ImgBefore, { duration: 0.1, cssRule: { opacity: 0 } })
    .to(card1ImgAfter, {
      duration: 0.4,
      cssRule: { scaleX: 0, ease: "power2.out" },
    })
    .from(".card1-img-reveal", 0.1, { opacity: 0, x: -100 }, "-=0.2")
    .from(".card-num1", 0.3, { opacity: 0, y: 50 }, "-=0.1");

  /*____________card 2 ____________ */

  var card2before = CSSRulePlugin.getRule(".card2-title:before");
  var card2after = CSSRulePlugin.getRule(".card2-title:after");

  let cardTitleTL2 = gsap.timeline({
    scrollTrigger: { trigger: ".card2-title" },
    defaults: { delay: 0 },
  });

  cardTitleTL2
    .to(card2before, {
      duration: 0.4,
      cssRule: { scaleX: 1, ease: "power2.out" },
    })
    .to(card2after, { duration: 0.1, cssRule: { opacity: 1 } })
    .to(card2before, { duration: 0.1, cssRule: { opacity: 0 } })
    .to(card2after, {
      duration: 0.4,
      cssRule: { scaleX: 0, ease: "power2.out" },
    })
    .from(".card2-title-reveal", 0.3, { opacity: 0, y: 50 });

  gsap.from(".card2-tech", {
    scrollTrigger: ".card2-tech",
    opacity: 0,
    y: 50,
  });
  gsap.from(".card2-desc", {
    scrollTrigger: ".card2-desc",
    opacity: 0,
    y: 50,
  });
  gsap.from(".card2-link", {
    scrollTrigger: ".card2-link",
    opacity: 0,
    y: 50,
  });

  var card2ImgBefore = CSSRulePlugin.getRule(".card2-img:before");
  var card2ImgAfter = CSSRulePlugin.getRule(".card2-img:after");

  let cardImgTL2 = gsap.timeline({
    scrollTrigger: { trigger: ".card2-title" },
    defaults: { delay: 0 },
  });

  cardImgTL2
    .to(card2ImgBefore, {
      duration: 0.4,
      cssRule: { scaleX: 1, ease: "power2.out" },
    })
    .to(card2ImgAfter, { duration: 0.1, cssRule: { opacity: 1 } })
    .to(card2ImgBefore, { duration: 0.1, cssRule: { opacity: 0 } })
    .to(card2ImgAfter, {
      duration: 0.4,
      cssRule: { scaleX: 0, ease: "power2.out" },
    })
    .from(".card2-img-reveal", 0.1, { opacity: 0, x: -100 }, "-=0.2")
    .from(".card-num2", 0.3, { opacity: 0, y: 50 }, "-=0.1");

  /*____________card 3 ____________ */

  var card3before = CSSRulePlugin.getRule(".card3-title:before");
  var card3after = CSSRulePlugin.getRule(".card3-title:after");

  let cardTitleTL3 = gsap.timeline({
    scrollTrigger: { trigger: ".card3-title" },
    defaults: { delay: 0 },
  });

  cardTitleTL3
    .to(card3before, {
      duration: 0.4,
      cssRule: { scaleX: 1, ease: "power2.out" },
    })
    .to(card3after, { duration: 0.1, cssRule: { opacity: 1 } })
    .to(card3before, { duration: 0.1, cssRule: { opacity: 0 } })
    .to(card3after, {
      duration: 0.4,
      cssRule: { scaleX: 0, ease: "power2.out" },
    })
    .from(".card3-title-reveal", 0.3, { opacity: 0, y: 50 });

  gsap.from(".card3-tech", {
    scrollTrigger: ".card3-tech",
    opacity: 0,
    y: 50,
  });
  gsap.from(".card3-desc", {
    scrollTrigger: ".card3-desc",
    opacity: 0,
    y: 50,
  });
  gsap.from(".card3-link", {
    scrollTrigger: ".card3-link",
    opacity: 0,
    y: 50,
  });

  var card3ImgBefore = CSSRulePlugin.getRule(".card3-img:before");
  var card3ImgAfter = CSSRulePlugin.getRule(".card3-img:after");

  let cardImgTL3 = gsap.timeline({
    scrollTrigger: { trigger: ".card3-title" },
    defaults: { delay: 0 },
  });

  cardImgTL3
    .to(card3ImgBefore, {
      duration: 0.4,
      cssRule: { scaleX: 1, ease: "power2.out" },
    })
    .to(card3ImgAfter, { duration: 0.1, cssRule: { opacity: 1 } })
    .to(card3ImgBefore, { duration: 0.1, cssRule: { opacity: 0 } })
    .to(card3ImgAfter, {
      duration: 0.4,
      cssRule: { scaleX: 0, ease: "power2.out" },
    })
    .from(".card3-img-reveal", 0.1, { opacity: 0, x: -100 }, "-=0.2")
    .from(".card-num3", 0.3, { opacity: 0, y: 50 }, "-=0.1");

  /*____________card 4 ____________ */

  var card4before = CSSRulePlugin.getRule(".card4-title:before");
  var card4after = CSSRulePlugin.getRule(".card4-title:after");

  let cardTitleTL4 = gsap.timeline({
    scrollTrigger: { trigger: ".card4-title" },
    defaults: { delay: 0 },
  });

  cardTitleTL4
    .to(card4before, {
      duration: 0.4,
      cssRule: { scaleX: 1, ease: "power2.out" },
    })
    .to(card4after, { duration: 0.1, cssRule: { opacity: 1 } })
    .to(card4before, { duration: 0.1, cssRule: { opacity: 0 } })
    .to(card4after, {
      duration: 0.4,
      cssRule: { scaleX: 0, ease: "power2.out" },
    })
    .from(".card4-title-reveal", 0.3, { opacity: 0, y: 50 });

  gsap.from(".card4-tech", {
    scrollTrigger: ".card4-tech",
    opacity: 0,
    y: 50,
  });
  gsap.from(".card4-desc", {
    scrollTrigger: ".card4-desc",
    opacity: 0,
    y: 50,
  });
  gsap.from(".card4-link", {
    scrollTrigger: ".card4-link",
    opacity: 0,
    y: 50,
  });

  var card4ImgBefore = CSSRulePlugin.getRule(".card4-img:before");
  var card4ImgAfter = CSSRulePlugin.getRule(".card4-img:after");

  let cardImgTL4 = gsap.timeline({
    scrollTrigger: { trigger: ".card4-title" },
    defaults: { delay: 0 },
  });

  cardImgTL4
    .to(card4ImgBefore, {
      duration: 0.4,
      cssRule: { scaleX: 1, ease: "power2.out" },
    })
    .to(card4ImgAfter, { duration: 0.1, cssRule: { opacity: 1 } })
    .to(card4ImgBefore, { duration: 0.1, cssRule: { opacity: 0 } })
    .to(card4ImgAfter, {
      duration: 0.4,
      cssRule: { scaleX: 0, ease: "power2.out" },
    })
    .from(".card4-img-reveal", 0.1, { opacity: 0, x: -100 }, "-=0.2")
    .from(".card-num4", 0.3, { opacity: 0, y: 50 }, "-=0.1");

  //gsap git projects

  var gitSourceBefore = CSSRulePlugin.getRule(".git-source:before");
  var gitSourceAfter = CSSRulePlugin.getRule(".git-source:after");

  var gitDescBefore = CSSRulePlugin.getRule(".git-description:before");
  var gitDescAfter = CSSRulePlugin.getRule(".git-description:after");

  let tlGit = gsap.timeline({
    scrollTrigger: { trigger: ".gitwork" },
    defaults: { delay: 0 },
  });

  tlGit
    .to(gitSourceBefore, {
      duration: 0.4,
      cssRule: { scaleX: 1, ease: "power2.out" },
    })
    .to(gitSourceAfter, { duration: 0.1, cssRule: { opacity: 1 } })
    .to(gitSourceBefore, { duration: 0.1, cssRule: { opacity: 0 } })
    .to(gitSourceAfter, {
      duration: 0.4,
      cssRule: { scaleX: 0, ease: "power2.out" },
    })
    .from(".git-source-reveal", 0.1, { opacity: 0, x: -100 }, "-=0.2")
    .to(
      gitDescBefore,
      {
        duration: 0.4,
        cssRule: { scaleX: 1, ease: "power2.out" },
      },
      "-=0.5"
    )
    .to(gitDescAfter, { duration: 0.1, cssRule: { opacity: 1 } })
    .to(gitDescBefore, { duration: 0.1, cssRule: { opacity: 0 } })
    .to(gitDescAfter, {
      duration: 0.4,
      cssRule: { scaleX: 0, ease: "power2.out" },
    })
    .from(".git-description-reveal", 0.1, { opacity: 0, x: -100 }, "-=0.2");

  console.log("working");
  // .to(secBg, 0.01, { opacity: 1 })
  // .to(firstBg, 0.01, { opacity: 0 })
  // .to(secBg, 0.4, { scaleX: 0, ease: "power2.out" })
  // .from(".textH1", 0.3, { opacity: 0, y: 50 });
};

/**cursor */

let mouseCursor = document.querySelector(".cursor");
let btn = document.querySelectorAll("a");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  gsap.to(mouseCursor, 0.4, {
    x: e.clientX,
    y: e.clientY,
  });
}

btn.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("scale-cursor");
    // mouseCursor.style.transform = "translate(5%, -5%)";
    gsap.to(mouseCursor, 0.4, {
      scale: 2,
    });
  });

  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("scale-cursor");
    gsap.to(mouseCursor, 0.4, {
      scale: 1,
    });
  });
});
