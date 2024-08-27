function checkWeather() {
  let temp = document.querySelector("#temp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  console.log(temp);
  if (temp.value >= 40) {
    console.log("it is burning hot");
    body.style.backgroundColor = "crimson";
    outer.style.backgroundColor = "blue";
    outer.style.borderColor = "black";
  } else if (temp.value < 40 && temp.value >= 30) {
    console.log("it is sunny and warm");
    body.style.backgroundColor = "limegreen";
    outer.style.backgroundColor = "peach";
    outer.style.borderColor = "hotpink";
  } else if (temp.value < 30 && temp.value >= 15) {
    console.log("it is pretty good weather");
    body.style.backgroundColor = "aqua";
    outer.style.backgroundColor = "purple";
    outer.style.borderColor = "crimson";
  } else if (temp.value < 15) {
    console.log("it is freezing cold");
    body.style.backgroundColor = "grey";
    outer.style.backgroundColor = "coral";
    outer.style.borderColor = "aqua";
  }
}
