const navbar = document.querySelector(".navbar");
const homebg = document.querySelector(".h_back");
const menu = document.querySelector(".navbar__menu");
const links = document.querySelector(".navbar__links");
const sections = document.querySelectorAll("section");
const config = {
  rootMargin: "0px",
  threshold: [0.6, 0.9],
};

function handleLlinks() {
  if (window.innerWidth <= 991) {
    links.classList.toggle("visible");
  }
}

menu.addEventListener("click", handleLlinks);
links.addEventListener("click", handleLlinks);

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
});

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    }
  });
}, config);

sections.forEach((section) => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector(".navbar__links  .active");
  const shouldBeActive = document.querySelector(
    ".navbar__links [data-ref=" + id + "]"
  );

  if (currentlyActive) {
    currentlyActive.classList.remove("active");
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add("active");
  }
}



ScrollReveal().reveal(".navbar", { delay: 250 });
ScrollReveal().reveal(".h_profile", { delay: 350 });
ScrollReveal().reveal(".h_title--primary", { delay: 350 });
ScrollReveal().reveal(".h_title", { delay: 450 });
ScrollReveal().reveal(".h_tittle--secondary", { delay: 550 });
ScrollReveal().reveal(".section_tittle", { delay: 250 });
ScrollReveal().reveal(".section_sub_title", { delay: 350 });
ScrollReveal().reveal(".ab_description", { delay: 350 });
ScrollReveal().reveal(".ab_summary", { delay: 450 });
ScrollReveal().reveal(".button--cta", { delay: 550 });
ScrollReveal().reveal(".sk_title", { delay: 450 });
ScrollReveal().reveal(".sk_item", { delay: 450 });
ScrollReveal().reveal(".services__item", { delay: 450 });
ScrollReveal().reveal(".portfolio_item", { delay: 450 });
ScrollReveal().reveal(".contact__item", { delay: 450 });
ScrollReveal().reveal(".footer", { delay: 450 });