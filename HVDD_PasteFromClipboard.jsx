/*
HVDD_PasteFromClipboard
Author: Hugo van den Doel
Website: http://hugovdd.com
Description: Lower case text in your clipboard
*/

function PasteFromClipboard() {
  app.beginUndoGroup("Paste From Clipboard");

  (function() {
    var clipboardContent = getClipboardContent();
    alert(clipboardContent);

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
    })();
  
  app.endUndoGroup();
}

PasteFromClipboard();
