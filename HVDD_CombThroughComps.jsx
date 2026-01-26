/*
HVDD_CombThroughData

Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Comb Through Comp Data


05_Bulgarian BG
07_Czech CZ
13_French FR
17_Kazakh KZ
18_Lithuanian LV
19_Polish PL
20_Portuguese BR
21_Portuguese PT
22_Romanian RO
23_Russian RU
24_Slovak SK
25_Slovenian SI
26_Swedish SE
27_Turkish TR
28_Ukrainian UA
*/


var liningArray_1 = "-BG|-CZ|-FR|-KZ|-LV|-PL|-BR|-PT|-RO|-RU|-SK|-SI|-SE|-TR|-UA";
var liningArray_2 = "-AR|-VN";

var selComps = app.project.selection;
app.beginUndoGroup("Comb Through Data");

function changeLining(comp, lining){
    var textProp = comp.layer(2).property("Source Text");
    var textDocument = textProp.value;
    textDocument.leading = lining;
    textProp.setValue(textDocument);
    
}

function regexFilter(comp){ //Check if comp name contains string
    var compName = comp.name;
    var filter = new RegExp(liningArray_2); 
    if (filter.test(compName)){
        return true;
    } else {
        return false;
    }
}

function moveCompToFolder(comp, folderName){
    for (var i = 1; i <= app.project.numItems; i++) { //loop through project file
        var projectItem = app.project.item(i);
        if ((projectItem.name == folderName) && (projectItem instanceof FolderItem)) { //check if folder exists
            comp.parentFolder = projectItem; //MoVe to folder
            break;
        };
    }
}


for (var i = 0; selComps.length; i++ ){
    if (regexFilter(selComps[i])){
        // changeLining(selComps[i], 170);
        moveCompToFolder(selComps[i], "Modified");
        // alert( "valid " + selComps[i].name)
    } 
}



app.endUndoGroup();