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
    let intersectedElement = null; // Variable to store the currently intersected element

    // Event handler for raycaster intersection
    const intersectionHandler = function (event) {
      intersectedElement = event.detail.els[0]; // Update the intersected element

      if (intersectedElement.classList.contains("clickable")) {
        if (intersectedElement.id === "changeVideo") {
          changeVideo();
        }
        // Add more conditions or actions for other clickable elements
      }
    };

    // Event handler for raycaster intersection cleared
    const intersectionClearedHandler = function (event) {
      intersectedElement = null; // Reset the intersected element
    };

    // Add event listeners for intersection and intersection cleared events
    el.addEventListener('raycaster-intersection', intersectionHandler);
    el.addEventListener('raycaster-intersection-cleared', intersectionClearedHandler);
  }
});
