export let currentSlidePosition = 0;
export const sliderWrapper = document.querySelector(".carousel__wrapper");
export const slides = sliderWrapper.querySelectorAll(".carousel__item");

export const slidesNav = document.querySelectorAll(".dot");
export function nextBtnFn() {
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
export function prevBtnFn() {
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

export function hideSlides(slides, nav) {
    // DATA-M-SELECTED TO FALSE ON EACH SLIDE
    slides.forEach((slide) => {
        slide.dataset.mSelected = "false";
    });
    //DATA-M-SELECTED TO FALSE ON EACH DOT
    nav.forEach((slideNav) => {
        slideNav.dataset.selected = "false";
    })
}
export function showSlide(slides, navs) {
    const currentSlide = slides[currentSlidePosition];
    currentSlide.dataset.mSelected = "true";
    navs.forEach(nav => {
        if (currentSlide.dataset.cite === nav.dataset.ref) {
            nav.dataset.selected = "true";
        }
    })
}



export function getNavPosition(slides, nav) {
    slides.forEach(slide => {
        if (nav.dataset.ref == slide.dataset.cite) {
            currentSlidePosition = +slide.dataset.index;
        }
    })
}