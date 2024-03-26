const inputs = document.getElementById("inp");
const text = document.querySelector(".text");

function Add() {
  if (inputs.value == "") {
    // in case of empty input field
    alert("Please enter text in input field first.");
  } else {
    let newElement = document.createElement("li");
    newElement.innerHTML = `${inputs.value}<i class="fa-solid fa-trash"></i>`;
    text.appendChild(newElement);
    inputs.value = "";

    // delete item
    newElement.querySelector("i").addEventListener("click", () => {
      newElement.remove();
    });

    //strike effect toggle
    newElement.addEventListener("click", () => {
      newElement.classList.toggle("strike");
      newElement.innerHTML = `${newElement.innerText}<i class="fa-solid fa-check"></i>`;
    });
  }
}
