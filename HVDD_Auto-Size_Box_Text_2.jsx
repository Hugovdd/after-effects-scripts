// Get the source text and controls
const str = text.sourceText;
const maxChars = effect("Max Characters")("Slider");
const fontSize = effect("Font Size")("Slider");
const leadingOffset = effect("Line Leading")("Slider"); // This is now an offset value

// Split into words and track current line length
const words = str.split(' ');
let currentLine = '';
let result = '';

// Process each word
for (let i = 0; i < words.length; i++) {
    const word = words[i];
    
    // Check if adding this word would exceed max chars
    if ((currentLine + word).length > maxChars) {
        // Add current line to result and start new line
        result += currentLine.trim() + '\n';
        currentLine = word + ' ';
    } else {
        // Add word to current line
        currentLine += word + ' ';
    }
}

// Add final line
result += currentLine.trim();

// Create text style with font size and proportional leading
const textStyle = text.sourceText.createStyle()
    .setFontSize(fontSize)
    // Leading is set to 120% of font size plus the offset from slider
    .setLeading(fontSize + leadingOffset)
    .setText(result);

textStyle;