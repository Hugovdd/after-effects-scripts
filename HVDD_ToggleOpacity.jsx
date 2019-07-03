/*
HVDD_ToggleOpacity

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Toggles opacity of selected layers. By dedault, if the layer's opacity is less or equals to 50, it'll set it to 100. and vice versa.
*/

// function toggleOpacity() {
//     app.beginUndoGroup("Change Opacity");
//     var thisComp = app.project.activeItem; //Current compositon
//     var selLayers = thisComp.selectedLayers; //Selected layers

//     function setOpacity(layer, opacity) {
//         layer.transform.opacity.setValue(opacity);
//     }

//     for (i = 0; i < selLayers.length; i++) {
//         if (selLayers[i].transform.opacity.value <= 50) {
//             setOpacity(selLayers[i], 100);
//         } else {
//             setOpacity(selLayers[i], 50);
//         }
//     }
//     app.endUndoGroup();
// }

function toggleOpacityEffect() {
    app.beginUndoGroup("Change Opacity");
    var thisComp = app.project.activeItem; //Current compositon
    var selLayers = thisComp.selectedLayers; //Selected layers

    function setOpacityEffect(layer, opacity) { //adds a transform effect to layer and changes its opacity value to opacity
        layer.Effects.addProperty("ADBE Geometry2").name = "HVDD_ToggleOpacity";
        layer.Effects.property("HVDD_ToggleOpacity").property("ADBE Geometry2-0008").setValue(opacity);
    }


    function hasTransformEffect(layer) {
        for (l = 1; l <= layer.Effects.numProperties; l++) {
             if (layer.Effects.property(l).name == "HVDD_ToggleOpacity") return true;
        }
        return false;
    }

    // function hasAnyEffect(layer){
    //     if (layer.Effects.numProperties != 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // function hasOurEffect(layer){
    //     if (hasAnyEffect(layer) == true){
    //         hasTransformEffect(layer);
    //     } else {
    //         return false;
    //     }
    // }
    // alert (hasTransformEffect(selLayers[0]));
    // alert(hasOurEffect(selLayers[0]));
    // alert(selLayers[0].Effects.numProperties);
    // alert(selLayers[0].Effects.property(1).name);

    function removeTransformEffect(layer){ //works
        layer.Effects.property("HVDD_ToggleOpacity").remove();
    }
    // selLayers[0].Effects.property("HVDD_ToggleOpacity").remove();
    
    // if (hasTransformEffect(selLayers[0])){
    //     removeTransformEffect(selLayers[0]);
    // } else {
    //     setOpacityEffect(selLayers[0], 50);
    // }

    
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