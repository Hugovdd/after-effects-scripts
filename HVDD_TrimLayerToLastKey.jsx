/*
HVDD_TrimLayersToLastKeys

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Trims selected layers to first and last keyframes. Using GoodBoyNinja's recursive prop looper
*/


function TrimLayersToKeys() {
        /**
     * @description class
    */

    var PropertyTreeLooper = function () {
        var rootClass = this;
    
        /**
        * @description callbacks
        * @param {function} onAny - callback for each time a property, group or layer is found (regardless of type)
        * @param {function} onPropertyFound - callback for each time a property of type PropertyType.PROPERTY is found
        * @param {function} onGroupFound - callback for each time a property of type PropertyType.PROPERTY_GROUP is found
        * @param {function} onEnd - callback for when the loop is finished
        * @param {boolean} skipUnmodified - skip properties, groups or layers that have not been modified
        */
        this.onAny = null;
        this.onPropertyFound = null;
        this.onGroupFound = null;
        this.onEnd = null;
        this.skipUnmodified = false;
        this.loopIndex = -1;


        this.loop = function (prop) {
            rootClass.loopIndex++;
            var thisLoopIndex = rootClass.loopIndex; // cache inside to access after recursive calls


            // prepare
            if (!prop) {
                return;
            }

            // ⤵skip unmodified properties
            if (rootClass.skipUnmodified && prop.isModified === false) {
                return;
            }

            // ⤵call onAny callback
            if (rootClass.onAny) {
                rootClass.onAny(prop);
            }

            // ⤵call onPropertyFound or onLayerFound callbacks
            var type = prop.propertyType;
            if (type == PropertyType.PROPERTY && rootClass.onPropertyFound) {
                rootClass.onPropertyFound(prop);
            } else if (type == PropertyType.NAMED_GROUP && prop.containingComp && rootClass.onLayerFound) {
                rootClass.onLayerFound(prop);
            }

            //  call onGroupFound callback and go deeper
            if (prop.numProperties > 0) {
                if (rootClass.onGroupFound) {
                    rootClass.onGroupFound(prop);
                }

                // ...loop through its properties
                for (var i = 1; i <= prop.numProperties; i++) {
                    rootClass.loop(prop.property(i));
                }
            };

            // ⤵call onEnd callback
            if (thisLoopIndex === 0) {
                // reset the loop index of the looper to its initial value
                rootClass.loopIndex = -1;

                if (rootClass.onEnd) {
                    rootClass.onEnd(prop);
                }
            }
        };

    };
    app.beginUndoGroup("Trim layers to keyframes");

    var thisComp = app.project.activeItem; //Current compositon
    var selLayers = thisComp.selectedLayers; //Selected layers
    var looper = new PropertyTreeLooper();
    var firstKeyArray = []; 
    var lastKeyArray = [];
    
    Array.prototype.max = function() {
        return Math.max.apply(null, this);
      };
      
    Array.prototype.min = function() {
    return Math.min.apply(null, this);
    };
    
    looper.onAny = function(prop) {
        var lastPropKey = 0;
        var numKeys = prop.numKeys;
        if (numKeys > 0) { 
            var lastPropKey = prop.keyTime(numKeys);
            for (var j = 1; j <= numKeys; j++) {
                var keyTime = prop.keyTime(j);
                if (keyTime > lastPropKey) {
                lastPropKey = keyTime;
                };        
            }
            firstKeyArray.push(prop.keyTime(1))
            lastKeyArray.push(lastPropKey);
       }
    }

    looper.loop(selLayers[0])
    
    var firstKey = firstKeyArray.min();
    var lastKey = lastKeyArray.max();
    selLayers[0].inPoint = firstKey;
    selLayers[0].outPoint = lastKey;
    

    app.endUndoGroup();
}

TrimLayersToKeys();
