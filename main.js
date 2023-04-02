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
  input.id = "hewan";
  input.className = "mx-auto";
  input.src = "filependukungUTS/anjinglevel1.png";
  input.style = "width: 15%; height: 15%";
  kandangHewan.appendChild(input);
} else if (ambilHewan == "kodok") {
  const input = document.createElement(`img`);
  input.id = "hewan";
  input.className = "mx-auto";
  input.src = "filependukungUTS/kodoklevel1.png";
  input.style = "width: 15%; height: 15%";
  kandangHewan.appendChild(input);
} else if (ambilHewan == "marmut") {
  const input = document.createElement(`img`);
  input.id = "hewan";
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
var waktuBermain;

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

  if (waktuBermain == null) waktuBermain = 0;
  else waktuBermain += 1000;
  seconds++;

  //START NAIK LEVEL
  if (waktuBermain == 9000000) {
    c = "<strong>Level 3</strong>";
    c.class = "col";
    c.style = "font-weight: bold";
    document.getElementById("level").innerHTML = c;
    alert(
      "Selamat Anda Telah Mencapai Level Maks, Anda Bisa Lanjut Atau Mengulang Dengan Cara Refresh"
    );
    if (ambilHewan == "anjing") {
      const input = document.createElement(`img`);
      input.id = "hewan";
      input.className = "mx-auto";
      input.src = "filependukungUTS/anjinglevel3.png";
      input.style = "width: 15%; height: 15%";
      document
        .getElementById("tempatHewan")
        .removeChild(document.getElementById("hewan"));
      kandangHewan.appendChild(input);
    }
    if (ambilHewan == "kodok") {
      const input = document.createElement(`img`);
      input.id = "hewan";
      input.className = "mx-auto";
      input.src = "filependukungUTS/kodoklevel3.png";
      input.style = "width: 15%; height: 15%";
      document
        .getElementById("tempatHewan")
        .removeChild(document.getElementById("hewan"));
      kandangHewan.appendChild(input);
    }
    if (ambilHewan == "marmut") {
      const input = document.createElement(`img`);
      input.id = "hewan";
      input.className = "mx-auto";
      input.src = "filependukungUTS/marmutlevel3.png";
      input.style = "width: 15%; height: 15%";
      document
        .getElementById("tempatHewan")
        .removeChild(document.getElementById("hewan"));
      kandangHewan.appendChild(input);
    }
  } else if (waktuBermain == 300000) {
    b = "<strong>Level 2</strong>";
    b.class = "col";
    b.style = "font-weight: bold";
    document.getElementById("level").innerHTML = b;
    if (ambilHewan == "anjing") {
      const input = document.createElement(`img`);
      input.id = "hewan";
      input.className = "mx-auto";
      input.src = "filependukungUTS/anjinglevel2.png";
      input.style = "width: 15%; height: 15%";
      document
        .getElementById("tempatHewan")
        .removeChild(document.getElementById("hewan"));
      kandangHewan.appendChild(input);
    }
    if (ambilHewan == "kodok") {
      const input = document.createElement(`img`);
      input.id = "hewan";
      input.className = "mx-auto";
      input.src = "filependukungUTS/kodoklevel2.png";
      input.style = "width: 15%; height: 15%";
      document
        .getElementById("tempatHewan")
        .removeChild(document.getElementById("hewan"));
      kandangHewan.appendChild(input);
    }
    if (ambilHewan == "marmut") {
      const input = document.createElement(`img`);
      input.id = "hewan";
      input.className = "mx-auto";
      input.src = "filependukungUTS/marmutlevel2.png";
      input.style = "width: 15%; height: 15%";
      document
        .getElementById("tempatHewan")
        .removeChild(document.getElementById("hewan"));
      kandangHewan.appendChild(input);
    }
  } else if (waktuBermain == 0) {
    a = "<strong>Level 1</strong>";
    a.class = "col";
    a.style = "font-weight: bold";
    document.getElementById("level").innerHTML = a;
  }
  //END NAIK LEVEL
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

//Makan
const intervalIdMakan = setInterval(() => {
  widthSize1 -= 20;
  if (widthSize1 < 0) {
    widthSize1 = 0;
  }
  element1.style.width = widthSize1.toFixed(2) + "%";
}, 25000);

//Tidur
const intervalIdTidur = setInterval(() => {
  widthSize2 -= 20;
  if (widthSize2 < 0) {
    widthSize2 = 0;
  }
  element2.style.width = widthSize2.toFixed(2) + "%";
}, 60000);

//Health
var life = 1;
const intervalIdHealth = setInterval(() => {
  //START HEWAN MATI
  if (widthSize3 == 0 && life == 1) {
    document.getElementById("buttonMakan").disabled = true;
    document.getElementById("buttonTidur").disabled = true;
    document.getElementById("buttonHealth").disabled = true;
    document.getElementById("buttonMain").disabled = true;

    const hewan = document.getElementById("hewan");
    const hewanSrc = hewan.src;

    hewan.src = "filependukungUTS/iconDeath.png";
    life--;
    alert("Hewan Anda Sudah Mati, Silahkan Refresh");
  }
  //END HEWAN MATI

  if (widthSize1 < 30 || widthSize2 < 30) {
    widthSize3 -= 20;
    if (widthSize3 < 0) {
      widthSize3 = 0;
    }
  }

  element3.style.width = widthSize3.toFixed(2) + "%";
}, 20000);

//Main
const intervalIdMain = setInterval(() => {
  widthSize4 -= 20;
  if (widthSize4 < 0) {
    widthSize4 = 0;
  }
  element4.style.width = widthSize4.toFixed(2) + "%";
}, 30000);
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
  document.getElementById("buttonMakan").disabled = true;
  document.getElementById("buttonTidur").disabled = true;
  document.getElementById("buttonHealth").disabled = true;
  document.getElementById("buttonMain").disabled = true;

  const hewan = document.getElementById("hewan");
  const hewanSrc = hewan.src;

  if (waktuBermain > 9000000) {
    if (ambilHewan == "anjing") {
      hewan.src = "filependukungUTS/anjing3makan.png";
    }
    if (ambilHewan == "kodok") {
      hewan.src = "filependukungUTS/kodok3makan.png";
    }
    if (ambilHewan == "marmut") {
      hewan.src = "filependukungUTS/marmut3makan.png";
    }
  } else if (waktuBermain >= 300000 && waktuBermain < 9000000) {
    if (ambilHewan == "anjing") {
      hewan.src = "filependukungUTS/anjing2makan.png";
    }
    if (ambilHewan == "kodok") {
      hewan.src = "filependukungUTS/kodok2makan.png";
    }
    if (ambilHewan == "marmut") {
      hewan.src = "filependukungUTS/marmut2makan.png";
    }
  } else if (waktuBermain >= 0 && waktuBermain < 300000) {
    if (ambilHewan == "anjing") {
      hewan.src = "filependukungUTS/anjing1makan.png";
    }
    if (ambilHewan == "kodok") {
      hewan.src = "filependukungUTS/kodok1makan.png";
    }
    if (ambilHewan == "marmut") {
      hewan.src = "filependukungUTS/marmut1makan.png";
    }
  }

  setTimeout(function () {
    hewan.src = hewanSrc;
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
  document.getElementById("buttonMakan").disabled = true;
  document.getElementById("buttonTidur").disabled = true;
  document.getElementById("buttonHealth").disabled = true;
  document.getElementById("buttonMain").disabled = true;

  const hewan = document.getElementById("hewan");
  const hewanSrc = hewan.src;

  if (waktuBermain > 9000000) {
    if (ambilHewan == "anjing") {
      hewan.src = "filependukungUTS/anjing3turu.png";
    }
    if (ambilHewan == "kodok") {
      hewan.src = "filependukungUTS/kodok3turu.png";
    }
    if (ambilHewan == "marmut") {
      hewan.src = "filependukungUTS/marmut3turu.png";
    }
  } else if (waktuBermain >= 300000 && waktuBermain < 9000000) {
    if (ambilHewan == "anjing") {
      hewan.src = "filependukungUTS/anjing2turu.png";
    }
    if (ambilHewan == "kodok") {
      hewan.src = "filependukungUTS/kodok2turu.png";
    }
    if (ambilHewan == "marmut") {
      hewan.src = "filependukungUTS/marmut2turu.png";
    }
  } else if (waktuBermain >= 0 && waktuBermain < 300000) {
    if (ambilHewan == "anjing") {
      hewan.src = "filependukungUTS/anjing1turu.png";
    }
    if (ambilHewan == "kodok") {
      hewan.src = "filependukungUTS/kodok1turu.png";
    }
    if (ambilHewan == "marmut") {
      hewan.src = "filependukungUTS/marmut1turu.png";
    }
  }

  setTimeout(function () {
    hewan.src = hewanSrc;
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
  document.getElementById("buttonMakan").disabled = true;
  document.getElementById("buttonTidur").disabled = true;
  document.getElementById("buttonHealth").disabled = true;
  document.getElementById("buttonMain").disabled = true;

  const hewan = document.getElementById("hewan");
  const hewanSrc = hewan.src;

  if (waktuBermain > 9000000) {
    if (ambilHewan == "anjing") {
      hewan.src = "filependukungUTS/anjing3obat.png";
    }
    if (ambilHewan == "kodok") {
      hewan.src = "filependukungUTS/kodok3obat.png";
    }
    if (ambilHewan == "marmut") {
      hewan.src = "filependukungUTS/marmut3obat.png";
    }
  } else if (waktuBermain >= 300000 && waktuBermain < 9000000) {
    if (ambilHewan == "anjing") {
      hewan.src = "filependukungUTS/anjing2obat.png";
    }
    if (ambilHewan == "kodok") {
      hewan.src = "filependukungUTS/kodok2obat.png";
    }
    if (ambilHewan == "marmut") {
      hewan.src = "filependukungUTS/marmut2obat.png";
    }
  } else if (waktuBermain >= 0 && waktuBermain < 300000) {
    if (ambilHewan == "anjing") {
      hewan.src = "filependukungUTS/anjing1obat.png";
    }
    if (ambilHewan == "kodok") {
      hewan.src = "filependukungUTS/kodok1obat.png";
    }
    if (ambilHewan == "marmut") {
      hewan.src = "filependukungUTS/marmut1obat.png";
    }
  }

  setTimeout(function () {
    hewan.src = hewanSrc;
    document.getElementById("buttonMakan").disabled = false;
    document.getElementById("buttonTidur").disabled = false;
    document.getElementById("buttonHealth").disabled = false;
    document.getElementById("buttonMain").disabled = false;
  }, 30000);
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
  document.getElementById("buttonMakan").disabled = true;
  document.getElementById("buttonTidur").disabled = true;
  document.getElementById("buttonHealth").disabled = true;
  document.getElementById("buttonMain").disabled = true;

  // Wait for 15 seconds
  setTimeout(function () {
    document.getElementById("buttonMakan").disabled = false;
    document.getElementById("buttonTidur").disabled = false;
    document.getElementById("buttonHealth").disabled = false;
    document.getElementById("buttonMain").disabled = false;
  }, 30000);
}
// END FUNCTION MAIN

//START MUSIC
const audio = document.getElementById("audioGame");
audio.volume = 0.3;
//END MUSIC

//START SET BACKGROUND
var background = document.getElementById("background");

function setBackground() {
  const gameSeconds = seconds * 60;
  const days = Math.floor(gameSeconds / 86400);
  const hours = Math.floor((gameSeconds % 86400) / 3600);

  if (hours >= 0 && hours < 12) {
    background.className = "morning";
  } else if (hours >= 12 && hours < 18) {
    background.className = "afternoon";
  } else {
    background.className = "night";
  }
  console.log(hours);
}

setBackground();
setInterval(setBackground, 1000);
//END SET BACKGROUND

//START TIKTAKTOE
const playBtn = document.getElementById("buttonMain");
const board = document.getElementById("board");
const squares = document.querySelectorAll(".square");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function handleClick(square, index) {
  if (square.textContent !== "" || checkWinner() || currentPlayer === "O") {
    return;
  }

  square.textContent = currentPlayer;
  gameBoard[index] = currentPlayer;
  if (checkWinner()) {
    alert(`${currentPlayer} wins!`);
    resetBoard();
    return;
  }
  if (gameBoard.every((square) => square !== "")) {
    alert("Tie game!");
    resetBoard();
    return;
  }
  currentPlayer = "O";
  setTimeout(botTurn, 500);
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winningCombinations.some((combination) => {
    return (
      gameBoard[combination[0]] !== "" &&
      gameBoard[combination[0]] === gameBoard[combination[1]] &&
      gameBoard[combination[1]] === gameBoard[combination[2]]
    );
  });
}

function resetBoard() {
  squares.forEach((square) => (square.textContent = ""));
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  board.style.display = "none";
}

function botTurn() {
  const emptySquares = gameBoard.reduce((acc, curr, index) => {
    if (curr === "") {
      acc.push(index);
    }
    return acc;
  }, []);
  const randomIndex = Math.floor(Math.random() * emptySquares.length);
  const botSquare = squares[emptySquares[randomIndex]];
  botSquare.textContent = "O";
  gameBoard[emptySquares[randomIndex]] = "O";
  if (checkWinner()) {
    alert("Bot wins!");
    resetBoard();
    return;
  }
  if (gameBoard.every((square) => square !== "")) {
    alert("Tie game!");
    resetBoard();
    return;
  }
  currentPlayer = "X";
}

playBtn.addEventListener("click", () => {
  board.style.display = "block";
});

squares.forEach((square, index) => {
  square.addEventListener("click", () => handleClick(square, index));
});

//END TIKTAKTOE
