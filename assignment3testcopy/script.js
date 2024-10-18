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
//--------------------------------------------------
document.getElementById("caption").style.whiteSpace = "pre-line";

const images = [
  {
    src: "cloud.png",
    caption:
      "Title: Cloud\nAuthor: Brandon Sun\nMedium: Photography\nDate: July 2024\nDescription: Cloud is a photography work that conveys the artist's discovery of nature",
  },
  {
    src: "ocean.JPG",
    caption:
      "Title: Ocean\nAuthor: Brandon Sun\nMedium: Photography\nDate: August 2024\nDescription: Ocean is a photography work that focuses on the beautiful ocean",
  },
  // { src: "image3.jpg", caption: "这是图片3的文字描述" },
];
const imgElement = document.getElementById("image");
const captionElement = document.getElementById("caption");
//--------------------------------------------------

// const images = ["cloud.png", "ocean.JPG"];
let currentIndex = 0;

// 获取图片元素
// const imgElement = document.getElementById("image");
// console.log("cloud");

// 添加点击事件监听器
// imgElement.addEventListener("click", function () {
//   // 更新索引，切换到下一张图片，循环回到第一张
//   currentIndex = (currentIndex + 1) % images.length;
//   imgElement.src = images[currentIndex];
// });

//--------------------------------------------------

imgElement.addEventListener("click", function () {
  // 更新当前索引，切换到下一张图片和对应文字，如果到最后一张则回到第一张
  currentIndex = (currentIndex + 1) % images.length;

  // 更改图片的 src 属性和对应的文字
  imgElement.src = images[currentIndex].src;
  captionElement.textContent = images[currentIndex].caption;
});
