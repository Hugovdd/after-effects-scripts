

// Read csv file 
var csvFile = File("/Users/hugo/Downloads/Trading Bots Sizzle Localizations - Localisations.csv");

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
    alert(numOfColumns);

    // alert(csvData[1]);
    for (var c = 2; c < numOfColumns; c++){// loop through columns
        var compName = csvData[2].split(",")[c];
        // alert(compName);
        var newComp = sourceComp.duplicate();
        newComp.name = compName;

        
        for(var r = 3; r < (numOfRows - 1); r++){ //loop through rows
            var currentRowArray = csvData[r].split(","); //Split row into array
            // currentColumnArray.push(currentRowArray[c]); //push cell data to column array
            var textProp = newComp.layer(currentRowArray[1]).property("Source Text");
            try{
                textProp.setValue(currentRowArray[c]);
            } catch (ex){

            }
            
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