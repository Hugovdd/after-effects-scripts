/*
HVDD_extendCompByOneSecond

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Staggers selected layers in time by x. Change within for loop.
*/


function extendCompDuration() {
  // Get the current active composition
  var comp = app.project.activeItem;

  // Check if a composition is active
  if (comp != null && comp instanceof CompItem) {
    // Calculate the new duration in seconds
    var newDuration = comp.duration + 1;
    
    // Set the new duration
    comp.duration = newDuration;
    
    // Update the work area end time to match the new duration
    comp.workAreaDuration = newDuration;
  }

}

extendCompDuration();

