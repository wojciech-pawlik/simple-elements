var sizeRange = document.getElementById('sizeRange');
var sizeText = document.getElementById('sizeText');

function sizeRangeChange() {
    sizeText.value = sizeRange.value;
}

function sizeTextChange() {
    sizeRange.value = sizeText.value;
}

var partsRange = document.getElementById('partsRange');
var partsText = document.getElementById('partsText');

function partsRangeChange() {
    partsText.value = partsRange.value;
}

function partsTextChange() {
    partsRange.value = partsText.value;
}

var color = document.getElementById('color');