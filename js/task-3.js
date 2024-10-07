const inputElem = document.querySelector("#name-input");
const spanElem = document.querySelector("#name-output");

inputElem.addEventListener("input", (event) => {
    let currentValue = event.target.value.trim();//вывод введенного текста и трим
  if (currentValue === "") {//если значение инпут - пустое
     spanElem.textContent = "Anonymous"; // вывести анонимус , текстовое содержание элемента спан
     } else {
    spanElem.textContent = currentValue; // иначе введенное значение  инпут
    }
    // console.log(currentValue);
});

