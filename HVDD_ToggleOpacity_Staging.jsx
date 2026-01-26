/*
HVDD_ToggleOpacity

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Toggles opacity of selected layers. By dedault, if the layer's opacity is less or equals to 50, it'll set it to 100. and vice versa.
*/

function toggleOpacityEffect() {
    app.beginUndoGroup("Change Opacity");
    var thisComp = app.project.activeItem; //Current compositon
    var selLayers = thisComp.selectedLayers; //Selected layers

    function setOpacityEffect(layer, opacity) { //adds a transform effect to layer and changes its opacity value to opacity
        layer.Effects.addProperty("ADBE Geometry2").name = "HVDD_ToggleOpacity";
        layer.Effects.property("HVDD_ToggleOpacity").property("ADBE Geometry2-0008").setValue(opacity);
        layer.Effects.addProperty("ADBE Fill").name = "HVDD_ToggleFill";
    }


    function hasTransformEffect(layer) {
        for (l = 1; l <= layer.Effects.numProperties; l++) {
             if (layer.Effects.property(l).name == "HVDD_ToggleOpacity") return true;
        }
        return false;
    }

    function removeTransformEffect(layer){ //works
        layer.Effects.property("HVDD_ToggleOpacity").remove();
        layer.Effects.property("HVDD_ToggleFill").remove();
    }
    
    for (i = 0; i < selLayers.length; i++) { //Loops through selected layers
        if (hasTransformEffect(selLayers[i]) == true) {
            removeTransformEffect(selLayers[i]);
        } else {
            setOpacityEffect(selLayers[i],50);
        }
    }
    app.endUndoGroup();
}

toggleOpacityEffect();