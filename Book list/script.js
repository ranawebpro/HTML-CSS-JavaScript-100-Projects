function addBook() {
    var titleInput = document.getElementById('title');
    var authorInput = document.getElementById('author');
    var title = titleInput.value;
    var author = authorInput.value;

    if (title && author) {
        var bookList = document.getElementById('book-list');
        var li = document.createElement('li');
        li.innerHTML = `
            <span>${title} by ${author}</span>
            <button class="delete-btn" onclick="removeBook(this)">Delete</button>
        `;
        bookList.appendChild(li);

        
        titleInput.value = '';
        authorInput.value = '';
    }
}

function removeBook(button) {
    var li = button.parentElement;
    li.remove();
}
