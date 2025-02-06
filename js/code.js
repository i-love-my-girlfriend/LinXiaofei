
window.onload=init;

function init()
{
    console.log("window has loaded");
    document.getElementById('popup').style.display = 'flex';
  
    document.getElementById('close-popup').addEventListener('click', function () {
      document.getElementById('popup').style.display = 'none';
    }); 
}

function hair() {
    hideAllOptions();
    document.getElementById("hair-options").style.display = "block";
}

function outfit() {
    hideAllOptions();
    document.getElementById("outfit-options").style.display = "block";
}

function shoes() {
    hideAllOptions();
    document.getElementById("shoes-options").style.display = "block";
}

function hideAllOptions() {
    // Hide all category option divs
    document.getElementById("hair-options").style.display = "none";
    document.getElementById("outfit-options").style.display = "none";
    document.getElementById("shoes-options").style.display = "none";
}

function closeMenu(category) {
    document.getElementById(category).style.display = "none";
}

function selectHairOption(hairType) {
    var hairback = document.getElementById('hairback');
    hairback.setAttribute("class", "hairback");
    var hair = document.getElementById('hair');
    hair.setAttribute("class", hairType);
}

function selectOutfitOption(dressType) {
    var dress = document.getElementById('clothes');
    dress.setAttribute("class", dressType);
}

function selectShoesOption(shoesType) {
    var shoe = document.getElementById('shoes');
    shoe.setAttribute("class", shoesType);
}

