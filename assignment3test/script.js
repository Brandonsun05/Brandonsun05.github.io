const drawerButton = document.querySelector("#drawer-button");
const sideDrawer = document.querySelector("#side-drawer");
console.log(sideDrawer);
let isOpen = false;
drawerButton.addEventListener("click", openDrawer);

function openDrawer() {
  console.log("i am clicked");
  if (!isOpen) {
    // sideDrawer.style.transform = `translateX(200px)`;
    sideDrawer.style.translate = "200px";
    isOpen = true;
  } else {
    sideDrawer.style.translate = "-200px";
    // sideDrawer.style.transform = `translateX(-200px)`;
    isOpen = false;
  }
}

let currentIndex = 0;
const images = document.querySelectorAll(".image-container");

function showNextImage() {
  // 移除当前图片的 active 类
  images[currentIndex].classList.remove("active");

  // 更新索引
  currentIndex = (currentIndex + 1) % images.length;

  // 为新的图片添加 active 类
  images[currentIndex].classList.add("active");
}

// 添加点击事件
document
  .querySelector(".image-container")
  .addEventListener("click", showNextImage);
