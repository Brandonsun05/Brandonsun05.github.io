const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");
const body = document.querySelector("body");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    body.style.backgroundColor = "black";
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    body.style.backgroundColor = "white";
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here
// function changeVolume() {}
// let volume = document.getElementById("volume-slider");
// volume.addEventListener("change", function (e) {
//   audio.volume = e.currentTarget.value / 100;
// });

muteUnmuteBtn.addEventListener("click", toggleSound);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");

function toggleSound() {
  if (video.muted) {
    video.muted = false;
    muteUnmuteBtn.style.backgroundColor = "red";
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    video.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    muteUnmuteBtn.style.backgroundColor = "blue";
  }
}

function updateVolume() {
  const volume = video.volume;
  console.log("Volume changed:", volume);
}

// Event listener to check current volume
video.addEventListener("volumechange", updateVolume);

const increaseVolumeButton = document.querySelector("#increase-volume-btn");
// Event listener to increase volume on clicking the button
increaseVolumeButton.addEventListener("click", increaseVolume);

const decreaseVolumeButton = document.querySelector("#decrease-volume-btn");
// Event listener to decrease volume on clicking the button
decreaseVolumeButton.addEventListener("click", decreaseVolume);

//volume values range from 0 to 1 with an increment of 0.1
function increaseVolume() {
  if (video.volume < 0.9) {
    video.volume += 0.1;
  }
}

//since you do not want the value to go to negative the check is not at 0 but 0.11
function decreaseVolume() {
  if (video.volume > 0.11) {
    video.volume -= 0.1;
  }
}
