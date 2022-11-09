// ScrollReveal
ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 400,
  reset: true,
  mobile: false,
});

ScrollReveal().reveal(".logo", {
  delay: 500,
  origin: "top",
  reset: true,
});
ScrollReveal().reveal(".title", {
  delay: 300,
  origin: "left",
  reset: true,
});
ScrollReveal().reveal(".sun", {
  delay: 600,
  origin: "bottom",
  reset: true,
});
ScrollReveal().reveal(".front", {
  delay: 1200,
  origin: "bottom",
  reset: true,
});

ScrollReveal().reveal(".moutain2", {
  delay: 600,
  origin: "bottom",
  reset: true,
});

ScrollReveal().reveal(".moutain1", {
  delay: 700,
  origin: "bottom",
  reset: true,
});

ScrollReveal().reveal(".cloud", {
  delay: 800,
  origin: "right",
  reset: true,
});

ScrollReveal().reveal(".cloud2", {
  delay: 800,
  origin: "left",
  reset: true,
});

ScrollReveal().reveal(".cloud3", {
  delay: 800,
  origin: "left",
  reset: true,
});

ScrollReveal().reveal(".btn_intro_video", {
  delay: 300,
  origin: "bottom",
  reset: true,
});

ScrollReveal().reveal(".section-title", {
  delay: 300,
  origin: "left",
  reset: true,
});

ScrollReveal().reveal(".section-text h3", {
  delay: 400,
  origin: "top",
  reset: true,
});

ScrollReveal().reveal(".section-text p", {
  delay: 400,
  origin: "bottom",
  reset: true,
});

ScrollReveal().reveal(".work_container", {
  delay: 500,
  origin: "bottom",
  reset: true,
});

ScrollReveal().reveal(".btn-contact_open", {
  delay: 400,
  origin: "bottom",
  reset: false,
});

// ScrollReveal().reveal(".section-frame img", {
//   delay: 300,
//   distance: "0px",
//   origin: "left",
//   reset: true,
// });

ScrollReveal().reveal(".section-frame .frame1-a", {
  delay: 300,
  origin: "bottom",
  reset: true,
});

ScrollReveal().reveal(".section-frame .frame1-b", {
  delay: 300,
  origin: "bottom",
  reset: true,
});

ScrollReveal().reveal(".section-frame .frame2-a", {
  delay: 400,
  origin: "bottom",
  reset: true,
});

ScrollReveal().reveal(".section-frame .frame2-b", {
  delay: 400,
  origin: "bottom",
  reset: true,
});

ScrollReveal().reveal(".section-frame .frame3", {
  delay: 500,
  origin: "bottom",
  reset: true,
});

ScrollReveal().reveal(".section-frame .frame4-a", {
  delay: 600,
  origin: "bottom",
  reset: true,
});

ScrollReveal().reveal(".section-frame .frame4-b", {
  delay: 600,
  origin: "bottom",
  reset: true,
});

ScrollReveal().reveal(".section-frame .frame5", {
  delay: 600,
  origin: "bottom",
  reset: true,
});

//End ScrollReveal

// Menu
$(".open-overlay").click(function () {
  var overlay_navigation = $(".overlay-navigation"),
    nav_item_1 = $("nav li:nth-of-type(1)"),
    nav_item_2 = $("nav li:nth-of-type(2)"),
    nav_item_3 = $("nav li:nth-of-type(3)"),
    nav_item_4 = $("nav li:nth-of-type(4)"),
    nav_item_5 = $("nav li:nth-of-type(5)"),
    top_bar = $(".bar-top"),
    middle_bar = $(".bar-middle"),
    bottom_bar = $(".bar-bottom");

  overlay_navigation.toggleClass("overlay-active");
  if (overlay_navigation.hasClass("overlay-active")) {
    top_bar.removeClass("animate-out-top-bar").addClass("animate-top-bar");
    middle_bar
      .removeClass("animate-out-middle-bar")
      .addClass("animate-middle-bar");
    bottom_bar
      .removeClass("animate-out-bottom-bar")
      .addClass("animate-bottom-bar");
    overlay_navigation
      .removeClass("overlay-slide-up")
      .addClass("overlay-slide-down");
    nav_item_1
      .removeClass("slide-in-nav-item-reverse")
      .addClass("slide-in-nav-item");
    nav_item_2
      .removeClass("slide-in-nav-item-delay-1-reverse")
      .addClass("slide-in-nav-item-delay-1");
    nav_item_3
      .removeClass("slide-in-nav-item-delay-2-reverse")
      .addClass("slide-in-nav-item-delay-2");
    nav_item_4
      .removeClass("slide-in-nav-item-delay-3-reverse")
      .addClass("slide-in-nav-item-delay-3");
    nav_item_5
      .removeClass("slide-in-nav-item-delay-4-reverse")
      .addClass("slide-in-nav-item-delay-4");
  } else {
    top_bar.removeClass("animate-top-bar").addClass("animate-out-top-bar");
    middle_bar
      .removeClass("animate-middle-bar")
      .addClass("animate-out-middle-bar");
    bottom_bar
      .removeClass("animate-bottom-bar")
      .addClass("animate-out-bottom-bar");
    overlay_navigation
      .removeClass("overlay-slide-down")
      .addClass("overlay-slide-up");
    nav_item_1
      .removeClass("slide-in-nav-item")
      .addClass("slide-in-nav-item-reverse");
    nav_item_2
      .removeClass("slide-in-nav-item-delay-1")
      .addClass("slide-in-nav-item-delay-1-reverse");
    nav_item_3
      .removeClass("slide-in-nav-item-delay-2")
      .addClass("slide-in-nav-item-delay-2-reverse");
    nav_item_4
      .removeClass("slide-in-nav-item-delay-3")
      .addClass("slide-in-nav-item-delay-3-reverse");
    nav_item_5
      .removeClass("slide-in-nav-item-delay-4")
      .addClass("slide-in-nav-item-delay-4-reverse");
  }
});

const link = document.querySelectorAll(".nav-link");
const overlay_navigation = document.querySelector(".overlay-navigation");
link.forEach((element) => {
  element.addEventListener("click", () => {
    overlay_navigation.classList.remove("overlay-active");
  });
});

$(".nav-link").click(function () {
  var overlay_navigation = $(".overlay-navigation"),
    nav_item_1 = $("nav li:nth-of-type(1)"),
    nav_item_2 = $("nav li:nth-of-type(2)"),
    nav_item_3 = $("nav li:nth-of-type(3)"),
    nav_item_4 = $("nav li:nth-of-type(4)"),
    nav_item_5 = $("nav li:nth-of-type(5)"),
    top_bar = $(".bar-top"),
    middle_bar = $(".bar-middle"),
    bottom_bar = $(".bar-bottom");

  overlay_navigation.toggleClass("overlay-active");

  top_bar.removeClass("animate-top-bar").addClass("animate-out-top-bar");
  middle_bar
    .removeClass("animate-middle-bar")
    .addClass("animate-out-middle-bar");
  bottom_bar
    .removeClass("animate-bottom-bar")
    .addClass("animate-out-bottom-bar");
  overlay_navigation
    .removeClass("overlay-slide-down")
    .addClass("overlay-slide-up");
  nav_item_1
    .removeClass("slide-in-nav-item")
    .addClass("slide-in-nav-item-reverse");
  nav_item_2
    .removeClass("slide-in-nav-item-delay-1")
    .addClass("slide-in-nav-item-delay-1-reverse");
  nav_item_3
    .removeClass("slide-in-nav-item-delay-2")
    .addClass("slide-in-nav-item-delay-2-reverse");
  nav_item_4
    .removeClass("slide-in-nav-item-delay-3")
    .addClass("slide-in-nav-item-delay-3-reverse");
  nav_item_5
    .removeClass("slide-in-nav-item-delay-4")
    .addClass("slide-in-nav-item-delay-4-reverse");
});

// Active Link Work
const linkWork = document.querySelectorAll(".work_item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active_work"));
  this.classList.add("active_work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

// Popup PORTFOLIO
function toggleProjectPopup() {
  document.querySelector(".project_popup").classList.toggle("open");
}

function projectItemDetails(projectItem) {
  document.querySelector(".pp_thumbnail img").src =
    projectItem.querySelector(".work_img").src;

  document.querySelector(".project_popup-subtitle span").innerHTML =
    projectItem.querySelector(".work_title").innerHTML;

  document.querySelector(".project_popup-body").innerHTML =
    projectItem.querySelector(".project_item-details").innerHTML;
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work_button")) {
    toggleProjectPopup();
    projectItemDetails(e.target.parentElement);
  }
});

document
  .querySelector(".project_popup-close")
  .addEventListener("click", toggleProjectPopup);

// Popup Contact
function toggleContactPopup() {
  document.querySelector(".contact_popup").classList.toggle("open");
}

document
  .querySelector(".btn-contact_open")
  .addEventListener("click", toggleContactPopup);

document
  .querySelector(".contact_popup-close")
  .addEventListener("click", toggleContactPopup);

// Swiper PORTFOLIO
let swiper = new Swiper(".work_container", {
  spaceBetween: 24,
  // loop: true,
  gradCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

// Swiper Terms of Use
let swiperTOU = new Swiper(".services_container", {
  spaceBetween: 24,
  // loop: true,
  gradCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const modalViews = document.querySelectorAll(".services_modal");
modalBtns = document.querySelectorAll(".services_button");
modalClose = document.querySelectorAll(".services_modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("avtive-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("avtive-modal");
    });
  });
});

// Srcoll To Top
// Get the button
let toTop = document.querySelector(".to_top");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

window.onscroll = function () {
  scrollFunction();
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

toTop.addEventListener("click", topFunction);

// Watch Intro
let video = document.querySelector("video");
const btnWatchIntro = document.querySelector(".btn_intro_video");
const videoIntro = document.querySelector(".video_intro");
const closeIntro = document.querySelector(".close_video_intro");

btnWatchIntro.addEventListener("click", () => {
  videoIntro.classList.toggle("active_video_intro");
  video.play();
  video.currentTime = 0;
});
closeIntro.addEventListener("click", () => {
  videoIntro.classList.toggle("active_video_intro");
  video.pause();
  video.currentTime = 0;
});
