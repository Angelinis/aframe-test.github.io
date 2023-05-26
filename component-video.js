/* global AFRAME */
AFRAME.registerComponent('play-on-click', {
   init: function () {
     this.onClick = this.onClick.bind(this);
     this.onKeyPress = this.onKeyPress.bind(this);
   },
   play: function () {
     window.addEventListener('click', this.onClick);
     window.addEventListener('keypress', this.onKeyPress);
   },
   onClick: function (evt) {
     var videoEl = this.el.getAttribute('material').src;
     if (!videoEl) { return; }
     this.el.object3D.visible = true;
     videoEl.play();
   },
   onKeyPress: function (evt) {
      if (evt.key === 'o') {  // Adjust the key as needed ('p' for pause)
         this.el.setAttribute("src", "#video03")
       };
       var videoEl = this.el.getAttribute('material').src;
      if (!videoEl) { return; }
      if (evt.key === 'p') {  // Adjust the key as needed ('p' for pause)
        videoEl.pause();
      }
   }
 });