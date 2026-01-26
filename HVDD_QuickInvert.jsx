/*
HVDD_QuickInvert

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Toggles transparency and invert effect on selected layers
*/

function QuickInvert() {
    app.beginUndoGroup("Toggle Quick Invert");
    var comp = app.project.activeItem; //Current compositon
    

    if (!(comp && comp instanceof CompItem)) { //Check for active comp
        alert("Please select a composition!");
        return;
    }
    var selLayers = comp.selectedLayers; //Selected layers
     
    if (selLayers.length < 1) {
    alert("Select a layer.");
    return;
    }

    function addEffects(layer, opacity) { //adds a transform effect to layer and changes its opacity value to opacity
        layer.Effects.addProperty("ADBE Geometry2").name = "QuickInvert - Opacity";
        layer.Effects.property("QuickInvert - Opacity").property("ADBE Geometry2-0008").setValue(opacity);
        layer.Effects.addProperty("ADBE Invert").name = "QuickInvert - Invert";
        layer.guideLayer = true;
    }


    function hasTransformEffect(layer) {
        for (l = 1; l <= layer.Effects.numProperties; l++) {
             if (layer.Effects.property(l).name == "QuickInvert - Opacity") return true;
        }
        return false;
    }

    function removeEffects(layer){ 
        layer.Effects.property("QuickInvert - Opacity").remove();
        layer.Effects.property("QuickInvert - Invert").remove();
        layer.guideLayer = false;
    }
    
    for (i = 0; i < selLayers.length; i++) { //Loops through selected layers
        if (hasTransformEffect(selLayers[i]) == true) {
            removeEffects(selLayers[i]);
        } else {
            addEffects(selLayers[i],50);
        }
    }
    app.endUndoGroup();
}

QuickInvert();