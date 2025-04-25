// Recursion
// =========

function countDown(num) {
  console.log(num);

  if (num === 0) return;

  countDown(num - 1);
}

// countDown(5);

// POJOs
// Plain Old JavaScript Object(s)
// =============================
const markup = {
  type: "article",
  children: [
    {
      type: "h1",
      children: [
        {
          type: "text",
          value: "Hello World!",
        },
      ],
    },
  ],
};

const main = document.getElementById("app");

function addElements(pojoElement, parentDOMNode) {
  const newDOMNode =
    pojoElement.type === "text"
      ? document.createTextNode(pojoElement.value)
      : document.createElement(pojoElement.type);

  if (pojoElement.children) {
    pojoElement.children.forEach((child) => {
      addElements(child, newDOMNode);
    });
  }

  console.log(parentDOMNode);
  parentDOMNode.appendChild(newDOMNode);
}

addElements(markup, main);
