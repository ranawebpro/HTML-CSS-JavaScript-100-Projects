function addBook() {
    var titleInput = document.getElementById('title');
    var authorInput = document.getElementById('author');
    var title = titleInput.value;
    var author = authorInput.value;

    if (title && author) {
        var bookList = document.getElementById('book-list');
        var li = document.createElement('li');
        li.textContent = `${title} by ${author}`;
        bookList.appendChild(li);

        // Clear input fields
        titleInput.value = '';
        authorInput.value = '';
    }
}
