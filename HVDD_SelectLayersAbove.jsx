/*
HVDD_SelectLayersAbove

Copyright (c) 2018 Hugo van den Doel. All rights reserved.
http://hugovdd.com

Description:
Selects all layers above the selected layer in the After Effects Timeline.
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
