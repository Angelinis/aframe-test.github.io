/* global AFRAME */
const videosArray = [
  "#video01",
  "#video02",
  "#video03",
  "#video04"
]

AFRAME.registerComponent('play-on-click', {
   init: function () {
     this.onClick = this.onClick.bind(this);
     this.onOculusPressed = this.onOculusPressed.bind(this);
   },
   play: function () {
     window.addEventListener('click', this.onClick);
     window.addEventListener('keypress', this.onOculusPressed);
   },
   onClick: function (evt) {
     var videoEl = this.el.getAttribute('material').src;
     if (!videoEl) { return; }
     this.el.object3D.visible = true;
     videoEl.play();
   },
   onOculusPressed: function (evt) {
      if (evt === 'xbuttondown') {  
        let videoSource = this.el.getAttribute("src");
        videoSource = videosArray.indexOf(videoSource);
         this.el.setAttribute("src", videosArray[videoSource+1] || videosArray[0]);
       };
       var videoEl = this.el.getAttribute('material').src;
      if (!videoEl) { return; }
      if (evt === 'ybuttondown') {  
        videoEl.pause();
      }
   }
 });