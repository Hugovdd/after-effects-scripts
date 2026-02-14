/*
    Dynamic Showcase Grid Packer
    - Adds selected Comps to a "Master Showcase" Comp
    - Scales layers to 50%
    - Fixed Width (1920px), Dynamic Height (Grows to fit)
    - Distributes in a space-saving flow layout with 5px margin
    - Saves the new comp in the same project folder as the first selected comp
    - Sets Master Comp background to grey
*/

(function createDynamicShowcase() {
    app.beginUndoGroup("Create Dynamic Showcase");

    try {
        // --- CONFIGURATION ---
        var scaleFactor = 50;   // Scale percentage
        var margin = 5;         // Pixel margin
        var maxWrapWidth = 1920;  // The maximum width threshold before wrapping to a new row
        // ---------------------

        var selection = app.project.selection;
        var selectedComps = [];

        // 1. Filter selection for Compositions only
        for (var i = 0; i < selection.length; i++) {
            if (selection[i] instanceof CompItem) {
                selectedComps.push(selection[i]);
            }
        }

        if (selectedComps.length === 0) {
            alert("Please select at least one Composition in the Project Panel.");
            return;
        }

        // 2. Capture the parent folder of the very first selected comp 
        // We do this before sorting so it accurately reflects the user's initial selection
        var targetFolder = selectedComps[0].parentFolder;

        // 3. Sort by Height (Descending) for tighter packing
        selectedComps.sort(function(a, b) {
            return b.height - a.height;
        });

        // 4. Find the maximum duration among selected comps
        var maxDuration = 0;
        for (var k = 0; k < selectedComps.length; k++) {
            if (selectedComps[k].duration > maxDuration) {
                maxDuration = selectedComps[k].duration;
            }
        }

        // 5. Create Master Comp with a temporary height
        var masterComp = app.project.items.addComp(
            "Master Showcase", 
            maxWrapWidth, // Temp width, will be trimmed at the end
            500, // Temp height, will be overwritten at the end
            1, 
            maxDuration, 
            selectedComps[0].frameRate
        );
        
        // Set background color to 50% grey (RGB values between 0.0 and 1.0)
        masterComp.bgColor = [0.5, 0.5, 0.5];
        
        // Move the new comp to the target folder
        masterComp.parentFolder = targetFolder;
        
        masterComp.openInViewer();

        // 6. Layout Logic
        var currentX = margin;
        var currentY = margin;
        var rowHeight = 0; 
        var maxUsedWidth = 0; // Tracks the actual widest row

        for (var j = 0; j < selectedComps.length; j++) {
            var compItem = selectedComps[j];
            
            // Calculate actual physical dimensions on screen after scaling
            var actualW = compItem.width * (scaleFactor / 100);
            var actualH = compItem.height * (scaleFactor / 100);

            // Check if adding this item exceeds the wrap threshold (Wrap to next row)
            // We ensure currentX > margin so a layer wider than the threshold still gets placed
            if (currentX + actualW > maxWrapWidth - margin && currentX > margin) {
                currentX = margin; 
                currentY += rowHeight + margin; 
                rowHeight = 0; 
            }

            // Add the layer to the timeline
            var layer = masterComp.layers.add(compItem);
            
            // Apply Scale
            layer.transform.scale.setValue([scaleFactor, scaleFactor]);

            // Position Layer (Anchor Point is at the center by default)
            var posX = currentX + (actualW / 2);
            var posY = currentY + (actualH / 2);
            layer.transform.position.setValue([posX, posY]);

            // Advance X position for the next layer
            currentX += actualW + margin;

            // Track the maximum width used by any row to hug the content later
            if (currentX > maxUsedWidth) {
                maxUsedWidth = currentX;
            }

            // Track the tallest item in the current row
            if (actualH > rowHeight) {
                rowHeight = actualH;
            }
        }

        // 7. Final Resize
        // Total height is the Y position of the final row + its tallest item + the bottom margin
        var finalHeight = currentY + rowHeight + margin;
        
        // Resize both width and height to strictly hug the contents
        masterComp.width = Math.ceil(maxUsedWidth);
        masterComp.height = Math.ceil(finalHeight);

    } catch (error) {
        alert("An error occurred: " + error.toString());
    } finally {
        app.endUndoGroup();
    }
})();