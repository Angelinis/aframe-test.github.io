let score = 0



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
    if (intersectedObject){
      const objectId = intersectedObject.el.getAttribute('id');
      interactable = document.querySelector(`#${objectId}`);
      document.querySelector("[text]").setAttribute("value", `${++score} dinosaurios cazados`);
      interactable.parentNode.removeChild(interactable);

    }
  }
});