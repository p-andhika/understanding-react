const listElement = document.getElementById("list");
const newListElement = document.createElement("li");

newListElement.textContent = "Item 3";

setTimeout(() => {
  listElement.appendChild(newListElement);
}, 1000);

// Declarative & Imperative
// ========================

// Imperative
// Telling the browser what to do
const countElement = document.getElementById("count");

function setCount() {
  let count = Number(countElement.textContent);
  count = count + 1;
  countElement.textContent = count;
}
