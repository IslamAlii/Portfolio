// Identifing the main variables
const navbar = document.querySelector("nav"),
  btnNavbar = document.querySelector("nav .btn-navbar"),
  navMenu = document.querySelector("nav ul"),
  logo = document.querySelector(".logo"),
  btnContact = document.querySelectorAll(".btn-contact"),
  links = document.querySelectorAll("nav ul li"),
  main = document.querySelector("main"),
  sections = document.querySelectorAll("section");

// pushing the main and sections in one array
let mainAndSections = new Array();
mainAndSections.push(main);
sections.forEach((v) => {
  mainAndSections.push(v);
});

// functions starts while window scroll
window.onscroll = () => {
  // Changing navbar style on scrolling
  if (window.pageYOffset < 50) {
    navbar.classList.remove("sticky");
    navbar.style.top = "-100%";
  } else {
    navbar.classList.add("sticky");
  }

  setTimeout(function () {
    navbar.style.top = "0";
  }, 500);
  // Adding active section to the links while scrolling
  mainAndSections.forEach((v, i) => {
    const sectionHeight = v.offsetHeight,
      sectionTop = v.offsetTop;

    if (scrollY > sectionTop - 5 && scrollY <= sectionTop - 5 + sectionHeight) {
      addActiveClass(i);
    }
  });
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
  addActiveClass(0);
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

// Adding active class to the pressed link
links.forEach((v, i) => {
  v.addEventListener("click", () => {
    addActiveClass(i);
  });
});

// Adding active class function
function addActiveClass(index) {
  for (let j = 0; j < links.length; j++) {
    if (j != index) {
      links[j].firstChild.classList.remove("active");
    } else {
      links[j].firstChild.classList.add("active");
    }
  }
}

// Starting typed function
let typed = new Typed(".typed", {
  strings: ["Developer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

let typed2 = new Typed(".typed2", {
  strings: ["Developer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
