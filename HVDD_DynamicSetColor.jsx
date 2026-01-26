/*
HVDD_AlignLayersToCTI

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Changes colour value of layer attribute based on the type of layer. For example solid color for a solid layer, fill color for a shape layer, text fill color for a text layer...
*/


function dynamicSetColor() {
    
    var comp = app.project.activeItem;

    if (!(comp && comp instanceof CompItem)) { //Check for active comp
    alert("Please select a composition!");
    return;
    }

    var selLayers = comp.selectedLayers;

    if (selLayers.length < 1) { //Check for layer selected
    alert("Select a layer.");
    return;
    }

    function hexToRGB(hex){ //convert colour values
    hex = parseInt(hex,16);
    var r = hex >> 16;
    var g = (hex & 0x00ff00) >> 8;
    var b = hex & 0xff;
    return [r/255,g/255,b/255];
    };

    function setShapeLayerFill(layer, RGBvalue){
        var targetMatchName = "ADBE Vector Fill Color";
    
        setPropertyValue(layer, targetMatchName, RGBvalue);

        function setPropertyValue(currentLayer, targetMatchName, value) {
            for (var i = 1, il = currentLayer.numProperties; i <= il; i++) {
                if (currentLayer.property(i).matchName === targetMatchName)
                    // alert(currentLayer.property(i).value);
                    currentLayer.property(i).setValue(value);
    
                setPropertyValue(currentLayer.property(i), targetMatchName, value);
            }
        }

    }
    function addFillEffect(layer,RGBvalue){
        for (l = 1; l <= layer.Effects.numProperties; l++) {
            if (layer.Effects.property(l).matchName == "ADBE Fill") return true;
       }
    }


    app.beginUndoGroup("HVDD_DynamicSetColor");

    function changeLayerColor(layer, color){
        var color = hexToRGB('F0B90B');

    if (layer instanceof ShapeLayer) { // Set the color of the shape layer.
        setShapeLayerFill(layer, color)
    } else if (layer instanceof AVLayer) { // If AV layer add fill effect
        var prop = layer.property("ADBE Effect Parade");
        var fillEffect = prop.addProperty("ADBE Fill");
        fillEffect.property("ADBE Fill-0002").setValue(color);
    } else if (layer instanceof TextLayer) {
            // Set the text color of the text layer.
            var textProp = layer.property("Source Text");
            var textDocument = textProp.value;
            textDocument.fillColor = color;
            textProp.setValue(textDocument);
    } else {
        alert('Not able to recognise type of layer');
    }
    }


    for (var i = 0; i < selLayers.length; i++) {
        changeLayerColor(selLayers[i], 'F0B90B');
    }

    app.endUndoGroup();
}
  
dynamicSetColor();
  