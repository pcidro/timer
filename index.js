const iniciar = document.getElementById("iniciate");
const pausar = document.getElementById("pause");
const resetar = document.getElementById("reset");
const status = document.getElementById("status");
const timer = document.getElementById("timer");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

iniciar.addEventListener("click", iniciateTime);
pausar.addEventListener("click", pauseTime);
pausar.addEventListener("dblclick", resetTime);

let i = 0;
let time;

function iniciateTime() {
  time = setInterval(() => {
    const min = String(Math.floor(i / 60)).padStart(2, "0");
    const sec = String(i % 60).padStart(2, "0");
    minutes.innerText = min;
    seconds.innerText = sec;
    i++;
  }, 1000);
}

function pauseTime() {}

function resetTime() {}
