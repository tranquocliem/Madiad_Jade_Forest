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

ScrollReveal().reveal(".section-title", {
  delay: 300,
  origin: "left",
  reset: true,
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
