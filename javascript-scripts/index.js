/* global AFRAME */
const videosArray = [
  "#video01",
  "#video02",
  "#video03",
  "#video04"
];

let buttonPressed = false;


AFRAME.registerComponent('a-button-listener', {
  init: function () {
    var el = this.el;
    el.addEventListener('abuttondown', function (evt) {
      document.querySelector("#consoleTemporary").setAttribute("value", buttonPressed);
    });
    el.addEventListener('abuttonup', function (evt) {
      document.querySelector("#consoleTemporary").setAttribute("value", buttonPressed);
    })
  }
});

AFRAME.registerComponent('raycaster-listener', {
  init: function () {

   this.el.addEventListener('raycaster-intersected', evt => {
      this.raycaster = evt.detail.el;
    });
    this.el.addEventListener('raycaster-intersected-cleared', evt => {
      this.raycaster = null;
    });
  },
  tick: function () {
    if (!this.raycaster) { return; }  // Not intersecting.
    let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
    if (!intersection) { return; } // Not intersecting
    const intersectedObject = intersection.object;
    const objectId = intersectedObject.el.getAttribute('id');
    // document.querySelector("#consoleTemporary").setAttribute("value", objectId + this.pressed);
    switch (objectId) {
      case "changeVideo":
        if (this.pressed) {
          changeVideo();
        }
        break;
      case "pauseVideo":
        pauseVideo();
        break;
      case "playVideo":
        playVideo();
        break;
      default:
        break;
    }
  }
});

function changeVideo() {
  let videoSource = document.querySelector("#myVideo");
  let currentSource = videoSource.getAttribute('src');
  let currentIndex = videosArray.indexOf(currentSource);
  videoSource.setAttribute("src", videosArray[currentIndex + 1] || videosArray[0]);
}

function pauseVideo() {
  let videoSource = document.querySelector("#myVideo");
  let currentSource = videoSource.getAttribute('src');
  let videoEl = document.querySelector(currentSource);
  if (!videoEl) { return; }
  videoEl.pause();
}

function playVideo() {
  let videoSource = document.querySelector("#myVideo");
  let currentSource = videoSource.getAttribute('src');
  let videoEl = document.querySelector(currentSource);
  if (!videoEl) { return; }
  videoEl.play();
}
