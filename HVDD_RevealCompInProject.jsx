/*
HVDD_RevealCompInProject

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Reveals selected comp in project panel
*/

function revealCompInProject() {
  app.beginUndoGroup("HVDD_revealCompInProject");
  var comp = app.project.activeItem;
  app.executeCommand(2517);
  app.endUndoGroup();
}

revealCompInProject();
