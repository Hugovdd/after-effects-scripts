// Get source text and controls
const str = text.sourceText;
const constraintLayer = thisComp.layer("Shape Layer 2"); // Change to your constraint layer name

// Get text rect and constraint rect
const textRect = thisLayer.sourceRectAtTime(time);
const constraintRect = constraintLayer.sourceRectAtTime(time);

// Calculate aspect ratios
const heightRatio = constraintRect.height/ textRect.height;

// Calculate amount of line breaks we want. There should be one line break for every 1.1
const breakCount = Math.floor(heightRatio / 1.1);
// Split text into words
const words = str.split(' ');

// Function to insert line break at middle word
function addLineBreaks(text, breakCount) {
    const words = text.split(' ');
    const segments = [];
    const segmentSize = Math.ceil(words.length / (breakCount + 1));
    
    for (let i = 0; i < words.length; i += segmentSize) {
        segments.push(words.slice(i, i + segmentSize).join(' '));
    }
    
    return segments.join('\n');
}


// Create text with appropriate line breaks
const formattedText = addLineBreaks(str, breakCount);

// Create final text style
const textStyle = text.sourceText.createStyle()
    .setText(formattedText);

textStyle;