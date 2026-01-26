// Read csv file 
var csvFile = File("/Users/hugo/Library/CloudStorage/GoogleDrive-hello@hugovdd.com/My Drive/Projects/Binance/2023/1006_Binance_Square_LaunchVideo/03_Assets/localisations.csv");

var csvData = [];

csvFile.open("r"); //read file and push data into array
do {
    csvData.push(csvFile.readln());
    } while(!csvFile.eof);

csvFile.close();

// ~ alert(csvData);
// ~ alert(csvData[0]);

app.beginUndoGroup("Read and process CSV File");

var sourceComp = app.project.activeItem;

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

const numColumns = csvData.sourceText.split(/\n/g)[0].split(",").length; // number of columns

// Get the number of newline characters that are followed by
// visible characters, minus one for the header row
const numRows = csvData.sourceText.split(/\n(?=\S)/g).length - 1;

alert(numColumns);

var thisCSVRow;
for(var i = 1; i < csvData.length; i++) {
    thisCSVRow = csvData[i].split(",");
    // dupComp(sourceComp,thisCSVRow[1] ,thisCSVRow[0], thisCSVRow[2],thisCSVRow[3])

    }

app.endUndoGroup();