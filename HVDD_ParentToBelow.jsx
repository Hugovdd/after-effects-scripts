/*
HVDD_ParentToBelow

Author: Hugo van den Doel
Website: http://hugovdd.com

Description: Parents selected layer(s) to layer below
*/

function parentToBelow() {
    app.beginUndoGroup("Parent to below");
    var thisComp = app.project.activeItem; 
    var selLayers = thisComp.selectedLayers;
    var layerBelowIndex = selLayers.sort((a,b) => a - b);


    alert(layerBelowIndex);
    
    //Parents layers
    // for (i = 1; i < selLayers.length; i++) {
    //     selLayers[i].parent = thisComp.layer(selLayers[0].index);
    // }
    
    
    
    
    // var lastLayer = selLayers[selLayers.length - 1]; 
    // var layerBelowIndex = selLayers.sort((a, b) => { return a.index - b.index };


    // alert (layerBelowIndex);
    
    // // Finds the index of the layer below. Regardless of wich direction the layers are selected
    // if (selLayers[0].index < lastLayer.index){
    //     layerBelowIndex = lastLayer.index + 1;
    // } else {
    //     layerBelowIndex = selLayers[0].index + 1;
    // }

    // //Parents layers
    // for (i = 0; i < selLayers.length; i++) {
    //     selLayers[i].parent = thisComp.layer(layerBelowIndex);
    // }

    app.endUndoGroup();
}

parentToBelow();