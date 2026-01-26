/*
HVDD_Reverse layer order

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Reverses layer order of selected layers
*/

function reverseLayerOrder() {
    var comp = app.project.activeItem; //Current compositon
    if (!(comp && comp instanceof CompItem)) { //Check for active comp
        alert("Please select a composition!");
        return;
    }
    var selLayers = comp.selectedLayers; //Selected layers
    if (selLayers.length < 1) { //Check for selected layers
        alert("Select at least two layers");
        return;
    }
    app.beginUndoGroup("Stagger Layers");
    
    for (i = selLayers.length - 2; i >= 0; i--) { //Count down the layers
        currentLayer = selLayers[i]; 
        nextLayer = selLayers[i+1];
        currentLayer.moveAfter(nextLayer);
    }
    app.endUndoGroup();
}
reverseLayerOrder();