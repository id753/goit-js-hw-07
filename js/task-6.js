const input = document.querySelector('#controls input'); //найти элементы
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// добавляем обработчик событий
createBtn.addEventListener('click', handleCreate);//обработчик событий, по клику вызов колбек функции
destroyBtn.addEventListener('click', handleDestroy);//также

// Обработчик для кнопки Create
function handleCreate() {
    const amount = Number(input.value); //Перетворює введене значення з input на число.
    if (amount < 1 || amount > 100) { // если число меньше или  больше - алерт
        alert('Please enter a number between 1 and 100.');
        return;//завершаем функцию если условие не выполнено
    }
    input.value = ""; //Очищає значення в input після успішної перевірки.
    createBoxes(amount); // Виклик функції для створення елементів
}

// Обробник для кнопки Destroy
function handleDestroy() {
    destroyBoxes(); // Виклик функції для очищення елементів
}

// Функція для створення елементів
function createBoxes(amount) {
    const boxes = []; // пустой массив у який пізніше будуть додаватися створені елементи <div
    for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10; // 30px, 40px, 50px, ...
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.push(box); //добавляет каждый созданный элемент в массив boxes.
        // console.log(boxes);
        
    }
    boxesContainer.innerHTML = ""; // Очищение старых элементов
    boxes.forEach(box => boxesContainer.append(box)); // Добавление новых элементов
    
}

// Функція для очищення елементів
function destroyBoxes() {
    boxesContainer.innerHTML = ""; // Очищення вмісту
    input.value = '';
}

// Функція для генерації випадкового кольору
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}