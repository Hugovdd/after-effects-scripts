/*
HVDD_ToggleTextAlignment.jsx

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Toggle swap text alignment Left/Right while compensating for position.
*/

{
    // Make sure there's a project and a composition open
    var comp = app.project.activeItem;
    
    if (comp instanceof CompItem && comp.selectedLayers.length > 0) {
        app.beginUndoGroup("Swap Paragraph Align and Move");

        // Loop through all selected layers
        for (var i = 0; i < comp.selectedLayers.length; i++) {
            var layer = comp.selectedLayers[i];

            // Check if the layer is a text layer
            if (layer.property("Source Text") != null) {
                var textProp = layer.property("Source Text");
                var textDocument = textProp.value;

                // Get the current alignment
                var currentAlign = textDocument.justification;

                // Get the layer's width using sourceRectAtTime
                var textWidth = layer.sourceRectAtTime(comp.time, false).width;

                // Swap the alignment and adjust the position accordingly
                var layerPosition = layer.property("Position").value;
                var newPosition = layerPosition.slice(); // Clone array to avoid reference issues

                if (currentAlign == ParagraphJustification.LEFT_JUSTIFY) {
                    textDocument.justification = ParagraphJustification.RIGHT_JUSTIFY;
                    newPosition[0] += textWidth;  // Move left by text width
                } else if (currentAlign == ParagraphJustification.RIGHT_JUSTIFY) {
                    textDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
                    newPosition[0] -= textWidth;  // Move right by text width
                } 

                // Set the updated textDocument back to the layer
                textProp.setValue(textDocument);

                // Update the position of the layer
                layer.property("Position").setValue(newPosition);
            }
        }

        app.endUndoGroup();
    } else {
        alert("Please select at least one text layer in the active composition.");
    }
}