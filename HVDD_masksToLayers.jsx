function masksToLayers() {
    var comp = app.project.activeItem;
    var masksLayer = comp.selectedLayers[0];

    app.beginUndoGroup("HVDD_masksToLayers"); // Begin undo group
    
    function duplicateLayerForEachMask(layer) {
        var maskParade = layer.property('ADBE Mask Parade');
        var maskNames = []; // Store mask names
        
        // First, collect all mask names
        for (var m = 1; m <= maskParade.numProperties; m++) {
            maskNames.push(maskParade.property(m).name);
        }
        
        // Now duplicate for each mask
        for (var i = 0; i < maskNames.length; i++) {
            var newLayer = layer.duplicate();
            newLayer.name = newLayer.name + ' - ' + maskNames[i];
            var newLayerMaskGroup = newLayer.property('ADBE Mask Parade');
            
            // Keep only the mask with the current name
            for (var k = newLayerMaskGroup.numProperties; k > 0; k--) {
                var newLayerCurrentMask = newLayerMaskGroup.property(k);
                if (newLayerCurrentMask.name === maskNames[i]) {
                    newLayerCurrentMask.maskMode = MaskMode.ADD;
                } else {
                    newLayerCurrentMask.remove();
                }
            }
        }
        
        layer.enabled = false;
    }
    
    duplicateLayerForEachMask(masksLayer);

    app.endUndoGroup();
}

masksToLayers();