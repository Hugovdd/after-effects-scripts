function cloneKeys(){
    function getKeyAttributes(theProperty, keyIndex) {
        //in lieu of a proper keyframe object this returns all the details of a keyframe, given a property and key index.
        var theAttributes = {};
        theAttributes.keyTime = theProperty.keyTime(keyIndex);
        theAttributes.keyVal = theProperty.keyValue(keyIndex);
        theAttributes.canInterp =
            theProperty.isInterpolationTypeValid(
                KeyframeInterpolationType.BEZIER
            ) ||
            theProperty.isInterpolationTypeValid(KeyframeInterpolationType.HOLD) ||
            theProperty.isInterpolationTypeValid(KeyframeInterpolationType.LINEAR);
        if (theAttributes.canInterp) {
            theAttributes.keyInInterpolationType =
                theProperty.keyInInterpolationType(keyIndex);
            theAttributes.keyOutInterpolationType =
                theProperty.keyOutInterpolationType(keyIndex);
            if (theAttributes.keyInInterpolationType) {
                theAttributes.keyInTemporalEase =
                    theProperty.keyInTemporalEase(keyIndex);
                theAttributes.keyOutTemporalEase =
                    theProperty.keyOutTemporalEase(keyIndex);
            }
        }
        //ignore spatial tangents for things like masks
        theAttributes.isSpatial =
            theProperty.isSpatial &&
            (theProperty.propertyValueType == PropertyValueType.ThreeD_SPATIAL ||
                theProperty.propertyValueType == PropertyValueType.TwoD_SPATIAL);
    
        if (theAttributes.isSpatial) {
            theAttributes.keyInSpatialTangent =
                theProperty.keyInSpatialTangent(keyIndex);
            theAttributes.keyOutSpatialTangent =
                theProperty.keyOutSpatialTangent(keyIndex);
        }
        return theAttributes;
    }
    function getSelectedKeys(thecomp) {
        //the object this function will return: an array of keys and the first and last key's time
        var theKeys = {
            keys: [],
            firstSelectedKeyTime: null,
            lastSelectedKeyTime: null,
        };
        var theComp = app.project.activeItem;
        var selLayers = theComp.selectedLayers;
    
        //drill down to get to the keys:
        for (var i = 0; i < selLayers.length; i++) { //loop through selected layers
            var selectedProps = selLayers[i].selectedProperties;
            
            for (var j = 0; j < selectedProps.length; j++) {  //loop through selected props 
                if (selectedProps[j] instanceof Property){ 
                    var selectedKeyframes = selectedProps[j].selectedKeys;
                    for (var k = 0; k < selectedKeyframes.length; k++) {
                        //get the attributes of the selected key - note that the key list is 1-indexed WTF adobe?
                        var theAttributes = getKeyAttributes(
                            selectedProps[j],
                            selectedKeyframes[k]
                        );
                        if (
                            theKeys.firstSelectedKeyTime === null ||
                            theAttributes.keyTime < theKeys.firstSelectedKeyTime
                        ) {
                            theKeys.firstSelectedKeyTime = theAttributes.keyTime;
                        }
                        if (
                            theKeys.lastSelectedKeyTime === null ||
                            theAttributes.keyTime > theKeys.lastSelectedKeyTime
                        ) {
                            theKeys.lastSelectedKeyTime = theAttributes.keyTime;
                        }
                        //add a new object to the array of keys:
                        theKeys.keys.push({
                            layerIndex: selLayers[i].index,
                            prop: selectedProps[j],
                            attributes: theAttributes,
                        });
                    }
                }
            }
        }
        return theKeys;
    }
    function makeKeyAtTime(theProperty, keyAttributes, keyTime) {
        theProperty.setValueAtTime(keyTime, keyAttributes.keyVal);
    }
    function setKeyAttributesReversed(theProperty, keyAttributes, keyTime) {
        var newKeyIndex = theProperty.nearestKeyIndex(keyTime); //I wish Adobe would just make a keyframe class
        if (keyAttributes.canInterp) {
            theProperty.setTemporalEaseAtKey(
                newKeyIndex,
                keyAttributes.keyOutTemporalEase,
                keyAttributes.keyInTemporalEase
            );
            //important to do this after setting the temporal ease, or it turns all keyframes into bezier interpolation
            theProperty.setInterpolationTypeAtKey(
                newKeyIndex,
                keyAttributes.keyOutInterpolationType,
                keyAttributes.keyInInterpolationType
            );
        }
    
        if (keyAttributes.isSpatial) {
            theProperty.setSpatialTangentsAtKey(
                newKeyIndex,
                keyAttributes.keyOutSpatialTangent,
                keyAttributes.keyInSpatialTangent
            );
        }
        return newKeyIndex;
    }
    app.beginUndoGroup("Clone keyframes");
    if (app.project.activeItem instanceof CompItem) { // Check if a composition is open
        var comp = app.project.activeItem;
        if (comp && comp.selectedProperties.length > 0) {// Check if properties are selected
            theKeys = getSelectedKeys(comp); //Get keys and attributes
            for (var k = 0; k < theKeys.keys.length; k++){ //Loop through array of keys
                var prop = theKeys.keys[k].prop; 
                var attributes = theKeys.keys[k].attributes;
                var keyTime = theKeys.keys[k].attributes.keyTime;
                var newKeytime = keyTime + comp.time - theKeys.firstSelectedKeyTime; // Offset keyTime by CTI
                makeKeyAtTime(prop, attributes, newKeytime);
                setKeyAttributesReversed(prop, attributes, newKeytime);
            }
            
        } else {
            alert("Please select at least one keyframe.");
        }
    } else {
        alert("Please open a composition.");
    }
    app.endUndoGroup()
};
cloneKeys();