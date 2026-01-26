//JSON
"object" != typeof JSON && (JSON = {}), function () { "use strict"; function f(t) { return t < 10 ? "0" + t : t } function this_value() { return this.valueOf() } function quote(t) { return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var r, n, o, u, f, a = gap, i = e[t]; switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (u = i.length, r = 0; r < u; r += 1)f[r] = str(r, i) || "null"; return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o } if (rep && "object" == typeof rep) for (u = rep.length, r = 0; r < u; r += 1)"string" == typeof rep[r] && (n = rep[r], o = str(n, i), o && f.push(quote(n) + (gap ? ": " : ":") + o)); else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i), o && f.push(quote(n) + (gap ? ": " : ":") + o)); return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o } } var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g; "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value); var gap, indent, meta, rep; "function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, r) { var n; if (gap = "", indent = "", "number" == typeof r) for (n = 0; n < r; n += 1)indent += " "; else "string" == typeof r && (indent = r); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { function walk(t, e) { var r, n, o = t[e]; if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (n = walk(o, r), void 0 !== n ? o[r] = n : delete o[r]); return reviver.call(t, e, o) } var j; if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();
//# sourceMappingURL=json2.min.js.map


//Align layers available directions: left, right, hCenter, top, bottom, vCenter
function alignLayers(direction){ 
    var alignLayersObj = {};
    alignLayersObj.activeComp = app.project.activeItem;
    alignLayersObj.ignoreParent = true;
    function alignBtn(dir) {
        alignLayersObj.activeComp = app.project.activeItem;
        if (alignLayersObj.activeComp === null) {
            return;
        }
        if (!alignLayersObj.activeComp instanceof CompItem) {
            return;
        }
        var selLayers = alignLayersObj.activeComp.selectedLayers;
        if (selLayers.length === 0) {
            return;
        }
        var err = false;
        for (var i = 0; i < selLayers.length; i++) {
            if (
                (selLayers[i].matchName !== "ADBE Vector Layer" &&
                    selLayers[i].matchName !== "ADBE AV Layer" &&
                    selLayers[i].matchName !== "ADBE Text Layer") ||
                !selLayers[i].hasVideo
            ) {
                err = true;
                break;
            }
        }
        if (err) {
            alert("Error: Can't align all layers.");
            return;
        }
        var current = {};
        var selection = {};
        selection.parents = [];
        for (var i = 0; i < selLayers.length; i++) {
            if (alignLayersObj.ignoreParent) {
                selection.parents.push(selLayers[i].parent);
                selLayers[i].parent = null;
            }
            current = {};
            current.points = [];
            var res = findPoints(selLayers[i]);
            if (res === false) {
                return;
            }
            current.points.push(res.points);
            if (res.mask) {
                current.extremes = {};
                current.extremes.left = current.points[0][0][0];
                current.extremes.right = current.points[0][1][0];
                current.extremes.top = current.points[0][0][1];
                current.extremes.bottom = current.points[0][3][1];
            } else {
                current.extremes = findExtremes(
                    current.points
                ).extremes;
            }
            if (dir === "left") {
                moveLayerX(selLayers[i], -current.extremes[dir]);
            } else if (dir === "right") {
                moveLayerX(
                    selLayers[i],
                    alignLayersObj.activeComp.width - current.extremes[dir]
                );
            } else if (dir === "hCenter") {
                moveLayerX(
                    selLayers[i],
                    (alignLayersObj.activeComp.width -
                        current.extremes.right -
                        current.extremes.left) /
                        2
                );
            } else if (dir === "top") {
                moveLayerY(selLayers[i], -current.extremes[dir]);
            } else if (dir === "bottom") {
                moveLayerY(
                    selLayers[i],
                    alignLayersObj.activeComp.height - current.extremes[dir]
                );
            } else {
                if (dir === "vCenter") {
                    moveLayerY(
                        selLayers[i],
                        (alignLayersObj.activeComp.height -
                            current.extremes.bottom -
                            current.extremes.top) /
                            2
                    );
                }
            }
    
        if (alignLayersObj.ignoreParent) {
            for (var i = 0; i < selLayers.length; i++) {
                selLayers[i].parent = selection.parents[i];
            }
        }
        }
    }
    function findPoints(layer) {
                var res = {};
                res.mask = false;
                if (layer.matchName === "ADBE AV Layer") {
                    leftTop = layer.sourcePointToComp([0, 0]);
                    rightTop = layer.sourcePointToComp([layer.width, 0]);
                    leftBottom = layer.sourcePointToComp([0, layer.height]);
                    rightBottom = layer.sourcePointToComp([
                        layer.width,
                        layer.height,
                    ]);
                    res.points = [leftTop, rightTop, leftBottom, rightBottom];
                    if (layer.property("ADBE Mask Parade").numProperties != 0) {
                        res.points = findMaskPoints(layer);
                        if (res.points === false) {
                            res.mask = false;
                            res.points = [
                                leftTop,
                                rightTop,
                                leftBottom,
                                rightBottom,
                            ];
                        } else {
                            if (!alignLayersObj.alignToMasks) {
                                if (res.points[0][0] < leftTop[0]) {
                                    res.points[0][0] = leftTop[0];
                                    res.points[2][0] = leftTop[0];
                                }
                                if (res.points[1][0] > rightTop[0]) {
                                    res.points[1][0] = rightTop[0];
                                    res.points[3][0] = rightTop[0];
                                }
                                if (res.points[0][1] < leftTop[1]) {
                                    res.points[0][1] = leftTop[1];
                                    res.points[1][1] = leftTop[1];
                                }
                                if (res.points[2][1] > leftBottom[1]) {
                                    res.points[2][1] = leftBottom[1];
                                    res.points[3][1] = leftBottom[1];
                                }
                            }
                            res.mask = true;
                        }
                    }
                } else {
                    if (
                        layer.matchName === "ADBE Text Layer"
                    ) {
                        var calcComp = app.project.items.addComp(
                            "AlignPro_Calc",
                            4,
                            4,
                            1,
                            1,
                            1
                        );
                        var calcShape = calcComp.layers.addShape();
                        var calcProperty = calcShape
                            .property("ADBE Root Vectors Group")
                            .addProperty("ADBE Vector Filter - PB")
                            .property("ADBE Vector PuckerBloat Amount");
                        calcProperty.expression =
                            "comp('" +
                            alignLayersObj.activeComp.name +
                            "').layer('" +
                            layer.name +
                            "').sourceRectAtTime(time,true).width;";
                        width = calcProperty.value;
                        calcProperty.expression =
                            "comp('" +
                            alignLayersObj.activeComp.name +
                            "').layer('" +
                            layer.name +
                            "').sourceRectAtTime(time,true).height;";
                        height = calcProperty.value;
                        calcProperty.expression =
                            "comp('" +
                            alignLayersObj.activeComp.name +
                            "').layer('" +
                            layer.name +
                            "').sourceRectAtTime(time,true).left;";
                        left = calcProperty.value;
                        calcProperty.expression =
                            "comp('" +
                            alignLayersObj.activeComp.name +
                            "').layer('" +
                            layer.name +
                            "').sourceRectAtTime(time,true).top;";
                        top = calcProperty.value;
                        calcComp.remove();
                    } else {
                        width = layer.sourceRectAtTime(
                            alignLayersObj.activeComp.time,
                            false
                        ).width;
                        height = layer.sourceRectAtTime(
                            alignLayersObj.activeComp.time,
                            false
                        ).height;
                        left = layer.sourceRectAtTime(
                            alignLayersObj.activeComp.time,
                            false
                        ).left;
                        top = layer.sourceRectAtTime(
                            alignLayersObj.activeComp.time,
                            false
                        ).top;
                    }
                    leftTop = layer.sourcePointToComp([left, top]);
                    rightTop = layer.sourcePointToComp([left + width, top]);
                    leftBottom = layer.sourcePointToComp([left, top + height]);
                    rightBottom = layer.sourcePointToComp([
                        left + width,
                        top + height,
                    ]);
                    res.points = [leftTop, rightTop, leftBottom, rightBottom];
                    if (
                        (layer.matchName === "ADBE Vector Layer" &&
                            !alignLayersObj.ignoreMasks) ||
                        layer.matchName !== "ADBE Vector Layer"
                    ) {
                        if (layer.property("ADBE Mask Parade").numProperties != 0) {
                            res.points = findMaskPoints(layer);
                            if (res.points === false) {
                                res.mask = false;
                                res.points = [
                                    leftTop,
                                    rightTop,
                                    leftBottom,
                                    rightBottom,
                                ];
                            } else {
                                if (!alignLayersObj.alignToMasks) {
                                    if (res.points[0][0] < leftTop[0]) {
                                        res.points[0][0] = leftTop[0];
                                        res.points[2][0] = leftTop[0];
                                    }
                                    if (res.points[1][0] > rightTop[0]) {
                                        res.points[1][0] = rightTop[0];
                                        res.points[3][0] = rightTop[0];
                                    }
                                    if (res.points[0][1] < leftTop[1]) {
                                        res.points[0][1] = leftTop[1];
                                        res.points[1][1] = leftTop[1];
                                    }
                                    if (res.points[2][1] > leftBottom[1]) {
                                        res.points[2][1] = leftBottom[1];
                                        res.points[3][1] = leftBottom[1];
                                    }
                                }
                                res.mask = true;
                            }
                        }
                    }
                }
                res.centerPoints = findAverage([res.points]);
                return res;
    }
    function findExtremes(points, centerPoints) {
        var res = {
            extremes: {
                bottom: -Infinity,
                left: Infinity,
                right: -Infinity,
                top: Infinity,
            },
            order: { bottom: [], left: [], right: [], top: [] },
        };
        if (centerPoints !== undefined) {
            res.order.hCenter = [];
            res.order.vCenter = [];
        }
        for (var i = 0; i < points.length; i++) {
            layer = [
                Infinity,
                -Infinity,
                Infinity,
                -Infinity,
                Infinity,
                Infinity,
            ];
            for (var j = 0; j < points[i].length; j++) {
                res.extremes.left = Math.min(
                    res.extremes.left,
                    points[i][j][0]
                );
                res.extremes.right = Math.max(
                    res.extremes.right,
                    points[i][j][0]
                );
                res.extremes.top = Math.min(
                    res.extremes.top,
                    points[i][j][1]
                );
                res.extremes.bottom = Math.max(
                    res.extremes.bottom,
                    points[i][j][1]
                );
                layer[0] = Math.min(layer[0], points[i][j][0]);
                layer[1] = Math.max(layer[1], points[i][j][0]);
                layer[2] = Math.min(layer[2], points[i][j][1]);
                layer[3] = Math.max(layer[3], points[i][j][1]);
            }
            res.order.left.push(layer[0]);
            res.order.right.push(layer[1]);
            res.order.top.push(layer[2]);
            res.order.bottom.push(layer[3]);
            if (centerPoints !== undefined) {
                layer[4] = Math.min(layer[4], centerPoints[i][0]);
                layer[5] = Math.min(layer[5], centerPoints[i][1]);
                res.order.hCenter.push(layer[4]);
                res.order.vCenter.push(layer[5]);
            }
        }
        return res;
    }
    function findAverage(arr) {
        var sumX = 0;
        var sumY = 0;
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                total++;
                sumX += arr[i][j][0];
                sumY += arr[i][j][1];
            }
        }
        return [sumX / total, sumY / total];
    }
    function moveLayerX(layer, val) {
        var positionProp = layer
            .property("ADBE Transform Group")
            .property("ADBE Position");
        var xPositionProp = layer
            .property("ADBE Transform Group")
            .property("ADBE Position_0");
        if (positionProp.dimensionsSeparated) {
            if (xPositionProp.numKeys === 0) {
                xPositionProp.setValue(xPositionProp.value + val);
            } else {
                xPositionProp.setValueAtTime(
                    alignLayersObj.activeComp.time,
                    xPositionProp.value + val
                );
            }
        } else {
            if (positionProp.numKeys === 0) {
                positionProp.setValue([
                    positionProp.value[0] + val,
                    positionProp.value[1],
                ]);
            } else {
                positionProp.setValueAtTime(alignLayersObj.activeComp.time, [
                    positionProp.value[0] + val,
                    positionProp.value[1],
                ]);
            }
        }
    }
    function moveLayerY(layer, val) {
        var positionProp = layer
            .property("ADBE Transform Group")
            .property("ADBE Position");
        var yPositionProp = layer
            .property("ADBE Transform Group")
            .property("ADBE Position_1");
        if (positionProp.dimensionsSeparated) {
            if (yPositionProp.numKeys === 0) {
                yPositionProp.setValue(yPositionProp.value + val);
            } else {
                yPositionProp.setValueAtTime(
                    alignLayersObj.activeComp.time,
                    yPositionProp.value + val
                );
            }
        } else {
            if (positionProp.numKeys === 0) {
                positionProp.setValue([
                    positionProp.value[0],
                    positionProp.value[1] + val,
                ]);
            } else {
                positionProp.setValueAtTime(alignLayersObj.activeComp.time, [
                    positionProp.value[0],
                    positionProp.value[1] + val,
                ]);
            }
        }
    }
    function findMaskPoints(layer) {
        var points = [];
        if (layer.mask(1).maskMode === MaskMode.SUBTRACT) {
            return false;
        }
        var numOfMasks = layer.property("ADBE Mask Parade").numProperties;
        for (var i = 1; i <= numOfMasks; i++) {
            if (layer.mask(i).inverted) {
                return false;
            }
        }
        var numOfNone = 0;
        for (var i = 1; i <= numOfMasks; i++) {
            if (layer.mask(i).maskMode === MaskMode.NONE) {
                numOfNone++;
            }
        }
        if (numOfNone === numOfMasks) {
            return false;
        }
        for (var i = 1; i <= numOfMasks; i++) {
            curMaskShape = layer
                .property("ADBE Mask Parade")
                .property(i)
                .property("ADBE Mask Shape").value;
            if (curMaskShape.closed) {
                for (var j = 0; j < curMaskShape.vertices.length; j++) {
                    points.push([
                        curMaskShape.vertices[j][0] +
                            curMaskShape.inTangents[j][0],
                        curMaskShape.vertices[j][1] +
                            curMaskShape.inTangents[j][1],
                    ]);
                    points.push([
                        curMaskShape.vertices[j][0] +
                            curMaskShape.outTangents[j][0],
                        curMaskShape.vertices[j][1] +
                            curMaskShape.outTangents[j][1],
                    ]);
                }
            }
        }
        points = removeDuplicates(points);
        var lM = Infinity;
        var rM = -Infinity;
        var tM = Infinity;
        var bM = -Infinity;
        for (var i = 0; i < points.length; i++) {
            if (points[i][0] < lM) {
                lM = points[i][0];
                lMIndex = i;
            }
            if (points[i][0] > rM) {
                rM = points[i][0];
                rMIndex = i;
            }
            if (points[i][1] < tM) {
                tM = points[i][1];
                tMIndex = i;
            }
            if (points[i][1] > bM) {
                bM = points[i][1];
                bMIndex = i;
            }
        }
        return [
            layer.sourcePointToComp([
                points[lMIndex][0],
                points[tMIndex][1],
            ]),
            layer.sourcePointToComp([
                points[rMIndex][0],
                points[tMIndex][1],
            ]),
            layer.sourcePointToComp([
                points[lMIndex][0],
                points[bMIndex][1],
            ]),
            layer.sourcePointToComp([
                points[rMIndex][0],
                points[bMIndex][1],
            ]),
        ];
    }
    function removeDuplicates(arr) {
        var unique = [];
        var compare = [];
        for (var a = 0; a < arr.length; a++) {
            found = false;
            for (var c = 0; c < compare.length; c++) {
                if (compare[c] === arr[a].toString()) {
                    found = true;
                }
            }
            if (!found) {
                compare.push(arr[a].toString());
                unique.push(arr[a]);
            }
        }
        return unique;
    }
    alignBtn(direction);
}





// var res = findPoints(layer);
alignLayers('hCenter');
alignLayers('right');

// alert(JSON.stringify(res, false, 4));