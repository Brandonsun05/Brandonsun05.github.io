// const myButton = document.querySelector("#my-button");
// console.log(myButton);

// myButton.addEventListener("click", myFunction);
// let clickCount = 0;

// function myFunction() {
//   console.log("did you just click me?");
//   clickCount++;
//   count.textContent=clickCount
// }

// const count = document.querySelector("#count");

const boxContainer = document.querySelector(".box-container");
console.log(boxContainer);

const toggleButton = document.querySelector("#toggle-button");
console.log(toggleButton);
toggleButton.addEventListener("click", toggleMe);

function toggleMe() {
  console.log("toggle button is clicked");
  boxContainer.classList.toggle("row-reverse");
}

const addButton = document.querySelector("#add-button");
console.log(addButton);
addButton.addEventListener("click", addMe);

const removeButton = document.querySelector("#remove-button");
console.log(removeButton);
removeButton.addEventListener("click", removeMe);

// function AddMe() {
//   console.log("add button is clicked");
//   boxContainer.innerHTML += `<div class="box purple-box"></div>
//         <div class="box coral-box"></div>`;
// }

let count = 0;
function addMe() {
  console.log("add buttn is clicked");
  if (count % 2 === 0) {
    boxContainer.innerHTML += `<div class="box purple-box"></div>`;
  } else {
    boxContainer.innerHTML += `<div class="box coral-box"></div>`;
  }
  count++;
}

function removeMe() {
  let lastBox = boxContainer.lastElementChild;
  console.log(lastBox);
  if (lastBox) {
    lastBox.remove();
  }
  count--;
}

boxContainer.addEventListener("mouseenter", dropMe);
boxContainer.addEventListener("mouseleave", pickMe);

function dropMe() {
  boxContainer.classList.add("drop");
}

function pickMe() {
  boxContainer.classList.remove("drop");
}
