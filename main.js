window.addEventListener("DOMContentLoaded", main);

//** Variable to check visibility of image */
let visibleIndex = 0;

//** Set up initial function */
function main() {
    setInterval(changeVisibleImageInSlideShow, 5000);
    menuButton.onclick = toggleMenuOpened;
}

//** Change Visible Image In Slideshow */
function changeVisibleImageInSlideShow() {
    const images = document.querySelector(".slideshow-container").children; //Look at the children
    images[visibleIndex].classList.remove("visible");
    visibleIndex += 1;
    if(visibleIndex >= images.length) {
        visibleIndex = 0;
    }
    images[visibleIndex].classList.add("visible");
}

//** Check if menu is opened */
function toggleMenuOpened() {
    const header = document.getElementById("menuHeader");
    const nav = document.querySelector(".nav__primary");
    header.classList.toggle("opened");
    nav.classList.toggle("menuvisible");
 }