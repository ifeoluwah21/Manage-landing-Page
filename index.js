const sliderWrapper = document.querySelector(".carousel__wrapper");
const slides = sliderWrapper.querySelectorAll(".carousel__item");
const nextBtn = sliderWrapper.querySelector(".carousel__btn[data-btn-right]")
const prevBtn = sliderWrapper.querySelector(".carousel__btn[data-btn-left]")
const slidesNav = document.querySelectorAll(".dot")
let currentSlidePosition = 0;

nextBtn.addEventListener("click", function (event) {
    nextBtnFn();
});
prevBtn.addEventListener("click", function (event) {
    prevBtnFn();
});
slidesNav.forEach(nav => {
    nav.addEventListener("click", function (e) {
        hideSlides(slides, slidesNav);
        getNavPosition(slides, nav);
        showSlide(slides, slidesNav);

    })
})

function nextBtnFn() {
    //INCREMENT THE CURRENT SLIDE POSITION AND START FROM 0.WHEN IT REACHES END, STARTS THE PROCESS AGAIN
    // if (currentSlidePosition === slides.length - 1) {
    //     currentSlidePosition = 0;
    // } else {
    //     currentSlidePosition++;
    // }

    currentSlidePosition = currentSlidePosition === (slides.length - 1) ? 0 : ++currentSlidePosition;

    hideSlides(slides, slidesNav);
    showSlide(slides, slidesNav);
    return currentSlidePosition;
}
function prevBtnFn() {
    //dECREMENT THE CURRENT SLIDE POSITION AND START FROM 0. WHEN IT REACHES END, STARTS THE PROCESS AGAIN
    // if (currentSlidePosition === slides.length - 1) {
    //     currentSlidePosition = 0;
    // } else {
    //     currentSlidePosition++;
    // }

    currentSlidePosition = currentSlidePosition === 0 ? slides.length - 1 : --currentSlidePosition;
    hideSlides(slides, slidesNav);
    showSlide(slides, slidesNav);
    return currentSlidePosition;
}

function hideSlides(slides, nav) {
    // DATA-M-SELECTED TO FALSE ON EACH SLIDE
    slides.forEach((slide) => {
        slide.dataset.mSelected = "false";
    });
    //DATA-M-SELECTED TO FALSE ON EACH DOT
    nav.forEach((slideNav) => {
        slideNav.dataset.selected = "false";
    })
}
function showSlide(slides, navs) {
    const currentSlide = slides[currentSlidePosition];
    currentSlide.dataset.mSelected = "true";
    navs.forEach(nav => {
        if (currentSlide.dataset.cite === nav.dataset.ref) {
            nav.dataset.selected = "true";
        }
    })
}



function getNavPosition(slides, nav) {
    slides.forEach(slide => {
        if (nav.dataset.ref == slide.dataset.cite) {
            currentSlidePosition = +slide.dataset.index;
        }
    })
}