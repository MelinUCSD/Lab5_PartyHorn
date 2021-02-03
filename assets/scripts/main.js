// main.js

/* Volume controls */
const volumeRanges = {
    level3_max: 100,
    level3_min: 67,
    level2_max: 66,
    level2_min: 34,
    level1_max: 33,
    level1_min: 0
};
var currVolume;

function updateVolume(e) {
    currVolume = e.target.value;
    textField.value = currVolume;
    slider.value = currVolume;
    if (currVolume >= volumeRanges['level3_min']) {
        icon.src = "./assets/media/icons/volume-level-3.svg";
        icon.alt = "Max Volume";
    } else if (currVolume >= volumeRanges['level2_min']) {
        icon.src = "./assets/media/icons/volume-level-2.svg";
        icon.alt = "Medium Volume";
    } else if (currVolume >= volumeRanges['level1_min']) {
        icon.src = "./assets/media/icons/volume-level-1.svg";
        icon.alt = "Low Volume";
    } else {
        icon.src = "./assets/media/icons/volume-level-0.svg";
        icon.alt = "No Volume";
    }
    horn.volume = currVolume/100;
}

// A: Text field - Slider - Icon
var textField = document.getElementById("volume-number");
var slider = document.getElementById("volume-slider");
var icon = document.getElementById("volume-image");

// Event Handlers for A
textField.addEventListener("input", updateVolume);
slider.addEventListener("input", updateVolume);

/* Audio controls */
// B: Audio selector
var horn = document.getElementById("horn-sound");
var airHorn = document.getElementById("radio-air-horn");
var carHorn = document.getElementById("radio-car-horn");
var partyHorn = document.getElementById("radio-party-horn");

// onclick functions for B
airHorn.onclick = function() {horn.src = "./assets/media/audio/air-horn.mp3"};
carHorn.onclick = function() {horn.src = "./assets/media/audio/car-horn.mp3"};
partyHorn.onclick = function() {horn.src = "./assets/media/audio/party-horn.mp3"};

/* Play the horn */
var honk = document.getElementById("honk-btn");
honk.onclick = function () {horn.play();}