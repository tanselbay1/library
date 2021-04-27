let myLibrary = [
    {
        title : "Harry Potter",
        author : "J.K.Rowling",
        pages : 344,
        isRead : false
    },
    {
        title : "Start With Why",
        author : "Simon Sinek",
        pages : 295,
        isRead : false
    }
];

function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addBookToLibrary(title, author, pages, isRead){
    let newBook = Object.create(Book);
    newBook.title = title;
    newBook.author = author;
    newBook.pages = pages;
    newBook.isRead = isRead;
    myLibrary.push(newBook);
}

function showBooks(){
    const bookList = document.getElementById('book-list');
    bookList.textContent = '';
    myLibrary.map(book => {
        const bookRow = document.createElement('tr');
        bookRow.classList.add('book-list-item');
        bookList.appendChild(bookRow)
        //BOOK NAME
        const bookName = document.createElement('td');
        bookName.textContent = book.title;
        bookRow.appendChild(bookName);
        //BOOK AUTHOR
        const bookAuthor = document.createElement('td');
        bookAuthor.textContent = book.author;
        bookRow.appendChild(bookAuthor);
        //BOOK PAGES
        const bookPages = document.createElement('td');
        bookPages.textContent = book.pages;
        bookRow.appendChild(bookPages);
        //BOOK READ
        const bookRead = document.createElement('td');
        let bookStatus = book.isRead ? (`<input type="checkbox" checked></input>`) : (`<input type="checkbox"></input>`)
        bookRead.innerHTML = bookStatus;
        bookRow.appendChild(bookRead);
        //BOOK TRASH
        const bookTrash = document.createElement('td');
        bookTrash.innerHTML = (`<i class="bsc-trash-delete-bin"></i>`);
        bookRow.appendChild(bookTrash);
    })
}

addBookToLibrary("mybook", 'Tansel', 400, true);
console.log(myLibrary[2].title);

showBooks();

console.log(bookName);

