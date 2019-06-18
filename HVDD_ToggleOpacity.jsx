/*
HVDD_ToggleOpacity

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Toggles opacity of selected layers. By dedault, if the layer's opacity is less or equals to 50, it'll set it to 100. and vice versa.
*/



function toggleOpacity() {
    app.beginUndoGroup("Change Opacity");
    var thisComp = app.project.activeItem; //Current compositon
    var selLayers = thisComp.selectedLayers; //Selected layers

    function setOpacity(layer, opacity) { //Set opacity
        layer.transform.opacity.setValue(opacity);
    }


    for (i = 0; i < selLayers.length; i++) {
        if (selLayers[i].transform.opacity.value <= 50) {
            setOpacity(selLayers[i], 100);
        } else {
            setOpacity(selLayers[i], 50);
        }
    }
    app.endUndoGroup();
}



toggleOpacity();