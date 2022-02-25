'use strict';
// please do not delete the 'use strict' line above

// -------------------- variable declarations --------------------
const button = document.getElementById('color-button');
const colorContainer = ["#0047AB", "#26619C", "#3F00FF", "#191970", "#000080"]
// ["Cobalt Blue", "Lapis Lazuli", "Ultramarine", "Midnight Blue", "Navy Blue"]
let clickCounter = 0;
let modeSwitch = 0;
let resultTime;
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
// -------------------- click event --------------------
button.addEventListener('click', () => {
  clickCounter++;
// ------ change color -----
  const getRandomNumberForColor = Math.floor(Math.random() * 5)
  document.body.style.backgroundColor = colorContainer[getRandomNumberForColor];
// ------ change text -----
  if (clickCounter >= 8 && modeSwitch === 0) {
    button.textContent = "You clicked too much!!";
    button.style.fontSize = "18px";
  }
  if (clickCounter >= 12 && modeSwitch === 0) {
    button.textContent = "No Hidden-command this time";
    button.style.fontSize = "18px";
  }
  if (clickCounter >= 16 && modeSwitch === 0) {
    button.textContent = "Are you ready?";
    button.style.fontSize = "16px";
  }
// ------ change position -----
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  const getRandomNumberForPositionTop = Math.floor(Math.random() * (windowHeight - button.offsetHeight));
  const getRandomNumberForPositionLeft = Math.floor(Math.random() * (windowWidth - button.offsetWidth));

  if (clickCounter < 16 && modeSwitch === 0) {
    button.classList.add("move");
    button.style.top = `${getRandomNumberForPositionTop}px`;
    button.style.left = `${getRandomNumberForPositionLeft}px`;
  }

  if (clickCounter === 16 && modeSwitch === 0) {
    button.classList.remove("move");
    areYouReady();
  }

  if (clickCounter > 0 && modeSwitch === 1) {
    button.textContent = "Have a good gay!";
    button.style.fontSize = "16px";
    let level;
    if (windowHeight <= 200 && windowWidth <= 510) {
      level = "Easy";
    } else if (windowHeight <= 350 && windowWidth <= 850) {
      level = "Normal";
    } else if (windowHeight <= 500 && windowWidth <= 1000) {
      level = "Hard";
    } else if (windowHeight <= 600 && windowWidth <= 1200) {
      level = "Very Hard";
    } else if (windowHeight >= 601 && windowWidth >= 1201) {
      level = "Impossible";
    }
    button.title = `
    LV: ${level}
    window heigth: ${windowHeight}
    window width: ${windowWidth}
    result: ${resultTime}sec
    `
}
});

// -------------------- game start --------------------

function areYouReady() {
  setTimeout(() => gameStart(), 3000);
}

function gameStart() {
  clickCounter = 0;
  modeSwitch = 1;
  const startTime = Date.now();
  button.classList.add("move");
  countTime();
  function countTime () {
    setTimeout(() => {
      if (clickCounter === 0) {
        const timer = new Date(Date.now() - startTime);
        const sec = timer.getSeconds();
        const milliSec = timer.getMilliseconds();
        button.textContent = resultTime = `${sec}.${milliSec}`;
        countTime();
      }
    }, 10)
  }
  moveButton();
  function moveButton () {
    setTimeout(() => {
      if (clickCounter === 0) {
        const getRandomNumberForPositionTop = Math.floor(Math.random() * (windowHeight - button.offsetHeight));
        const getRandomNumberForPositionLeft = Math.floor(Math.random() * (windowWidth - button.offsetWidth));
        button.style.top = `${getRandomNumberForPositionTop}px`;
        button.style.left = `${getRandomNumberForPositionLeft}px`;
        moveButton();
      }
    }, 500);
  }
};
