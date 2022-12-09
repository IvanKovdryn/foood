new Swiper(".img-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  grabCursor: true,
  hashNavigation: {
    watchState: true,
  },
  Keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 35,
  initialSlide: 0,
  speed: 400,
  breakpoints: {
    280: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 2,
    },
  },
  watchOverflow: false,
});

const burger = document.querySelector(".burger");
const burgerOpen = document.querySelector(".icon-menu");
const closeBurger = document.querySelector(".icon-x");
const menu = document.querySelector(".nav-menu");

if (burger) {
  burger.addEventListener("click", function (e) {
    burgerOpen.classList.toggle("_active");
    menu.classList.toggle("_active");
    closeBurger.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  });
}

// const links = document.querySelectorAll(".link");
// if (links.length > 0) {
//   links.forEach((link) => {
//     link.addEventListener("click", clickLink);
//   });
//   function clickLink(a) {
//     const link = a.target;
//     burgerOpen.classList.remove("_active");
//     menu.classList.remove("_active");
//     closeBurger.classList.remove("_active");
//     document.body.classList.remove("_lock");
//     if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
//       const gotoBlock = document.querySelector(link.dataset.goto);
//       const gotoValue =
//         gotoBlock.getBoundingClientRect().top +
//         pageYOffset -
//         document.querySelector(".nav").offsetHeight;
//       window.scrollTo({
//         top: gotoValue,
//         behavior: "smooth",
//       });
//     }
//   }
// }

const links = document.querySelectorAll(".link");
if (links.length > 0) {
  links.forEach((link) => {
    link.addEventListener("click", clickLink);
  });
  function clickLink(a) {
    const link = a.target;
    burgerOpen.classList.remove("_active");
    menu.classList.remove("_active");
    closeBurger.classList.remove("_active");
    document.body.classList.remove("_lock");
  }
}
