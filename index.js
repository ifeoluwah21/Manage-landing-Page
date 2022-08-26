import { nextBtnFn, prevBtnFn, hideSlides, showSlide, getNavPosition, currentSlidePosition, sliderWrapper, slides, slidesNav } from "./carousel-btn.js";
import { open, close, openNavBtn, closeNavBtn } from "./nav-btn.js";
import { formValidation, form, input } from "./form.js";

const nextBtn = sliderWrapper.querySelector(".carousel__btn[data-btn-right]");
const prevBtn = sliderWrapper.querySelector(".carousel__btn[data-btn-left]");



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



openNavBtn.addEventListener("click", function (e) {
    open()
})
closeNavBtn.addEventListener("click", function (e) {
    close()
})



form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
})

input.addEventListener("blur", function (e) {
    formValidation()
})

