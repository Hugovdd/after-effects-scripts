/*
HVDD_StaggerLayersByX

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Staggers selected layers in time by x. Change within for loop.
*/


function staggerLayers() {
    app.beginUndoGroup("Stagger Layers");
    var thisComp = app.project.activeItem; //Current compositon
    var selLayers = thisComp.selectedLayers; //Selected layers
    var x = 0;
    for (i = 1; i < selLayers.length; i++) {
        x += 1; // Amount of frames to stagger by
        selLayers[i].startTime += x * thisComp.frameDuration;
    }

    app.endUndoGroup();
}

staggerLayers();