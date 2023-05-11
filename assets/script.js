const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const bannerImg = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector("#banner p");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
let currentSlideIndex = 0;

// CREER LES DOTS
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dots.appendChild(dot);
  // CLICK SUR LES DOTS
  dot.addEventListener("click", function () {
    currentSlideIndex = index;
    updateBanner();
  });
});

// SELECTIONNER LES DOTS
const selectAllDots = document.querySelectorAll(".dot");

// DEFINIR LE DOT ACTIF
const activeDot = () =>
  selectAllDots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });

activeDot();

// FLECHE GAUCHE
leftArrow.addEventListener("click", function () {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  updateBanner();
});

// FLECHE DROITE
rightArrow.addEventListener("click", function () {
  currentSlideIndex++;
  if (currentSlideIndex > slides.length - 1) {
    currentSlideIndex = 0;
  }
  updateBanner();
});

// METTRE A JOUR LE CARROUSEL
function updateBanner() {
  bannerImg.src = `assets/images/slideshow/${slides[currentSlideIndex].image}`;
  bannerTagLine.innerHTML = slides[currentSlideIndex].tagLine;
  activeDot();
}
