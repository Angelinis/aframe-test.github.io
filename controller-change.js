const sceneElement   = document.querySelector('a-scene');
const selections = document.querySelectorAll(".selections")

function onLoad() {
  console.log(selections);
    sceneElement.addEventListener('xbuttondown', () => {
      // sceneElement.setAttribute('ar-hit-test', `target:#${myobject};type:footprint;footprintDepth:0.2;`);
      sceneElement.setAttribute('ar-hit-test', `target:#myobject3;type:footprint;footprintDepth:0.2;`);
    });
  };

  onLoad();