{
    // Open parent composition script
    app.beginUndoGroup("Open Parent Composition");
    
    function openParentComp() {
        var activeComp = app.project.activeItem;
        
        if (!activeComp || !(activeComp instanceof CompItem)) {
            alert("Please select a composition first.");
            return;
        }
        
        // Get all compositions in project
        var comps = [];
        for (var i = 1; i <= app.project.numItems; i++) {
            if (app.project.item(i) instanceof CompItem) {
                comps.push(app.project.item(i));
            }
        }
        
        // Search for parent composition
        var parentComp = null;
        for (var i = 0; i < comps.length; i++) {
            var layers = comps[i].layers;
            for (var j = 1; j <= layers.length; j++) {
                if (layers[j].source === activeComp) {
                    parentComp = comps[i];
                    break;
                }
            }
            if (parentComp) break;
        }
        
        if (parentComp) {
            parentComp.openInViewer();
        } else {
            alert("No parent composition found.");
        }
    }
    
    openParentComp();
    app.endUndoGroup();
}