function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector("body");//найти элементы
const btnElem = document.querySelector("button.change-color");
const spanElem = document.querySelector("span.color");

btnElem.addEventListener("click", () => {//обробник под11 по клику к кнопке
  const newColor = getRandomHexColor(); //переменная с новым цветом от функции getRandomHexColor
  bodyElem.style.backgroundColor = newColor; //боди(фон) меняет цвет на новый.
  spanElem.textContent = newColor;//текст в спан также
  // console.log(newColor);
});