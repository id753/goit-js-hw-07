const form = document.querySelector("form.login-form");

form.addEventListener("submit", (event) => {//відправлення форми form.login-form повинна відбуватися за подією submit.
    event.preventDefault(); // Під час відправлення форми сторінка не повинна перезавантажуватися.
    // Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. 
    const inputs = document.querySelectorAll("input"); // получение инпуты все
    let isEmpty = false; // зм1нна для проверки, по умолчанию заполенное поле

    inputs.forEach(input => {
        if (input.value.trim() === "") { //значение введеное в поле импут и обрезка
            isEmpty = true; // если поле пустое
        }
    });
    if (isEmpty) {
        alert('All form fields must be filled in');
    } else {
        // console.log("ок");
        const elements = event.currentTarget.elements; //получение доступа к элем. формы
    // получение обьекта с получениыми данными
    const info = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim(),
    }   
        console.log(info);
         // очистка формы после сабмит
    event.target.reset();
    }
});
