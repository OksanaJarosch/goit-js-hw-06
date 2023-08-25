// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const textColorName = document.querySelector(".color");
const bodyEl =document.querySelector("body");

btnEl.addEventListener('click', handleButtonClick);

function handleButtonClick (event){
  const randomColor = getRandomHexColor();
  //console.log(randomColor);
  
textColorName.textContent = randomColor;
bodyEl.style.backgroundColor = randomColor;
}