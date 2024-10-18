// Most of the work is done here using querySelector and getElementById. I selected the images in the repository, which also makes it easier for me to add more photos in the future. I added the photo format in JavaScript. In JavaScript, ImgIndex is updated to display the next image array when the user clicks on the image, and the caption element also changes correspondingly.
// I chose this design to give the user a sense of anticipation when switching between photos, making the click interaction more engaging and meaningful to bring a sense of excitement when displaying a new picture as feedback. This context is more useful than the previous in providing a platform to display my works as an artist and designer in developing interactive media.
// Browsing through similar portfolio websites, many choose to display all works upfront all at once. I think not only that make the browsing experience boring due to the lack of interaction and animation, it also takes away any excitement of discovering a new work.

const drawerButton = document.querySelector("#drawer-button");
const sideDrawer = document.querySelector("#side-drawer");
console.log(sideDrawer);
let isOpen = false;
drawerButton.addEventListener("click", openDrawer);

function openDrawer() {
  console.log("i am clicked");
  if (!isOpen) {
    sideDrawer.style.translate = "200px";
    isOpen = true;
  } else {
    sideDrawer.style.translate = "-200px";
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
];
const imgElement = document.getElementById("image");
const captionElement = document.getElementById("caption");
//--------------------------------------------------

let ImgIndex = 0;
console.log("index");

//--------------------------------------------------

imgElement.addEventListener("click", function () {
  imgElement.style.animation = "fadeOut 1s ease-in-out";

  setTimeout(function () {
    ImgIndex = (ImgIndex + 1) % images.length;

    imgElement.src = images[ImgIndex].src;
    captionElement.textContent = images[ImgIndex].caption;

    imgElement.style.animation = "fadeIn 1s ease-in-out";
  }, 1000);
});
