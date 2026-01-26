/*
HVDD_Set_Ease_In
Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Sets easing for 2 keyframes.
*/
function setKeyEasing(InfluenceIN, InfluenceOUT){
    function setEase( prop, inEase, outEase ) {
        var keySelection = prop.selectedKeys;
        var numKeys = keySelection.length;
    
        for(var i = 0; i < numKeys; i++) {
            prop.setInterpolationTypeAtKey(keySelection[i], KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
    
            if (!prop.isSpatial && prop.value.length == 3) {
                prop.setTemporalEaseAtKey(keySelection[i],[inEase,inEase,inEase],[outEase,outEase,outEase]);
            }
            else if (!prop.isSpatial && prop.value.length == 2) {
                prop.setTemporalEaseAtKey(keySelection[i],[inEase,inEase],[outEase,outEase]);
            }
            else {
                prop.setTemporalEaseAtKey(keySelection[i],[inEase],[outEase]);
            }
        }
    }
    app.beginUndoGroup("Set ease in");
    var comp = app.project.activeItem;
    if (!comp || comp.typeName !== "Composition") return;
    var properties = comp.selectedProperties;
    var numProps = properties.length;
    var ease1 = new KeyframeEase(0,InfluenceIN);
    var ease2 = new KeyframeEase(0,InfluenceOUT);

    for (var i = 0; i < numProps; i++){
        if (properties[i] instanceof Property) setEase(properties[i], ease1, ease2 );
    };
    app.endUndoGroup();
    
    
}



setKeyEasing(93,64);