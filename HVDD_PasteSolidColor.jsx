/*
HVDD_PasteSolidColor

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Changes the colour of the selected solid to the copied hex colour.
*/

function PasteSolidColor() {
    app.beginUndoGroup("HVDD_PasteSolidColor");
    var thisComp = app.project.activeItem; // Current Comp
    var selLayers = thisComp.selectedLayers; // Selected layers array
    
    function isSolid(layer){
        
    }

    for (l = 0; l < selLayers.length; l++){
        alert(selLayers[l].index);
    }
    
    app.endUndoGroup();
}

PasteSolidColor();