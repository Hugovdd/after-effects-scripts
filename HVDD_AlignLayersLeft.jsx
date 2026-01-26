/*
HVDD_AlignLayersToCTI

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Adds all layers below the current one to your selected layers.
*/


function alignLayersLeft() {
    
  
  var comp = app.project.activeItem;

  if (!(comp && comp instanceof CompItem)) { //Check for active comp
    alert("Please select a composition!");
    return;
  }
 
  var selLayers = comp.selectedLayers;
 
  if (selLayers.length < 2) {
    alert("Select at least 2 layers!");
    return;
  }

  app.beginUndoGroup("HVDD_AlignLayersLeft");

  var earliestinPoint = selLayers[0].inPoint;
  var time = comp.time;
  var difference = 0;

  for (var i = 0; i < selLayers.length; i++) { //Find earliest in point. Using startTime instead makes this very confusing for some layers.
      var currentLayer = selLayers[i];
      if (currentLayer.inPoint < earliestinPoint) {
      earliestinPoint = currentLayer.inPoint;
      }
  }
  

  difference = earliestinPoint - time;
  // alert(difference);

  for (var i = 0; i < selLayers.length; i++) { //Shift layer's startTime by difference
    selLayers[i].startTime -= difference;
  }

  app.endUndoGroup();
}
  
alignLayersLeft();
  