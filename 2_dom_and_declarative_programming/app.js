const listElement = document.getElementById("list");
const newListElement = document.createElement("li");

newListElement.textContent = "Item 3";

setTimeout(() => {
  listElement.appendChild(newListElement);
}, 1000);
