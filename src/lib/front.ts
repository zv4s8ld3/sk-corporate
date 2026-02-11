import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", () => {
  // ============================
  // 1. スマホメニュー開閉
  // ============================
  const spMenuBtn = document.querySelectorAll(".spMenuBtn");
  const spMenuModal = document.getElementById("spMenuModal");
  let isSpModal = false;

  if (spMenuModal) {
    gsap.set(spMenuModal, { opacity: 0, display: "none" });
  }

  spMenuBtn.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("active");
      if (isSpModal) {
        isSpModal = false;
        gsap.to(spMenuModal, {
          duration: 0.4,
          opacity: 0,
          display: "none",
          ease: "power2.inOut",
        });
      } else {
        isSpModal = true;
        gsap.to(spMenuModal, {
          duration: 0.4,
          opacity: 1,
          display: "block",
          ease: "power2.inOut",
        });
      }
    });
  });

  // ============================
  // 2. スクロールアニメーション（完全復元）
  // ============================

  const activeClass = "onActive";
  const animateEls = document.querySelectorAll<HTMLElement>("[data-animation]");

  animateEls.forEach((el) => {
    const animationClass = el.getAttribute("data-animation");

    if (!animationClass) return;

    // CSS 側の slideLeft / slideUp / slideDown / slideRight を付与
    el.classList.add(animationClass);

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "center center+=25%",
        onEnter: () => el.classList.add(activeClass),
      },
      duration: 0.5,
    });
  });

  // ============================
  // 3. FadeUpText 専用アニメーション
  // ============================
  const FadeUpText = document.querySelectorAll<HTMLElement>(
    '[data-animation="FadeUpText"]'
  );

  FadeUpText.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "Power1.easeOut",
        duration: 0.5,
        scrollTrigger: {
          trigger: el,
          start: "center center+=25%",
        },
      }
    );
  });

// ============================
// 4. ヘッダーのスクロール検知
// ============================
ScrollTrigger.create({
  start: "top -50",
  onUpdate: (self) => {
    if (self.direction === 1) {
      document.body.classList.add("is-scrolled");
    } else {
      document.body.classList.remove("is-scrolled");
    }
  },
});
    });

