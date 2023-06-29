/* global AFRAME */
const videosArray = [
  "#video01",
  "#video02",
  "#video03",
  "#video04"
]


// AFRAME.registerComponent('play-on-click', {
//    init: function () {
//      this.onClick = this.onClick.bind(this);
//      this.onKeyPress = this.onKeyPress.bind(this);
//    },
//    play: function () {
//      window.addEventListener('click', this.onClick);
//      window.addEventListener('keypress', this.onKeyPress);
//   },
//    onClick: function (evt) {
//      var videoEl = this.el.getAttribute('material').src;
//      if (!videoEl) { return; }
//      this.el.object3D.visible = true;
//      videoEl.play();
//    },
//    onKeyPress: function (evt) {
//       if (evt.key === 'o') {  
//         let videoSource = this.el.getAttribute("src");
//         videoSource = videosArray.indexOf(videoSource);
//          this.el.setAttribute("src", videosArray[videoSource+1] || videosArray[0]);
//        };
//        var videoEl = this.el.getAttribute('material').src;
//       if (!videoEl) { return; }
//       if (evt.key === 'p') {  
//         videoEl.pause();
//       }
//    }
//  });

AFRAME.registerComponent('video-listener', {
  init: function () {
    var el = this.el;
    var controller = null;
    el.sceneEl.addEventListener('loaded', function () {
      controller = el.sceneEl.querySelector('[oculus-touch-controls]');
      if (!controller) { 
        console.log("Not controller found")
        return; }
      controller.addEventListener('xbuttondown', playVideo);
      controller.addEventListener('ybuttondown', pauseVideo);
      controller.addEventListener('gripdown', changeVideo);
    });

    function playVideo() {
      var videoElId = el.getAttribute('src');
      var videoEl = null;
      videoEl = document.querySelector(videoElId);
      if (!videoEl) { return; }
      videoEl.play();
    }

    function pauseVideo() {
      var videoElId = el.getAttribute('src');
      var videoEl = null;
      videoEl = document.querySelector(videoElId);
      if (!videoEl) { return; }
      videoEl.pause();
    }
    function changeVideo() {
      let videoSource = el.getAttribute('src');
      videoSource = videosArray.indexOf(videoSource);
      el.setAttribute("src", videosArray[videoSource+1] || videosArray[0]);    
    };
  }
});
