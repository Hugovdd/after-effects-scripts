
/*
HVDD_ApplyFreeGradient
Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Adds freeGradient effect to selected layers.
*/


function applyFreeGradient() {
    
    var comp = app.project.activeItem; //Current compositon
    
    if (!(comp && comp instanceof CompItem)) { //Check for active comp
        alert("Please select a composition!");
        return;
    }
    var selLayers = comp.selectedLayers; //Selected layers
     
    if (selLayers.length < 1) {
    alert("Select a layer.");
    return;
    }

    function addFreeGradientEffect(layer){
        alert(layer.property("ADBE Effect Parade").property(1).property("irrealix freeGradient-0002").GetColor(1))
        // if (layer.property("ADBE Effect Parade").canAddProperty("irrealix freeGradient")) {
		// 	layer.property("ADBE Effect Parade").addProperty("irrealix freeGradient");
		// } else {
		// 	return alert("Cannot apply \"freeGradient\" (irrealix freeGradient) effect to layer \"" + layer.name + "\" because you don't have this effect installed on your system.");
		// }
		// layer.property("ADBE Effect Parade").property(1).name = "freeGradient";
		// layer.property("ADBE Effect Parade").property(1).property("irrealix freeGradient-0022").setValue(15);
		// layer.property("ADBE Effect Parade").property(1).property("irrealix freeGradient-0011").setValue([540,6]);
		// layer.property("ADBE Effect Parade").property(1).property("irrealix freeGradient-0012").setValue([556,1084]);
		// layer.selected = false;
    }

    app.beginUndoGroup("HVDD_ApplyFreeGradient");
  
    for (i = 0; i < selLayers.length; i++) { //Loops through selected layers
        addFreeGradientEffect(selLayers[i]);
    }
  }
	
  applyFreeGradient();