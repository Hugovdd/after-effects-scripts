/*
HVDD_SetOpacity50

Copyright (c) 2018 Hugo van den Doel. All rights reserved.
http://hugovdd.com

Description:
Set's the opacity of selected layers to 50.
*/

function SetOpacity50() {
    app.beginUndoGroup("HVDD_SetOpacity50");
    var selLayers = thisComp.selectedLayers
    for (l = 1; selLayers)


        app.endUndoGroup();
}

app.project.activeItem.selectedLayers[].opacity = 50;