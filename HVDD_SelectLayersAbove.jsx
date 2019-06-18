/*
HVDD_SelectLayersAbove

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Adds all layers above the current one to your selected layers.
*/
function SelectLayersAbove() {
  app.beginUndoGroup("HVDD_SelectLayersAbove");
  var comp = app.project.activeItem; // Current Comp
  var selLayer = comp.selectedLayers[0];

  for (l = 1; l <= selLayer.index; l++) {
    comp.layer(l).selected = true;
  }
  app.endUndoGroup();
}

SelectLayersAbove();
