

// Read csv file 
var csvFile = File("/Users/hugo/Library/CloudStorage/GoogleDrive-hello@hugovdd.com/My Drive/Projects/Binance/2023/1006_Binance_Square_LaunchVideo/03_Assets/localisations.csv");

var csvData = [];

csvFile.open("r"); //read file and push data into array
do {
    csvData.push(csvFile.readln());
    } while(!csvFile.eof);

csvFile.close();



app.beginUndoGroup("Read and process CSV File");



function dupComp(comp, engName, region, text, font) { //Very confusing way to change the font. 
    var newComp = comp.duplicate();
    var textProp = newComp.layer(2).property("Source Text");
    var textDocument = textProp.value;
    textDocument.font = font;
    textProp.setValue(textDocument);
    textProp.setValue(text);
    newComp.name = engName + comp.name + region;
    newComp.time = 2; //set cti at position
}



function csvToRowArrays(csv){
    var sourceComp = app.project.activeItem;
    var numOfRows = csvData.length;
    var numOfColumns = csvData[0].split(",").length;

    // alert(csvData[1]);
    for (var c = 1; c < numOfColumns; c++){// loop through columns
        var compName = csvData[1].split(",")[c];
        var newComp = sourceComp.duplicate();
        newComp.name = compName;
        // var textProp = newComp.layer("Share insights").property("Text").property("Source Text");
        // textProp.setValue('test');
        
        for(var r = 3; r < 9; r++){ //loop through rows
            var currentRowArray = csvData[r].split(","); //Split row into array
            // currentColumnArray.push(currentRowArray[c]); //push cell data to column array
            var textProp = newComp.layer(currentRowArray[0]).property("Source Text");
            textProp.setValue(currentRowArray[c]);
        }
    }


    // for(var i = 1; i < csvData.length; i++) {
    //     var currentRowArray = csvData[i].split(",");

    //     for(var c = 1; c < numOfColumns; c ++){
    //         alert(currentRowArray[c]);
    //     }
    //     // arrayOfColumns.push(headerRow[i]);

    // }
    // alert(arrayOfColumns);
    // return csvObj;
}

csvToRowArrays(csvData);




app.endUndoGroup();