/*
HVDD_SetOpacity50

Copyright (c) 2018 Hugo van den Doel. All rights reserved.
http://hugovdd.com

Description:
Set's the opacity of selected layers to 50.
*/

function SetOpacity50() {
    app.beginUndoGroup("SetOpacity50");
    // var altDown = ScriptUI.enviroment.keyboardState.altKey;
    var thisComp = app.project.activeItem;
    var selLayers = thisComp.selectedLayers;
    for (i = 0; i < selLayers.length; i++) {
        selLayers[i].transform.opacity.setValue(50);
    }
    app.endUndoGroup();
}


function SetOpacity100() {
    app.beginUndoGroup("SetOpacity100");
    // var altDown = ScriptUI.enviroment.keyboardState.altKey;
    var thisComp = app.project.activeItem;
    var selLayers = thisComp.selectedLayers;
    for (i = 0; i < selLayers.length; i++) {
        selLayers[i].transform.opacity.setValue(100);
    }
    app.endUndoGroup();
}


SetOpacity50();