
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const gallery = document.querySelector("ul.gallery");
const fragment = document.createDocumentFragment(); // Создаем DocumentFragment

images.forEach(item => {//перебор массива обьектов - картинки, в каждом обьекте алт и юрл
  const img = document.createElement("img"); //создание тега имг
  img.src = item.url; //присвоение атрибутам имг ссылку, алт из масива обьектов
  img.alt = item.alt;

  const li = document.createElement("li");
  li.append(img); //добавить имг в ли
  
  fragment.append(li); // Добавляем <li> в DocumentFragment
});

gallery.append(fragment); // Вставляем DocumentFragment в <ul>

// console.log(gallery);