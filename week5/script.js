// console.log("Welcome to Interactive Media");
// let count = 10;
// console.log(count);
// // const name="Brandon";
// // const name= prompt("What is your name?");
// // console.log ("Hello" name);
// const myName = "Brandon";
// const myCity = "Melbourne";
// console.log(myName, "lives in", myCity);
// count = 200;
// console.log(count);
// // let countAxin= 300;

// // let isItRaining = false;
// // if (isItRaining===true) {
// // console.log(isItRaining); }
// // else {
// //     console.log (no need for umbrella)
// // console.log("please bring umbrella")}

// let isItRaining = false;
// console.log(isItRaining);
// let isItOARTClass = true;
// console.log(isItOARTClass);

// // const studentRecord = {
// //   name: "Brandon",
// //   id: "s4054603",
// //   class: "OART1013",
// //   amIScienceStudent: false,
// //   amIDesignStudent: true,
// // };

// // console.log(studentRecord.name);
// // console.log(`${studentRecord.name}is a ${studentRecord.class} student`);

// // console.log(studentRecord.name, "is a", studentRecord.class, "student");

// // let studentNames = ["Brandon", "Axin", "Dennis", "Black Bear Guai"];
// // console.log(studentNames);
// // console.log(studentNames[4]);
// // let numArray = [2, 4, 6, 8, 10];
// // console.log(numArray);

// let myGrade = 1;
// if (myGrade >= 90) {
//   console.log("you got HD");
// } else if (myGrade < 90 && myGrade >= 70) {
//   console.log("you got D");
// } else if (myGrade < 70 && myGrade >= 50) {
//   console.log("you got C");
// } else if (myGrade < 50 && myGrade >= 30) {
//   console.log("you got P");
// } else {
//   console.log("you got F");
// }

console.log("hello Brandon");
console.log("hello Wukong");
console.log("hello Bro");
console.log("hello PeppaPig");
console.log("hello wocao");
console.log("hello niubi");

let names = ["Brandon", "Wukong", "Bro", "PeppaPig", "Wocao", "niubi"];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("Hello", names[i]);
}

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 60 },
  { name: "Black Bear Guai", price: 648 },
];

// let total =
//   shoppingCart[0].price +
//   shoppingCart[1].price +
//   shoppingCart[2].price +
//   shoppingCart[3].price;

// console.log("my shopping total", total);

let sum = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  sum = sum + shoppingCart[i].price;
  console.log("intermediaete sum", sum);
}

console.log("my shopping sum", sum);
