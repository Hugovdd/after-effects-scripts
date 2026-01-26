/*
HVDD_TrimLayerAtCTI

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Trims layer at current time indicator
*/

function trimLayerAtCTI() {
    app.beginUndoGroup("Trim layer at CTI");
    var thisComp = app.project.activeItem; //Current compositon
    var selLayers = thisComp.selectedLayers; //Selected layers
    var currentTime = thisComp.time;

    function trimLayer(layer, length) { //adds a transform effect to layer and changes its opacity value to opacity
        layer.startTime = currentTime;
        layer.outPoint = currentTime + length;
    }

    for (i = 0; i < selLayers.length; i++) { //Loops through selected layers
        trimLayer(selLayers[i], 3)
    }
    app.endUndoGroup();
}

trimLayerAtCTI();