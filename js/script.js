var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapImage = mapPopup.querySelector("img");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
})

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
        if (evt.keyCode === 27) {
            mapPopup.classList.remove("modal-show")
        }
    }
})