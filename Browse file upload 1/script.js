function displayFileName() {
    var fileInput = document.getElementById('fileInput');
    var fileNameDisplay = document.getElementById('fileName');

    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = 'Selected file: ' + fileInput.files[0].name;
    } else {
        fileNameDisplay.textContent = 'No file selected';
    }
}
