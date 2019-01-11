var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapImage = mapPopup.querySelector("img");
var mapClose = mapPopup.querySelector(".modal-close");
var sendLink = document.querySelector(".button-write");
var sendPopup = document.querySelector(".modal-send");
var sendClose = sendPopup.querySelector(".modal-close");
var sendForm = sendPopup.querySelector("form");
var userName = sendPopup.querySelector("[name=user-name]");
var userEmail = sendPopup.querySelector("[name=user-email]");
var userMessage = sendPopup.querySelector("[name=message]");
var itemLink = document.querySelector(".buy");
var itemPopup = document.querySelector(".modal-item");
var itemClose = itemPopup.querySelector(".modal-close");
var itemNext = itemPopup.querySelector(".button-continue");

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

sendLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    sendPopup.classList.add("modal-show");
    userName.focus();
})

sendClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    sendPopup.classList.remove("modal-show");
})

sendForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!userName.value || !userEmail.value || !userMessage.value) {
        evt.preventDefault();
    }
})

window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (sendPopup.classList.contains("modal-show")) {
        if (evt.keyCode === 27) {
            sendPopup.classList.remove("modal-show")
        }
    }
})

itemLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    itemPopup.classList.add("modal-show");
})

itemClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    itemPopup.classList.remove("modal-show");
})

itemNext.addEventListener("click", function (evt) {
    evt.preventDefault();
    itemPopup.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (itemPopup.classList.contains("modal-show")) {
        if (evt.keyCode === 27) {
            itemPopup.classList.remove("modal-show")
        }
    }
})