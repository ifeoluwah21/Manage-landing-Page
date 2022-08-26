export const form = document.querySelector('.form');
export const input = form.querySelector(".form__input");
export const errorMsg = form.querySelector(".form__error-msg");

export function formValidation() {
    if (!input.value.includes("@") || input.value.length < 5 || input.value === ``) {
        input.classList.add("error");
        errorMsg.classList.add("show");
    } else {
        input.classList.remove("error");
        errorMsg.classList.remove("show");
    }
}