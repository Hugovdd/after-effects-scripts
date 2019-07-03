/*
HVDD_AddFadeFromCTI

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Animates the opacity (0-100) of selected layers from the cureent time to their respective end.
*/

function addFadeFromCTI() {
  app.beginUndoGroup("HVDD_AddFadeToCTI");
  var thisComp = app.project.activeItem; //Current compositon
  var selLayers = thisComp.selectedLayers; //Selected layers

  for (i = 0; i < selLayers.length; i++) {
    // Loop through selected Layer
    selLayers[i].opacity.setValueAtTime(selLayers[i].outPoint, 0);
    selLayers[i].opacity.setValueAtTime(thisComp.time, 100);
  }
  app.endUndoGroup();
}

addFadeFromCTI();
