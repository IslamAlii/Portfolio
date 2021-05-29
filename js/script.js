// Identifing the main variables
const navbar = document.querySelector("nav"),
  btnNavbar = document.querySelector("nav .btn-navbar"),
  navMenu = document.querySelector("nav ul"),
  logo = document.querySelector(".logo"),
  btnContact = document.querySelectorAll(".btn-contact");

// Changing navbar style on scrolling
window.onscroll = () => {
  if (window.scrollY > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// showing and hidding the menu
btnNavbar.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  btnNavbar.classList.toggle("active");
});

// Scrolling to the home on pressing in Logo
logo.addEventListener("click", () => {
  document
    .querySelector("." + logo.getAttribute("data-link"))
    .scrollIntoView({ behavior: "smooth", block: "start" });
});

// Scrolling to contact while pressing in contact button
btnContact.forEach((v) => {
  v.addEventListener("click", () => {
    document
      .querySelector("." + v.getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Smooth scroll setings
document.querySelectorAll("nav ul li").forEach((v) => {
  v.addEventListener("click", () => {
    const el = document.querySelector("." + v.getAttribute("data-link"));
    if (navMenu.classList.contains("active")) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      navMenu.classList.remove("active");
      btnNavbar.classList.toggle("active");
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
