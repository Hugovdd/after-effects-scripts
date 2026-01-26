{
    var project = app.project;
    var selectedItems = project.selection;
    var frameNumber = 31;

    if (selectedItems.length > 0) {
        app.beginUndoGroup("Add Frame 31 to Render Queue");

        for (var i = 0; i < selectedItems.length; i++) {
            var comp = selectedItems[i];

            if (comp instanceof CompItem) {
                // Create a duplicate of the comp to modify its settings without altering the original
                var sourceCompName = comp.name;
                var duplicateComp = comp.duplicate();
                duplicateComp.name = sourceCompName + "_frame";
                
                // Set work area to frame 31 (assuming 0-based index for frames)
                var frameTime = frameNumber / duplicateComp.frameRate;
                duplicateComp.workAreaStart = frameTime;
                duplicateComp.workAreaDuration = 1 / duplicateComp.frameRate;

                // Add the comp to the render queue
                var rqItem = project.renderQueue.items.add(duplicateComp);
                
                // Set output module to still frame
                var outputModule = rqItem.outputModule(1);
                outputModule.applyTemplate("TIFF Sequence with Alpha");
    
            }
        }

        app.endUndoGroup();
    } else {
        alert("Please select one or more compositions in the Project panel.");
    }
}