function DynamicColourPicker(startValue){
    // find the active comp
    var crntComp = app.project.activeItem;
    if (!crntComp || !(crntComp instanceof CompItem)) {
      alert("Please open a comp first");
      return [];
    }
  
    // add a temp null;
    var newNull = crntComp.layers.addNull();
    var newColorControl = newNull("ADBE Effect Parade").addProperty("ADBE Color Control");
    var theColorProp = newColorControl("ADBE Color Control-0001");
  
    // set the value given by the function arguments
    if (startValue && startValue.length == 3) {
      theColorProp.setValue(startValue);
    }
  
    // prepare to execute
    var editValueID = 2240 // or app.findMenuCommandId("Edit Value...");
    theColorProp.selected = true;
    app.executeCommand(editValueID);
  
    // harvest the result
    var result = theColorProp.value;
  
    // remove the null
    if (newNull) {
      newNull.remove();
    }
  
    return result;
}
  
  // launch the true color picker with a white color
  alert(DynamicColourPicker([1,1,1]));