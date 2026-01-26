/*
HVDD_StaggerByLayerLength

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Staggers selected layers.
*/


function sequenceLayers() {
    app.beginUndoGroup("Sequence Layers"); // Begin undo group
    var comp = app.project.activeItem; // Get active composition
    if (!(comp && comp instanceof CompItem)) { //Check for active comp
        alert("Please select a composition!");
        return;
    }
    var selLayers = comp.selectedLayers;
    if (selLayers.length < 2) { //Check for layer selected
        alert("Select at least 2 layers.");
        return;
    }
    var prevStart = selLayers[0].startTime;
    var prevIn = selLayers[0].inPoint; 
    var prevOut = selLayers[0].outPoint; 
    var sub; // Initialize variable
    for (var i = 1; i < selLayers.length; i++) { // Loop through selected frames
        sub = selLayers[i].inPoint - selLayers[i].startTime; // Calculate time substraction
        selLayers[i].startTime = prevOut - sub; // Set layer's start time
        prevStart = selLayers[i].startTime; // Set current layer's start time for reference to next
        prevIn = selLayers[i].inPoint; // Set current layer's in point for reference to next
        prevOut = selLayers[i].outPoint; // Set current layer's out point for reference to next
    }
    app.endUndoGroup(); // End undo group
}

sequenceLayers();