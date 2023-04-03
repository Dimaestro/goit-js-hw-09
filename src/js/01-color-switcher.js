const elements = {
  btnStart : document.querySelector('[data-start]'),
  btnStop : document.querySelector('[data-stop]'),
  body : document.querySelector('body'),
}

let intervalId = null;
elements.btnStop.disabled = true;

elements.btnStart.addEventListener('click',onStartChangeColor);
elements.btnStop.addEventListener('click',onStopChangeColor);

function onStartChangeColor() {
  intervalId = setInterval(() => {
    elements.body.style.backgroundColor = getRandomHexColor()
  }, 1000);

  elements.btnStart.disabled = true;
  elements.btnStop.disabled = false;
}

function onStopChangeColor() {
  clearInterval(intervalId);

  elements.btnStart.disabled = false;
  elements.btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}