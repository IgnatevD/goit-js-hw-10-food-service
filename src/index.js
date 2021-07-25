import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const PROMPT_DELAY = 1000;
let setId = null;
let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttonClick = document.querySelector(`body`);

buttonClick.addEventListener(`click`, e => {
    if (e.target.dataset.action === `start`) startColor();
    if (e.target.dataset.action === `stop`) stopColor();
});

function startColor() {
     if (isActive) return;

    setId = setInterval(() => {
    buttonClick.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
    }, PROMPT_DELAY);
    isActive = true;  
};

function stopColor() {
    clearInterval(setId);
    isActive = false;
};




