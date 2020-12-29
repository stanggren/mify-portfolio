/**
 * Starts image slider and switch image every 4000 ms (by calling function changeActiveImage)
 */
function startSlideShowAnimation(){
    setInterval(setActiveImage, 4000)
    setActiveImage();
}

/**
 * Changes active image from slide show container.
 */
function setActiveImage() {
    const images = document.querySelectorAll('.slideshow-container > img');
    for (let i = 0; i < images.length; i++){
        if (images[i].classList.contains('show')) {
            images[i].classList.remove('show');

            let nextIndex = (i + 1) % images.length;

            images[nextIndex].classList.add('show');

            break;
        }
    }
}
