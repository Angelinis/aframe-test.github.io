/* global AFRAME */
const videosArray = [
  "#video01",
  "#video02",
  "#video03",
  "#video04"
]

function changeVideo(){
  let videoSource = document.querySelector("#myVideo").getAttribute("src");
  videoSource = videosArray.indexOf(videoSource);
  document.querySelector("#myVideo").setAttribute("src", videosArray[videoSource + 1] || videosArray[0]);
}

document.querySelector("#changeVideo").addEventListener("click", () => changeVideo())

const rightController = document.querySelector("#rightController");

if (rightController) {
  rightController.addEventListener("raycaster-intersected", function (event) {
    const intersectedElement = event.detail.intersectedElems[0];
    if (intersectedElement.classList.contains("clickable")) {
      if (intersectedElement.id === "changeVideo") {
        changeVideo();
      }
    }
  });
} else {
  console.log("Controller not found");
}