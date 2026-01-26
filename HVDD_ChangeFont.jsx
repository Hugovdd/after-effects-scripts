/*
HVDD_ChangeFont
Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Changes fonts of all selected text layers.
*/

function changeFont() {


    app.beginUndoGroup("Change Font IBMPlex Arabic");
    var thisComp = app.project.activeItem; //Current compositon
    var selLayers = thisComp.selectedLayers; //Selected layers

    function changeFont(layer) { //Can't change value directly for Source Text attributes, use setValue()
        var textProp = layer.property("Source Text");
        var textDocument = textProp.value;
        textDocument.font = "IBMPlexSans-SmBld";
        textProp.setValue(textDocument);
    }

    for (i = 0; i < selLayers.length; i++) { //Loops through selected layers
        changeFont(selLayers[i]);
    }
    app.endUndoGroup();
}

changeFont();