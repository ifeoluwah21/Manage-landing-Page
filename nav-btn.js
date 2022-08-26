const nav = document.querySelector(".header__nav");

export const openNavBtn = document.querySelector(".header__menu-btn");
export const closeNavBtn = document.querySelector(".header__close-btn");
export function open() {
    nav.dataset.visible = "true";
    openNavBtn.style.display = "none"
}
export function close() {
    nav.dataset.visible = "";
    openNavBtn.style.display = "block"
}
