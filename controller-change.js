const sceneElement = document.querySelector('a-scene');
function onLoad() {
    switchCameraButton.addEventListener('click', () => {
  
      sceneElement.setAttribute('ar-hit-test', `target:#${myobject};type:footprint;footprintDepth:0.2;`);
    });
  
  imageBtnEle.addEventListener("click", function () {
    let index = imagesArray.indexOf(planeElement.getAttribute("src"));
    planeElement.setAttribute('src', imagesArray[index + 1]);
  });
  
  
  }

  onLoad();