/*
HVDD_SelectLayersBelow

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Adds all layers below the current one to your selected layers.
*/
function SelectLayersBelow() {
  app.beginUndoGroup("HVDD_SelectLayersBelow");
  var thisComp = app.project.activeItem; // Current Comp
  var selLayer = thisComp.selectedLayers[0];

  for (l = selLayer.index; l <= thisComp.layers.length; l++) {
    thisComp.layer(l).selected = true;
  }
  app.endUndoGroup();
}

SelectLayersBelow();
