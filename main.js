//START AMBIL AVATAR DAN USERNAME
let input = "";
let hewan = "";

function ambilNama() {
  input = document.getElementById("inputName").value;
  console.log(input);
  localStorage.setItem("myVariable", input);
  let activeCarouselItem = document.querySelector(".carousel-item.active");
  hewan = activeCarouselItem.querySelector("img").getAttribute("alt");
  localStorage.setItem("ambilHewan", hewan);
  console.log(hewan);
}

const myVariable = localStorage.getItem("myVariable");
const ambilHewan = localStorage.getItem("ambilHewan");
console.log(ambilHewan);

var kandangHewan;
kandangHewan = document.getElementById("tempatHewan");
if (ambilHewan == "anjing") {
  const input = document.createElement(`img`);
  input.className = "mx-auto";
  input.src = "filependukungUTS/anjinglevel1.png";
  input.style = "width: 15%; height: 15%";
  kandangHewan.appendChild(input);
} else if (ambilHewan == "kodok") {
  const input = document.createElement(`img`);
  input.className = "mx-auto";
  input.src = "filependukungUTS/kodoklevel1.png";
  input.style = "width: 15%; height: 15%";
  kandangHewan.appendChild(input);
} else if (ambilHewan == "marmut") {
  const input = document.createElement(`img`);
  input.className = "mx-auto";
  input.src = "filependukungUTS/marmutlevel1.png";
  input.style = "width: 15%; height: 15%";
  kandangHewan.appendChild(input);
}
//END AMBIL AVATAR DAN USERNAME

//START JAM
let seconds = 0;

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const timeString = `${hours}:${minutes}`;
console.log(timeString);

var waktu;

waktu = hours * 60;
seconds = waktu + minutes;
console.log(seconds);

setInterval(() => {
  const gameSeconds = seconds * 60;
  const days = Math.floor(gameSeconds / 86400);
  const hours = Math.floor((gameSeconds % 86400) / 3600);
  const minutes = Math.floor((gameSeconds % 3600) / 60);
  const timeString = `${days.toString().padStart(2, "0")}:${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  document.getElementById("time").textContent = timeString;

  let greeting = "";
  if (hours >= 0 && hours < 12) {
    greeting = "Good Morning " + myVariable + "! ";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon " + myVariable + "! ";
  } else {
    greeting = "Good Night " + myVariable + "! ";
  }
  document.getElementById("greeting").textContent = greeting;
  seconds++;
}, 1000);
//END JAM

//START PENGURANGAN PROGRESS
var element1 = document.querySelector("#bar1");
var widthSize1 = parseFloat(element1.style.width);
var element2 = document.querySelector("#bar2");
var widthSize2 = parseFloat(element2.style.width);
var element3 = document.querySelector("#bar3");
var widthSize3 = parseFloat(element3.style.width);
var element4 = document.querySelector("#bar4");
var widthSize4 = parseFloat(element4.style.width);

const intervalIdMakan = setInterval(() => {
  //Makan
  widthSize1 -= 20;
  if (widthSize1 < 0) {
    widthSize1 = 0;
  }
  element1.style.width = widthSize1.toFixed(2) + "%";
}, 25000);

const intervalIdTidur = setInterval(() => {
  //Tidur
  widthSize2 -= 20;
  if (widthSize2 < 0) {
    widthSize2 = 0;
  }
  element2.style.width = widthSize2.toFixed(2) + "%";
}, 60000);

const intervalIdHealth = setInterval(() => {
  //Health
  if (widthSize1 < 30 || widthSize2 < 50) {
    widthSize3 -= 20;
    if (widthSize3 < 0) {
      widthSize3 = 0;
    }
  }
  element3.style.width = widthSize3.toFixed(2) + "%";
}, 20000);

const intervalIdMain = setInterval(() => {
  //Main
  widthSize4 -= 20;
  if (widthSize4 < 0) {
    widthSize4 = 0;
  }
  element4.style.width = widthSize4.toFixed(2) + "%";
}, 20000);
//END PENGURANGAN PROGRESS

//START FUNCTION MAKAN
function nambahMakan() {
  if (widthSize4 == 0) {
    widthSize1 += 50;
  } else {
    widthSize1 += 100;
    if (widthSize1 >= 100) {
      widthSize1 = 100;
    }
  }
  element1.style.width = widthSize1.toFixed(2) + "%";
  console.log(widthSize1);
}

function disableMakan() {
  // Disable the button
  document.getElementById("buttonMakan").disabled = true;
  document.getElementById("buttonTidur").disabled = true;
  document.getElementById("buttonHealth").disabled = true;
  document.getElementById("buttonMain").disabled = true;

  // Wait for 15 seconds
  setTimeout(function () {
    // Enable the button
    document.getElementById("buttonMakan").disabled = false;
    document.getElementById("buttonTidur").disabled = false;
    document.getElementById("buttonHealth").disabled = false;
    document.getElementById("buttonMain").disabled = false;
  }, 15000);
}

//END FUNCTION MAKAN

//START FUNCTION TIDUR
function nambahTidur() {
  if (widthSize1 < 40) {
    widthSize2 += 60;
  }
  widthSize2 += 100;
  if (widthSize2 >= 100) {
    widthSize2 = 100;
  }
  element2.style.width = widthSize2.toFixed(2) + "%";
  console.log(widthSize2);
}

function disableTidur() {
  // Disable the button
  document.getElementById("buttonMakan").disabled = true;
  document.getElementById("buttonTidur").disabled = true;
  document.getElementById("buttonHealth").disabled = true;
  document.getElementById("buttonMain").disabled = true;

  // Wait for 15 seconds
  setTimeout(function () {
    // Enable the button
    document.getElementById("buttonMakan").disabled = false;
    document.getElementById("buttonTidur").disabled = false;
    document.getElementById("buttonHealth").disabled = false;
    document.getElementById("buttonMain").disabled = false;
  }, 60000);
}
//END FUNCTION TIDUR

//START FUNCTION HEALTH
function nambahHealth() {
  widthSize3 += 100;
  if (widthSize3 >= 100) {
    widthSize3 = 100;
  }
  element3.style.width = widthSize3.toFixed(3) + "%";
  console.log(widthSize3);
}
function disableHealth() {
  // Disable the button
  document.getElementById("buttonHealth").disabled = true;

  // Wait for 15 seconds
  setTimeout(function () {
    // Enable the button
    document.getElementById("buttonHealth").disabled = false;
  }, 60000);
}
//END FUNCTION HEALTH

// START FUNCTION MAIN
function nambahMain() {
  if (widthSize1 < 50 || widthSize2 < 40) {
    widthSize4 += 50;
  }
  widthSize4 += 100;
  if (widthSize4 >= 100) {
    widthSize4 = 100;
  }
  element4.style.width = widthSize4.toFixed(4) + "%";
  console.log(widthSize4);
}

function disableMain() {
  // Disable the button
  document.getElementById("buttonMain").disabled = true;

  // Wait for 15 seconds
  setTimeout(function () {
    // Enable the button
    document.getElementById("buttonMain").disabled = false;
  }, 30000);
}
// END FUNCTION MAIN

//START NAIK LEVEL
//a = "<div class="col" style="font-weight: bold">Level 1</div>";
//document.getElementById("level").innerHTML = a;
//END NAIK LEVEL
