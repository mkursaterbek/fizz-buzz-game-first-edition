let monitor = document.querySelector("#monitor");
let countdown = document.querySelector("#countdown");
let btnFizz = document.querySelector("#fizz");
let btnFizzBuzz = document.querySelector("#fizzbuzz");
let btnBuzz = document.querySelector("#buzz");
let btnNewGame = document.querySelector("#newgame");
let counter = 0;
let time = 5;
let timer = null;

btnFizz.addEventListener("click", function () {
  if (counter % 3 === 0) {
    clearTimer();
    newNumber();
  } else {
    monitor.innerHTML = "siktir lan";
  }
});

btnBuzz.addEventListener("click", function () {
  if (counter % 5 === 0) {
    clearTimer();
    newNumber();
  } else {
    monitor.innerHTML = "siktiriniz gidiniz lan";
  }
});

btnFizzBuzz.addEventListener("click", function () {
  if (counter % 5 === 0 && counter % 3 === 0) {
    clearTimer();
    newNumber();
  } else {
    monitor.innerHTML = "siktir git lan";
  }
});

btnNewGame.addEventListener("click", function () {
  clearTimer();
  newNumber();
});

function newNumber() {
  counter = Math.floor(Math.random() * 2500);
  monitor.innerHTML = counter;
  if (counter % 3 === 0) {
    startTimer();
    monitor.innerHTML = counter + "?";
  } else if (counter % 5 === 0) {
    startTimer();
    monitor.innerHTML = counter + "?";
  } else if (counter % 15 === 0) {
    startTimer();
    monitor.innerHTML = counter + "?";
  }
}

function timerInterval() {
  countdown.innerHTML = time;
  if (time <= 0) {
    countdown.innerHTML = "Game Over";
    return;
  }
  time--;
}

function startTimer() {
  timer = setInterval(() => {
    timerInterval();
  }, 1000);
}

function clearTimer() {
  clearInterval(timer);
  timer = null;
  time = 5;
  countdown.innerHTML = "-";
}
