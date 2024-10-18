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
const images = ["cloud.png", "ocean.JPG"];
let currentIndex = 0;

// 获取图片元素
const imgElement = document.querySelector("cloud.png");
console.log("cloud");

// 添加点击事件监听器
imgElement.addEventListener("click", function () {
  // 更新索引，切换到下一张图片，循环回到第一张
  currentIndex = (currentIndex + 1) % images.length;
  imgElement.src = images[currentIndex];
});
