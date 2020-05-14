function nextScene() {
    var scene1 = document.getElementById('scene1');
    var scene2 = document.getElementById('scene2');
    var scene3 = document.getElementById('scene3');
  //  var scene4 = document.getElementById('scene4');
   // var scene5 = document.getElementById('scene5');
   //  var scene6 = document.getElementById('scene6');


    if (scene1.getAttribute('visible')) {
        reset();
        scene2.setAttribute('visible', 'true');
    }
    else if (scene2.getAttribute('visible')) {
        reset();
        scene3.setAttribute('visible', 'true');
    }
    /*    else if (scene3.getAttribute('visible')){
            reset();
            scene4.setAttribute('visible', 'true');
        }
        else if (scene4.getAttribute('visible')){
            reset();
            scene5.setAttribute('visible', 'true');
        }
        else if (scene5.getAttribute('visible')){
            reset();
            scene6.setAttribute('visible', 'true');
        }*/
    else {
        reset();
        scene1.setAttribute('visible', 'true');
    }

    function reset() {
        scene1.setAttribute('visible', 'false');
        scene2.setAttribute('visible', 'false');
        scene3.setAttribute('visible', 'false');
      //  scene4.setAttribute('visible', 'false');
     //   scene5.setAttribute('visible', 'false');
      //  scene6.setAttribute('visible', 'false');
    }
}
