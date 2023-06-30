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

AFRAME.registerComponent('controller-listener', {
  init: function () {
    const el = this.el; // Reference to the entity element this component is attached to

    el.addEventListener('raycaster-intersected', function (event) {
      const intersectedElement = event.detail.intersectedEl;
      
      if (intersectedElement.classList.contains("clickable")) {
        if (intersectedElement.id === "changeVideo") {
          changeVideo();
        }
        // Add more conditions or actions for other clickable elements
      }
    });
  }
});