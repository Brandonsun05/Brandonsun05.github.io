// I first retrieved all the DOM, then mapped them to their dedicated functions using queryselector, eventlistener, and function in JavaSctipt. I chose to include functions of play, pause, mute, change volume, replay, loop, and full-screen.

// For a single media player, these controls are helpful for the user as they would want to play or pause on demand and adjust or mute the volume. The viewer can also enable a loop, which is achieved by changing the value of the loop between true and false (if the loop is true, the video will replay; if false, it is not).

// The full-screen function provides a more immersive view if the user prefers, which can also be achieved by double-clicking on the video or quitting.

// Finally, for functions that indicate the state of the video, I added changes in colour or icon (mute, loop, play/pause functions) by changing the style of the buttons. This technique is also used to achieve the change in background colour which detects the state of the video (if play/paused), and changes the background style to white/black accordingly. This way, when the user presses the play/pause button, the background responds accordingly to provide immersion.

const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");
const body = document.querySelector("body");
const loopBtn = document.querySelector("#loop-btn");
loopBtn.addEventListener("click", loopVideo);
const loopImg = document.querySelector("#loop-img");
const fullScreenBtn = document.querySelector("#full-screen-btn");
const fullScreenImg = document.querySelector("#full-screen-img");
const replayBtn = document.querySelector("#replay-btn");
const replayImg = document.querySelector("#replay-img");
video.removeAttribute("controls");
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

muteUnmuteBtn.addEventListener("click", toggleSound);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");

function toggleSound() {
  if (video.muted) {
    video.muted = false;
    muteUnmuteBtn.style.backgroundColor = "#938989";
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  } else {
    video.muted = true;
    muteUnmuteBtn.style.backgroundColor = "#E6554B";
  }
}

function updateVolume() {
  const volume = video.volume;
  console.log("Volume changed:", volume);
}

// Event listener to check current volume
video.addEventListener("volumechange", updateVolume);
function updateVolume() {}

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
  if (video.volume > 0.0) {
    video.volume -= 0.1;
  }
}
video.addEventListener("dblclick", toggleFullScreen);
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

let loop = false;
function replay() {
  console.log("loop is", loop);
  if (loop) {
    video.currentTime = 0;
    video.load();
    video.play();
  }
}

//this function will set the value of loop to true or false
function loopVideo() {
  if (loop) {
    loop = false;
    loopBtn.style.backgroundColor = "#938889";
  } else {
    loop = true;
    loopBtn.style.backgroundColor = "#7b775e";
  }
  console.log("loop is", loop);
}
video.addEventListener("ended", replay);

fullScreenBtn.addEventListener("click", toggleFullScreen);

replayBtn.addEventListener("click", function () {
  video.currentTime = 0;
  video.play();
});
//--------------------------------------------------------------------------------------------------------------
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
