/*
HVDD_AddLinearWipe
Author: Hugo van den Doel @ Binance
Website: http://hugovdd.com
Description: Adds a linear wipe transition to selected layer(s) and animates it.
*/

function addLinearWipe() {
  app.beginUndoGroup("Add Linear Wipe");
  var thisComp = app.project.activeItem; //Current compositon
  var selLayers = thisComp.selectedLayers; //Selected layers

  function applyEffect(layer){
      layer.property("ADBE Effect Parade").addProperty("ADBE Linear Wipe");
      layer.property("ADBE Effect Parade").property(1).name = "Binance Linear Wipe";
      var layerTransitionCompletion = layer.property("ADBE Effect Parade").property(1).property("ADBE Linear Wipe-0001");
			var layerTransitionCompletion_keyTimesArray = [thisComp.time,thisComp.time + 0.80000834167501];
			var layerTransitionCompletion_valuesArray = [100,0];
			layerTransitionCompletion.setValuesAtTimes(layerTransitionCompletion_keyTimesArray, layerTransitionCompletion_valuesArray);
			var layerTransitionCompletion_easeInSpeedArray = [0,0];
			var layerTransitionCompletion_easeInInfluArray = [90,90];
			var layerTransitionCompletion_easeOutSpeedArray = [0,0];
			var layerTransitionCompletion_easeOutInfluArray = [62,16.666666667];
			var layerTransitionCompletion_keyInInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			var layerTransitionCompletion_keyOutInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			applyEasing(layerTransitionCompletion, layerTransitionCompletion_keyTimesArray, [layerTransitionCompletion_easeInSpeedArray, layerTransitionCompletion_easeInInfluArray], [layerTransitionCompletion_easeOutSpeedArray, layerTransitionCompletion_easeOutInfluArray], [layerTransitionCompletion_keyInInterpolationType, layerTransitionCompletion_keyOutInterpolationType]);

		layer.property("ADBE Effect Parade").property(1).property("ADBE Linear Wipe-0002").setValue(-135);
		layer.selected = false; 
  }
  function applyEasing(property, keyTimesArray, easeInArray, easeOutArray, keyInterpolationArray) {
	var easeIn, easeOut, easeIn0, easeOut0, easeIn1, easeOut1, easeIn2, easeOut2;
	for (var i = 0, il = keyTimesArray.length; i < il; i ++) {
		if (property.propertyValueType === PropertyValueType.TwoD) {
			easeIn0 = new KeyframeEase(easeInArray[0][i][0], easeInArray[1][i][0]);
			easeOut0 = new KeyframeEase(easeOutArray[0][i][0], easeOutArray[1][i][0]);
			easeIn1 = new KeyframeEase(easeInArray[0][i][1], easeInArray[1][i][1]);
			easeOut1 = new KeyframeEase(easeOutArray[0][i][1], easeOutArray[1][i][1]);
			property.setTemporalEaseAtKey(i+1, [easeIn0, easeIn1], [easeOut0, easeOut1]);
		} else if (property.propertyValueType === PropertyValueType.ThreeD) {
			easeIn0 = new KeyframeEase(easeInArray[0][i][0], easeInArray[1][i][0]);
			easeOut0 = new KeyframeEase(easeOutArray[0][i][0], easeOutArray[1][i][0]);
			easeIn1 = new KeyframeEase(easeInArray[0][i][1], easeInArray[1][i][1]);
			easeOut1 = new KeyframeEase(easeOutArray[0][i][1], easeOutArray[1][i][1]);
			easeIn2 = new KeyframeEase(easeInArray[0][i][2], easeInArray[1][i][2]);
			easeOut2 = new KeyframeEase(easeOutArray[0][i][2], easeOutArray[1][i][2]);
			property.setTemporalEaseAtKey(i+1, [easeIn0, easeIn1, easeIn2], [easeOut0, easeOut1, easeOut2]);
		} else {
			easeIn = new KeyframeEase(easeInArray[0][i], easeInArray[1][i]);
			easeOut = new KeyframeEase(easeOutArray[0][i], easeOutArray[1][i]);
			if (keyInterpolationArray[1][i] !== KeyframeInterpolationType.HOLD) {
				property.setTemporalEaseAtKey(i+1, [easeIn], [easeOut]);
			} else {
				property.setTemporalEaseAtKey(i+1, [easeIn]);
			}
		}
		property.setInterpolationTypeAtKey(i+1, keyInterpolationArray[0][i], keyInterpolationArray[1][i]);
	}
}

  for (i = 0; i < selLayers.length; i++) {
    // Loop through selected Layer
    applyEffect(selLayers[i]);
  app.endUndoGroup();
}}

addLinearWipe();
