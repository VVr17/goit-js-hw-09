/* 
Напиши скрипт, который после нажатия кнопки «Start», 
раз в секунду меняет цвет фона <body> на случайное значение 
используя инлайн стиль. При нажатии на кнопку «Stop», 
изменение цвета фона должно останавливаться.
*/

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
let intervalId = null;

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6,0)}`;
}

function onBtnStartClick(event) {
  refs.btnStart.setAttribute('disabled', true);
  refs.btnStop.removeAttribute('disabled');

  intervalId = setInterval(() =>
    document.body.style.backgroundColor = getRandomHexColor(), 1000)
}

function onBtnStopClick(event) {
  refs.btnStop.setAttribute('disabled', true);
  refs.btnStart.removeAttribute('disabled');

  clearInterval(intervalId);
}