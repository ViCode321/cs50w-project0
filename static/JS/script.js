document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".rotating-image");
    let index = 0;

    function rotateImages() {
        images[index].style.opacity = 0;
        index = (index + 1) % images.length;
        images[index].style.opacity = 1;
    }

    setInterval(rotateImages, 5000); // Cambia a la siguiente imagen cada 5 segundos
});
