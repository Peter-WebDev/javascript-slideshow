window.addEventListener("DOMContentLoaded", main);

//** Variable to check visibility of image */
let visibleIndex = 0;

//** Set up initial function */
function main() {
    setInterval(changeVisibleImageInSlidwShow, 5000);
}

//** Change Visible Image In Slideshow */
function changeVisibleImageInSlidwShow() {
    const images = document.querySelector(".slideshow-container").children; //Look at the children
    images[visibleIndex].classList.remove("visible");
    visibleIndex += 1;
    if(visibleIndex >= images.length) {
        visibleIndex = 0;
    }
    images[visibleIndex].classList.add("visible");
}