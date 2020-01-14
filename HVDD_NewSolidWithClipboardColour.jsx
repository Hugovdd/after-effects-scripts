/*
HVDD_NewSolidWithClipboardColour

Author: Hugo van den Doel
Website: http://hugovdd.com

Description: Creates a solid with the colour hex code from your clipboard
Works with or without #. 
Shorthand form (e.g. "03F") will also be parsed to its full form (e.g. "0033FF")
*/


function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

function NewSolidWithClipboardColour() {
    app.beginUndoGroup("Create Solid from Clipboard Colour");
    var thisComp = app.project.activeItem; 
    var hex = system.callSystem("pbpaste");
    var colour = [hexToRgb(hex).r / 255, hexToRgb(hex).g / 255, hexToRgb(hex).b / 255];
    thisComp.layers.addSolid(colour, "Solid with colour", 1920 ,1080,1, 5);

    app.endUndoGroup();
}

NewSolidWithClipboardColour();