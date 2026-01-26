// @target aftereffects

//JSON
"object" != typeof JSON && (JSON = {}), function () { "use strict"; function f(t) { return t < 10 ? "0" + t : t } function this_value() { return this.valueOf() } function quote(t) { return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var r, n, o, u, f, a = gap, i = e[t]; switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (u = i.length, r = 0; r < u; r += 1)f[r] = str(r, i) || "null"; return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o } if (rep && "object" == typeof rep) for (u = rep.length, r = 0; r < u; r += 1)"string" == typeof rep[r] && (n = rep[r], o = str(n, i), o && f.push(quote(n) + (gap ? ": " : ":") + o)); else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i), o && f.push(quote(n) + (gap ? ": " : ":") + o)); return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o } } var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g; "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value); var gap, indent, meta, rep; "function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, r) { var n; if (gap = "", indent = "", "number" == typeof r) for (n = 0; n < r; n += 1)indent += " "; else "string" == typeof r && (indent = r); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { function walk(t, e) { var r, n, o = t[e]; if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (n = walk(o, r), void 0 !== n ? o[r] = n : delete o[r]); return reviver.call(t, e, o) } var j; if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();
//# sourceMappingURL=json2.min.js.map


(function (thisObj) {
    var scriptName = "CompsFromTabbedCSV"


    // get data from csv
    function readCSVData() {
        var csvFile = File("/Users/hugo/Downloads/Test3.tsv");
        var csvData = [];

        csvFile.open("r"); //read file and push data into array
        do {
            csvData.push(csvFile.readln());
        } while(!csvFile.eof);
        csvFile.close();

        return csvData;
    }


    // for every column make a new array for language

    function processOneLanguage(csvData){
        var comp = app.project.activeItem;
        var numOfRows = csvData.length;
        var numOfColumns = csvData[0].split("\t").length;
        var dataObj = {
        };

        var startingColumnIndex = 1; //Column of the first langaue (after EN)
        var startingRowIndex = 1; //Row after language ID 

        // alert(numOfRows);
        // alert(numOfColumns);
        var arrayFirstRow = csvData[startingRowIndex].split("\t");
  
        for (var c = startingColumnIndex; c < numOfColumns; c++){// loop through columns
            var langID = csvData[0].split("\t")[c];

            alert(langID);


            var currentLangArray = [];
            
            for(var r = startingRowIndex; r < (numOfRows - 1); r++){ //loop through rows
                var currentRowArray = csvData[r].split("\t"); //Split row into array
                currentLangArray.push(currentRowArray[c]); //push cell data to column array

                
            }
            dataObj[langID] = currentLangArray;
        }
        return dataObj;
    }



    function findTextLayer(comp, layerName){
        for (j = 1; j <= comp.numLayers; j++) {
            var layer = comp.layer(j);
            
            if (layer instanceof TextLayer  && layer.name == layerName) {
                layer.name = 'Found layer';
            }

            if (layer.source instanceof CompItem){
                findTextLayer(layer.source, layerName);
            }


            
        }
    }


    findTextLayer(app.project.activeItem, "My lovely text layer")



})(this)