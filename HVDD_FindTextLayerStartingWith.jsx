/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":7,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"win","windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Text Buddy","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Button","parentId":0,"style":{"enabled":true,"varName":null,"text":"Fetch Text","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-2":{"id":2,"type":"StaticText","parentId":3,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"StaticText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"textGroup1","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-4":{"id":4,"type":"IconButton","parentId":3,"style":{"enabled":true,"varName":null,"text":"S","preferredSize":[0,0],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjAwRDg1RUYzRkFBMTFFOTk3MzFGMDEyRjUzNjA4NTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjAwRDg1RjAzRkFBMTFFOTk3MzFGMDEyRjUzNjA4NTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MDBEODVFRDNGQUExMUU5OTczMUYwMTJGNTM2MDg1MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBEODVFRTNGQUExMUU5OTczMUYwMTJGNTM2MDg1MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhJ5d1kAAAIwSURBVHjarJQ9S1tRGMefnHvJktxC5TZxCVTikKUWYjpUY7+AFFpw76QObhbrN2h0qEPdmqlUnDqUFjcdNNS5taGTYjAmaBrsNYaCIUn7/1/OCZcQh4IP/OCc87zc87ycG5qbn5cB4oARMAqG9NkFOATH4Krfwe7b3wEPwTSYAck+/RH4CLbAd9AYFOgueApWbdsenpyYkAdjY3LPdX3lr3pdfhwcJL/u7y+32+0XOFoGX8Bv6kM6Nd7kGXifSCRkbnZWYrHYoJSlVqvJu3xeyuUytwz4iTdTWs90Vhnk1dLSjUEo1NGGtvTRvqJ0YaeZDm8SDod7X64jHSNcn+OMQhva0kfX01G6OzOsibkJg7zO5SS3siLVatWH6xzOTDDa0kc3ZcTWLU6ysEaUUmJZljSbTXmztuafcR2NRsVSqmdHn929PXZ2VJk5Md2huFi/XFz0HRGgRLjmmRuwC/gMKbklUXpi/TkJFpYp6XTuE5NmsAEBnwulx/4Iw9Yz6Ha70ul0xKRj0uRZBzoj2ofTfmiNZzJ/WJZKpZJ9lMlIJBLxSafT8mRqSuLxuDiOI+PYT2azEg909sPGBj+ax/az0g9wC2N/xolttVq99rp9DTBBaENb+uh3d8UbUeeB00aj8bxYLEoqlfJvddMTebu+bp7IAtgF1ybQNTgBPxHscaFQiF56iB0KyV/UhIU+LpVkZ3vbT8fzvDMdhI/2Mvhob/U3IlpRAN/A5v/82P4JMAC5N/hnHN2zDwAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"EditText","parentId":3,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"EditText","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"IconButton","parentId":3,"style":{"enabled":true,"varName":null,"text":"EDIT","preferredSize":[0,0],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjAwRDg1RUYzRkFBMTFFOTk3MzFGMDEyRjUzNjA4NTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjAwRDg1RjAzRkFBMTFFOTk3MzFGMDEyRjUzNjA4NTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MDBEODVFRDNGQUExMUU5OTczMUYwMTJGNTM2MDg1MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBEODVFRTNGQUExMUU5OTczMUYwMTJGNTM2MDg1MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhJ5d1kAAAIwSURBVHjarJQ9S1tRGMefnHvJktxC5TZxCVTikKUWYjpUY7+AFFpw76QObhbrN2h0qEPdmqlUnDqUFjcdNNS5taGTYjAmaBrsNYaCIUn7/1/OCZcQh4IP/OCc87zc87ycG5qbn5cB4oARMAqG9NkFOATH4Krfwe7b3wEPwTSYAck+/RH4CLbAd9AYFOgueApWbdsenpyYkAdjY3LPdX3lr3pdfhwcJL/u7y+32+0XOFoGX8Bv6kM6Nd7kGXifSCRkbnZWYrHYoJSlVqvJu3xeyuUytwz4iTdTWs90Vhnk1dLSjUEo1NGGtvTRvqJ0YaeZDm8SDod7X64jHSNcn+OMQhva0kfX01G6OzOsibkJg7zO5SS3siLVatWH6xzOTDDa0kc3ZcTWLU6ysEaUUmJZljSbTXmztuafcR2NRsVSqmdHn929PXZ2VJk5Md2huFi/XFz0HRGgRLjmmRuwC/gMKbklUXpi/TkJFpYp6XTuE5NmsAEBnwulx/4Iw9Yz6Ha70ul0xKRj0uRZBzoj2ofTfmiNZzJ/WJZKpZJ9lMlIJBLxSafT8mRqSuLxuDiOI+PYT2azEg909sPGBj+ax/az0g9wC2N/xolttVq99rp9DTBBaENb+uh3d8UbUeeB00aj8bxYLEoqlfJvddMTebu+bp7IAtgF1ybQNTgBPxHscaFQiF56iB0KyV/UhIU+LpVkZ3vbT8fzvDMdhI/2Mvhob/U3IlpRAN/A5v/82P4JMAC5N/hnHN2zDwAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"ListBox","parentId":0,"style":{"enabled":true,"varName":"textbox1","creationProps":{"multiselect":false,"numberOfColumns":1,"columnWidths":"[]","columnTitles":"[]","showHeaders":false},"listItems":"Item 1, Item 2","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,3,4,2,5,6,7,1],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

//JSON
"object" != typeof JSON && (JSON = {}), function () { "use strict"; function f(t) { return t < 10 ? "0" + t : t } function this_value() { return this.valueOf() } function quote(t) { return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var r, n, o, u, f, a = gap, i = e[t]; switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (u = i.length, r = 0; r < u; r += 1)f[r] = str(r, i) || "null"; return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o } if (rep && "object" == typeof rep) for (u = rep.length, r = 0; r < u; r += 1)"string" == typeof rep[r] && (n = rep[r], o = str(n, i), o && f.push(quote(n) + (gap ? ": " : ":") + o)); else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i), o && f.push(quote(n) + (gap ? ": " : ":") + o)); return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o } } var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g; "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value); var gap, indent, meta, rep; "function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, r) { var n; if (gap = "", indent = "", "number" == typeof r) for (n = 0; n < r; n += 1)indent += " "; else "string" == typeof r && (indent = r); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { function walk(t, e) { var r, n, o = t[e]; if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (n = walk(o, r), void 0 !== n ? o[r] = n : delete o[r]); return reviver.call(t, e, o) } var j; if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();
//# sourceMappingURL=json2.min.js.map


// WIN
// ===
var win = new Window("palette"); 
    win.text = "Text Buddy"; 
    win.orientation = "column"; 
    win.alignChildren = ["center","top"]; 
    win.spacing = 10; 
    win.margins = 10; 

// SCROLLGROUP
// ===========
var scrollGroup = win.add("group", undefined, {name: "scrollGroup"}); 
    scrollGroup.orientation = "row"; 
    scrollGroup.alignChildren = ["left","top"]; 
    scrollGroup.spacing = 10; 
    scrollGroup.margins = 0; 


// GROUPHOLDER
// ===========
var groupHolder = scrollGroup.add("group", undefined, {name: "groupholder"}); 
    groupHolder.orientation = "column"; 
    groupHolder.alignChildren = ["left","center"]; 
    groupHolder.spacing = 10; 
    groupHolder.margins = 0; 




// TEXTGROUP1
// ==========
var textGroup1 = groupHolder.add("group", undefined, {name: "textGroup1"}); 
    textGroup1.orientation = "row"; 
    textGroup1.alignChildren = ["left","center"]; 
    textGroup1.spacing = 5; 
    textGroup1.margins = 0; 

var findButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0C%00%00%00%0C%08%06%00%00%00Vu%5C%C3%A7%00%00%00%C2%AAIDATx%01%C2%AD%C2%90G%19%C3%82%40%14%C2%84%23%01%09H%C3%81%01%C2%BD%1Cq%40n)%C2%A7%C2%95%10%07%C3%A0%20%12%C2%90%C2%80%C2%84%C2%95%C2%80%C2%84a~z%C3%AF%C3%AF%C3%BB%C2%B6O%C3%99y%C3%89%C2%A1%3AA%C2%8D%5E%C2%AE%C2%A9G%18%C3%A4j%25%C3%8F%C2%AA_j%C3%96%2B%C2%B4f%C3%B4s-YM%C2%8C%C2%93%5C%C3%8D%1B0j~%C2%94A%C3%A9%C3%91%C3%8D%C3%80n%C2%AE%05%24%C2%9C%2F%08(z%C3%8C%C2%AF%C2%85%00%C3%AE%5D%C3%93%C2%8B%07.%1F%C3%BD%19%C2%97%1B1l%09%7B7%5B%C2%A1%C3%9A%C2%A4%C3%AAZ%C2%A5%C3%A2%5B%C3%97%60r%C2%90%0D%C3%B7%7B%0F%115%1E%C3%A9%0C%C3%BF%C3%A6%C3%AE6%C3%B4mW%C3%84%C3%98%C2%B75Xd%C3%85%C2%B8%20%5D%C3%97y%C3%AF%01%C2%BEE%C2%A2%C3%BEA%C2%AAq%C3%9F%00e%C3%83%C2%98%C3%98%C3%B5%C2%99%C2%A6%C2%95%00%00%00%00IEND%C2%AEB%60%C2%82"; 

// GROUPBOTTOMBUTTONS
// ==================
var groupBottomButtons = win.add("group", undefined, {name: "groupBottomButtons"}); 
    groupBottomButtons.orientation = "row"; 
    groupBottomButtons.alignChildren = ["center","center"]; 
    groupBottomButtons.spacing = 10; 
    groupBottomButtons.margins = 0; 

// GROUPBUTTONSLEFT
// ================
var groupButtonsLeft = groupBottomButtons.add("group", undefined, {name: "groupButtonsLeft"}); 
    groupButtonsLeft.orientation = "row"; 
    groupButtonsLeft.alignChildren = ["left","center"]; 
    groupButtonsLeft.spacing = 10; 
    groupButtonsLeft.margins = 0; 

var buttonFetch = groupButtonsLeft.add("button", undefined, undefined, {name: "buttonFetch"}); 
    buttonFetch.text = "Fetch Text"; 

// GROUPBUTTONSRIGHT
// =================
var groupButtonsRight = groupBottomButtons.add("group", undefined, {name: "groupButtonsRight"}); 
    groupButtonsRight.orientation = "row"; 
    groupButtonsRight.alignChildren = ["right","center"]; 
    groupButtonsRight.spacing = 10; 
    groupButtonsRight.margins = 0; 

var buttonPaste = groupButtonsRight.add("button", undefined, undefined, {name: "buttonPaste"}); 
    buttonPaste.text = "Paste"; 

var buttonUpdate = groupButtonsRight.add("button", undefined, undefined, {name: "buttonUpdate"}); 
    buttonUpdate.text = "Update Text"; 


var textLayers = [];

// Recursive function to search for text layers starting with '^'
function findTextLayers(comp) {
    if (!(comp && comp instanceof CompItem)) { //Check for active comp
        alert("Please select a composition!");
        return;
    }
    // Loop through layers in the current composition
    for (var i = 1; i <= comp.numLayers; i++) {
        var layer = comp.layer(i);

        // Check if the layer is a text layer and its name starts with '^'
        if (layer instanceof TextLayer && layer.name.charAt(0) === '^') {
            // checkPreviousTextLayers(layer);
            textLayers.push(layer);
            // alert(layer.name);
        }
    }

    // Loop through pre-comps in the current composition
    for (var j = 1; j <= comp.numLayers; j++) {
        var layer = comp.layer(j);

        // Check if the layer is a pre-comp
        if (layer instanceof AVLayer && layer.source instanceof CompItem) {
            // Recursively call the function for the pre-comp
            var preCompTextLayers = findTextLayers(layer.source);
        }
    }
}


// Adjust UI Width depending on longest text layer up to a certain limit
function determineUIWitdh(textLayers){
    var longest = textLayers[0].name.length;
    var width = 100;

    for (i = 0; i < textLayers.length; i++){
        //loop through layers and find longest layer name
        var layer = textLayers[i]
        var layerName = layer.name;
        var currentLength = layerName.length;
        if (currentLength > longest) longest = currentLength
    }

    if (longest > 40){ //If above 30 characters max out the width at 160

        width = 200;
    } else {
        width = longest * 5 //Otherwise 4px per character
    }
    return width;
}

function onFindButtonClick(layer) {
    // alert("Button Clicked!\nText Layer ID: " + layer.id);
    layer.containingComp.openInViewer();
    layer.selected = true;
}

function getClipboardAsString() {
    var clipboardContent = getClipboardContent();
    return clipboardContent;

    /**
     * Gets the contents of the clipboard as a string
     *
     * @returns {String} Clipboard contents
     */
    function getClipboardContent() {
        var isWin = $.os.indexOf("Windows") !== -1;
        var tempFolder = Folder.desktop;
        var tempFile = tempFolder.fsName + '/' + Date.now().toString() + '.txt';

        writeClipboardContentToFile(tempFile);

        var fileContent = readContent(tempFile);
        File(tempFile).remove();

        return fileContent;


        /**
         * Writes clipboard contents to file
         *
         * @param {String} tempFilePath Temporary file path
         */
        function writeClipboardContentToFile(tempFilePath) {
            var cmd = 'pbpaste > "' + tempFilePath + '"';

            if (isWin)
                cmd = "cmd /c \"for /f \"eol=; tokens=* delims= \" %I in ('powershell Get-Clipboard') do echo %I >> " + tempFilePath + "\"";

            system.callSystem(cmd);
        }

        /**
         * Reads the contents of a file
         *
         * @param {File} fileObj    File object to write to
         * @param {String} encoding Encoding type
         * @returns {String}        File contents
         */
        function readContent(fileObj, encoding) {
            var fileContent;

            encoding = encoding || "UTF-8";
            fileObj = (fileObj instanceof File) ? fileObj : new File(fileObj);

            if (!fileObj.exists) {
                throw "File " + fileObj.fsName + " doesn't exist!";
            }

            if (File.isEncodingAvailable(encoding)) {
                fileObj.encoding = encoding;
            }

            fileObj.open("r");
            fileContent = fileObj.read();
            fileObj.close();

            if (fileContent === null) {
                throw "Unable to read contents of " + fileObj.fsName;
            }

            return fileContent;
        }
    }
}

function buildUIForEachLayer(textLayers){
    var staticTextWidth = determineUIWitdh(textLayers);

    //Make a new group for each item of textLayers Array. Add layername, find button and edit text for each.
    for (i = 0; i < textLayers.length; i++){
        var layer = textLayers[i]
        var layerName = layer.name.substring(1);

        //BUILD UI 
        var currentGroup = groupHolder.add("group", undefined, {name: "textGroup" + i.toString()}); 
        currentGroup.orientation = "row"; 
        currentGroup.alignChildren = ["left","center"]; 
        currentGroup.spacing = 3; 
        currentGroup.margins = 0; 

        var currentStatictext = currentGroup.add("statictext", undefined, undefined, {name: layerName}); 
        currentStatictext.text = layerName; 
        currentStatictext.preferredSize.width = staticTextWidth;

        var findButton = currentGroup.add("iconbutton", undefined, File.decode(findButton_imgString), {name: "findbutton", style: "toolbutton"});
        findButton.align

        findButton.onClick = function (layer) {
            return function () {
                onFindButtonClick(layer);
            };
        }(layer);

        var editTextParams = 'edittext {properties: {name: "edittext' + i.toString() +'"}}'

        var edittext = currentGroup.add(editTextParams); 
        edittext.text = layer.property("ADBE Text Properties").property("ADBE Text Document").value;
        edittext.preferredSize.width = staticTextWidth;
    }
    //Update UI to reflect changes
    win.layout.layout(true);
    win.layout.resize();
    win.center();

    //Determine height and add a scrollbar if overflowing
    var maxHeight = 700;
    if(groupHolder.size.height > maxHeight){
        groupHolder.maximumSize.height = 999999;
        scrollGroup.maximumSize.height = maxHeight;

        var scrollBar = scrollGroup.add("scrollbar");   

        scrollBar.size = [8 , maxHeight - 3];
        scrollBar.stepdelta = scrollBar.jumpdelta = 10;
        scrollBar.enabled = true;
        // scrollBar.location = [scrollGroup.size.width -18 , 0];
        // scrollBar.minvalue = -10;
        // scrollBar.maxvalue = + 120;   
        // scrollBar.value = 0;


        scrollBar.onChanging = function () {
	        groupHolder.location.y = -5 * this.value;
	    }

    }

    //Update ui
    win.layout.layout(true);
    win.layout.resize();
    win.center();
}

buttonFetch.onClick = function(){
    findTextLayers(app.project.activeItem);
    if (textLayers.length < 1){
        alert('No text layers found')
        return
    }

    buildUIForEachLayer(textLayers);
    
}

buttonPaste.onClick = function(){
    var clipboard = getClipboardAsString();
    var separateLines = clipboard.split(/\r?\n|\r|\n/g);

    for (var i = 0; i < separateLines.length; i++){
        var currentEditText = 'edittext' + i.toString();
        if (win.findElement(currentEditText)!= null){
            win.findElement(currentEditText).text = separateLines[i];
        }
    }
}

buttonUpdate.onClick = function(){
    if (textLayers.length < 1){
        alert('No text layers found')
        return
    }
    for (i = 0; i < textLayers.length; i++){
        var layer = textLayers[i];
        var layerName = layer.name;
        var currentEditText = 'edittext' + i.toString();
        var newText = win.findElement(currentEditText).text;
        var textProp = layer.property("ADBE Text Properties").property("ADBE Text Document")
        var textDocument = newText;

        textProp.setValue(textDocument);

    }
}


//For each number add the word(s) to an array



win.show();

// alert (textLayers.length);
// $.writeln(textLayers);
