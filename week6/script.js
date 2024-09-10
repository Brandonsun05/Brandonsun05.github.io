function checkGrade() {
  const a1 = document.querySelector("#answer1");
  console.log(a1.value);
  const a2 = document.querySelector("#answer2");
  console.log(a2.value);
  //   let total = parseFloat(a1.value) + parseFloat(a2.value);
  //   let sum = calculateTotal(parseFloat(a1.value), parseFloat(a2.value));
  let a1Value = parseFloat(a1.value);
  let a2Value = parseFloat(a2.value);
  let sum = calculateTotal(a1Value, a2Value);
  console.log("sum is", sum);
  sendReport(sum);
}

function calculateTotal(a, b) {
  let total = a + b;
  return total;
}
function sendReport(score) {
  const report = document.querySelector("#report");
  console.log(report);
  if (score > 30) {
    // console.log("you got HD");
    console.log("聪明逼");
    report.textContent = "聪明逼";
  } else if (score > 20 && score <= 30) {
    // console.log("you got a D");
    console.log("菜就多练");
    report.textContent = "菜就多练";
  } else if (score > 1 && score <= 20) {
    // console.log("you got a D");
    console.log("纯傻逼");
    report.textContent = "纯傻逼";
  }
  //   else {console.log (“菜逼”)

  //   }
}
// function checkGrade() {
//     const a1 = document.querySelector("#answer1");
//     const a1Value = parseFloat(a1.value); // Convert to number
//     console.log(a1Value);

//     const a2 = document.querySelector("#answer2");
//     const a2Value = parseFloat(a2.value); // Convert to number
//     console.log(a2Value);

//     const total = calculateTotal(a1Value, a2Value);
//     console.log(total);
//     reportBackGrade(total);
//     // a1.value = "";
//   }

//   function calculateTotal(a, b) {
//     return a + b;
//   }

//   function reportBackGrade(score) {
//     let report = document.querySelector("#report");
//     report.innerHTML = "";
//     if (score > 30) {
//       report.innerHTML = `You scored <span class="grade">High Distinction </span>!!!`;
//     } else if (score > 20 && score <= 30) {
//       report.innerHTML = `You scored <span class="grade">Distinction </span>!!!`;
//     } else if (score > 10 && score <= 20) {
//       report.innerHTML = `You scored <span class="grade">Passing marks </span>!!!`;
//     } else {
//       report.innerHTML = `Sorry, you <span class="fgrade">failed </span>!!!`;
//     }
//   }

//   ​
//   Auto

// const para = document.querySelector("p");
// console.log(para);

// const allPara = document.querySelectorAll("p");
// console.log(allPara);

// const h1 = document.querySelector("h1");
// console.log(h1);

// const allAbcd = document.querySelector(".abcd");
// console.log(allAbcd);

const question2 = document.querySelector("#question2");
console.log(question2.textContent);
question2.textContent = "What is assignment 2 score?";
// h1.classList.add("red-style");

// const question1 = document.querySelector("#question1");
// console.log(question1.textContent);
// question1.textContent = "What is assignment 1 score?";

const moon = document.querySelector("#moon");
console.log(moon);
moon.classList.add("round");

function toggleMe() {
  moon.classList.toggle("round");
}

const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
console.log(header.textContent);
header.innerHTML += `<p class= "blue-style"> This is a moon </p>`;
let appearance = "sexy";
let doubt = "doubt";
header.innerHTML += `<p class="blue-style" > it is ${appearance}! </p><p class="red-style"> do you have any ${doubt}?</p>`;
