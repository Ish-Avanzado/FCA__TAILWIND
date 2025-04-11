const burger = document.querySelector(".burger__menu");
const hNav = document.querySelector(".header__action");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  hNav.classList.toggle("open");
});

//slider

const circleNav = document.querySelectorAll(".slider__nav");
const circleContent = document.querySelectorAll(".slider__testimony");
const circleDilaw = document.querySelectorAll(".slider__nav-circle");
circleNav.forEach((circle) => {
  circle.addEventListener("click", () => {
    removeActiveCircle();
    circle.classList.add("active");
    const activeContent = document.querySelector(`#${circle.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
    const activeDilaw = document.querySelector(`#${circle.id}-dilaw`);
    removeActiveDilaw();
    activeDilaw.classList.add("active");
  });
});

function removeActiveCircle() {
  circleNav.forEach((circle) => {
    circle.classList.remove("active");
  });
}

function removeActiveContent() {
  circleContent.forEach((content) => {
    content.classList.remove("active");
  });
}
function removeActiveDilaw() {
  circleDilaw.forEach((dilaw) => {
    dilaw.classList.remove("active");
  });
}
