const listElement = document.getElementById("list");
const newListElement = document.createElement("li");

newListElement.textContent = "Item 3";

setTimeout(() => {
  listElement.appendChild(newListElement);
}, 1000);

// Declarative & Imperative
// ========================
const countElement = document.getElementById("count");

const app = {
  getCount: () => {
    return Number(countElement.textContent);
  },
  setCount: (val) => {
    countElement.textContent = val;
  },
};

// Imperative
// Telling the browser what to do
// ==============================
// const countElement = document.getElementById("count");
// function setCount() {
//   let count = Number(countElement.textContent);
//   count = count + 1;
//   countElement.textContent = count;
// }

// Declarative
// Telling the browser what we want,
// no detail instruction given like what we've done in imperative
// ==============================================================
function setCount() {
  let count = app.getCount();
  if (count >= 5) {
    app.setCount(0);
  } else {
    app.setCount(count + 1);
  }
}
