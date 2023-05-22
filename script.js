const currentOperations = document.querySelector(".current-operations");
const total = document.querySelector(".total");
const itemsContainer = document.querySelector(".items-container-list");
const liItems = itemsContainer.querySelectorAll("li");

let memoryNr = 0;
let string = "";

for (let li of liItems) {
  li.addEventListener("click", (e) => {
    let lastCharInStringConverted = isNaN(Number(string.slice(-1)));
    let lastCharInStringValue = string.slice(-1);
    let selectedItemConverted = isNaN(Number(e.target.textContent));
    let selectedItemValue = e.target.textContent;

    if (selectedItemValue === "ans") {
      return;
    }

    if (selectedItemValue === "del") {
      string = currentOperations.textContent.slice(
        0,
        currentOperations.textContent.length - 1
      );
      currentOperations.textContent = string;
      return;
    }

    if (selectedItemValue === "clear") {
      string = "";
      currentOperations.textContent = string;
      return;
    }

    if (selectedItemValue === "ENTER") {
      total.textContent = eval(string);
      return;
    }

    if (string === "" || string.length === 0) {
      if (!selectedItemConverted || selectedItemValue === "(") {
        string = string + selectedItemValue;
        currentOperations.textContent = string;
      } else {
        return;
      }
      return;
    }

    if (lastCharInStringValue === ")") {
      if (selectedItemConverted && selectedItemValue !== ")") {
        string = string + selectedItemValue;
        currentOperations.textContent = string;
      }
      return;
    }

    if (lastCharInStringValue === "(") {
      if (!selectedItemConverted) {
        string = string + selectedItemValue;
        currentOperations.textContent = string;
      }
      return;
    }

    if (lastCharInStringConverted) {
      if (!selectedItemConverted || selectedItemValue === "(") {
        string = string + selectedItemValue;
        currentOperations.textContent = string;
      }
      return;
    }

    if (!lastCharInStringConverted) {
      if (selectedItemValue !== "(") {
        string = string + selectedItemValue;
        currentOperations.textContent = string;
      }
    }
  });
}
