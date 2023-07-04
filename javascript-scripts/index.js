/* global AFRAME */
const videosArray = [
  "#video01",
  "#video02",
  "#video03",
  "#video04"
];

AFRAME.registerComponent('raycaster-listener', {
  init: function () {
    var controller = null;
    var self = this; 
    this.el.sceneEl.addEventListener('loaded', function () {
      controller = self.el.sceneEl.querySelector('[oculus-touch-controls]');
      if (!controller) { 
        console.log("Not controller found")
        return; }
      controller.addEventListener('abuttondown', evt => {
        this.pressed = true;
      });
      controller.addEventListener('abuttonup', evt => {
        this.pressed = false;
      });
    })
    // this.buttonpressed = null;
    // let controller = null;
    // this.el.sceneEl.addEventListener('loaded', () => {
    //   controller = this.el.sceneEl.querySelector('[oculus-touch-controls]');
    //   if (!controller) { 
    //     console.log("No controller found");
    //     return;
    //   }
    //   controller.addEventListener('abuttondown', () => { this.buttonpressed = "pressed" });
    //   controller.addEventListener('abuttonup', () => { this.buttonpressed = null });
    // });
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
    document.querySelector("#consoleTemporary").setAttribute("value", objectId);
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
