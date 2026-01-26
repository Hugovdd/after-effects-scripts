/*
HVDD_QuickNull

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Creates a null at the average position of selected layers. Trims null to layer group in and out point.
*/



(function quickNull() {

 var comp = app.project.activeItem;

 if (!(comp && comp instanceof CompItem)) { //Check for active comp
   alert("Please select a composition!");
   return;
 }

 var selLayers = comp.selectedLayers;

 if (selLayers.length < 1) {
   alert("Select a layer");
   return;
 }

 app.beginUndoGroup("Quick Null");

 var nullLayer = comp.layers.addNull();
 nullLayer.name = "Quick Null";
 nullLayer.guideLayer = true;
 nullLayer.label = 4;
 nullLayer.moveBefore(selLayers[0]);

 var sumX = 0;
 var sumY = 0;

 for (var ii = 0, il = selLayers.length; ii < il; ii++) { //Add up all X and Y position
   var layer = selLayers[ii];
   var layerPos = layer.position.valueAtTime(comp.time, false);
   sumX += layerPos[0];
   sumY += layerPos[1];
 }

 var avgX = sumX / selLayers.length; // average them by layers array length
 var avgY = sumY / selLayers.length;

 nullLayer.position.setValue([avgX, avgY]);


for (ii = 0, il = selLayers.length; ii < il; ii++) { //Assign parent to layers
    selLayers[ii].parent = nullLayer;
}

if (selLayers.length > 0) { // Loop through selected layers to find the earliest in and out points
    var earliestInPoint = selLayers[0].inPoint;
    var latestOutPoint = selLayers[0].outPoint;
    
    for (var i = 1; i < selLayers.length; i++) {
        var currentLayer = selLayers[i];
        if (currentLayer.inPoint < earliestInPoint) {
        earliestInPoint = currentLayer.inPoint;
        }
        if (currentLayer.outPoint > latestOutPoint) {
        latestOutPoint = currentLayer.outPoint;
        }
    }
    nullLayer.inPoint = earliestInPoint;
    nullLayer.outPoint = latestOutPoint;
}


 app.endUndoGroup();

})();