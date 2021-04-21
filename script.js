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

addBookToLibrary("mybook", 'Tansel', 400, true);
console.log(myLibrary[2].title);