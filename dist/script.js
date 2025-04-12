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

// FAQs

const faqs = document.querySelectorAll(".faqNav__info h4");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.querySelector("i").classList.toggle("open");
    faq.nextElementSibling.classList.toggle("open");
  });
});

// FAQs NAV
const faqNav = document.querySelectorAll(".faq__nav");
const faqDetail = document.querySelectorAll(".faqNav__details");
faqNav.forEach((faqN) => {
  faqN.addEventListener("click", () => {
    removeActiveFaqN();
    faqN.classList.add("active");
    const activeDetail = document.querySelector(`#${faqN.id}-detail`);
    removeActiveDetail();
    activeDetail.classList.add("active");
  });
});

function removeActiveFaqN() {
  faqNav.forEach((faqN) => {
    faqN.classList.remove("active");
  });
}

function removeActiveDetail() {
  faqDetail.forEach((detail) => {
    detail.classList.remove("active");
  });
}

// 2nd option correct js
// const faqNav = document.querySelectorAll(".faq__nav");
// const faqDetail = document.querySelectorAll(".faqNav__details");

// faqNav.forEach((faqN) => {
//   faqN.addEventListener("click", () => {
//     removeActiveFaqN();
//     faqN.classList.add("active");

//     const activeDetail = document.querySelector(`#${faqN.id}-detail`);
//     removeActiveDetail();

//     if (activeDetail) {
//       activeDetail.classList.add("active");
//     }
//   });
// });

// function removeActiveFaqN() {
//   faqNav.forEach((faqN) => {
//     faqN.classList.remove("active");
//   });
// }

// function removeActiveDetail() {
//   faqDetail.forEach((detail) => {
//     detail.classList.remove("active");
//   });
// }


// const faqNav = document.querySelectorAll(".faq__nav");
// const faqDetail = document.querySelectorAll(".faqNav__details");

// faqNav.forEach((faqN) => {
//   faqN.addEventListener("click", () => {
//     removeActiveFaqN();
//     faqN.classList.add("active");
//     const activeDetail = document.querySelector(`#${faqN.id}-detail`);
//     removeActiveDetail();
//     activeDetail.classList.add("active");
//   });
// });

// function removeActiveFaqN() {
//   faqNav.forEach((faqN) => {
//     faqN.classList.remove("active");
//   });
// }

// function removeActiveDetail() {
//   faqDetail.forEach((detail) => {
//     detail.classList.remove("active");
//   });
// }



