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
  {
    src: "sunflower.jpg",
    caption:
      "Title: Sunflower\nAuthor: Brandon Sun\nMedium: Digital art\nDate: August 2024\nDescription: Sunflower is a digital work that conveys the artificiality of an ongoing digital age, everything can be digitised, including living things",
  },
  {
    src: "digital sunflower.jpg",
    caption:
      "Title: Sunflower\nAuthor: Brandon Sun\nMedium: Digital 3D art\nDate: September 2024\nDescription: Expanding on the exploration of digital life, this work conveys a similar idea but showcases my experimentation with 3D art mediums",
  },

  // { src: "image3.jpg", caption: "这是图片3的文字描述" },
];
const imgElement = document.getElementById("image");
const captionElement = document.getElementById("caption");
//--------------------------------------------------

// const images = ["cloud.png", "ocean.JPG"];
let currentIndex = 0;
console.log("current index");

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
  // 图片淡出效果
  imgElement.style.animation = "fadeOut 1s ease-in-out";

  // 在淡出动画完成后切换图片和文字
  setTimeout(function () {
    currentIndex = (currentIndex + 1) % images.length;

    // 更新图片 src 和文字
    imgElement.src = images[currentIndex].src;
    captionElement.textContent = images[currentIndex].caption;

    // 切换到新的图片后触发淡入动画
    imgElement.style.animation = "fadeIn 1s ease-in-out";
  }, 1000); // 1秒与CSS动画同步
});
