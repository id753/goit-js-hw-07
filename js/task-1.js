const item = document.querySelector("#categories");
const itemList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${itemList.length}`);

itemList.forEach(item => {
    const title = item.querySelector("h2").textContent;
    const listLength = item.querySelectorAll("ul li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${listLength}`);
})
