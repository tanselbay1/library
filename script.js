let myLibrary = [
    {
        title : "Harry Potter and the Goblet of Fire",
        author : "J.K.Rowling",
        pages : 734,
        isRead : true
    },
    {
        title : "Start With Why",
        author : "Simon Sinek",
        pages : 255,
        isRead : false
    },
    {
        title : "Eat That Frog",
        author : "Brian Tracy",
        pages : 144,
        isRead : true
    }
];

//USING LOCAL STORAGE TO BRING BOOKS
if(JSON.parse(localStorage.getItem('books')).length === 0){
    //If localstorage is empty mylibrary dummy will work
}else if(localStorage.getItem('books')){
    const localBooks = JSON.parse(localStorage.getItem('books'));
    myLibrary = localBooks;
}



showBooks();

//BOOK CONSTRUCTOR
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
    showBooks();
}

function showBooks(){
    localStorage.setItem('books', JSON.stringify(myLibrary));
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
        let bookStatus = book.isRead ? (`<label class="checkbox">
        <input type="checkbox" class="check-box cx" checked/><span></span></label>`) : (`<label class="checkbox">
        <input type="checkbox" class="check-box cx" /><span></span></label>`)
        bookRead.innerHTML = bookStatus;
        bookRow.appendChild(bookRead);
        //BOOK TRASH
        let bookTrash = document.createElement('td');
        bookTrash.classList.add('trash-bin');
        bookTrash.innerHTML = (`<i class="bsc-trash-delete-bin">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"     xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H21M5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M14 11V17" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M10 11V17" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>              
                </i>`);
        bookRow.appendChild(bookTrash);
    })
    checkboxCheck();
}
    
function formValidation(){
    const bookForm = document.getElementById('book-form');
    const bookName = document.getElementById('bookName');
    const bookAuthor = document.getElementById('bookAuthor');
    const bookPages = document.getElementById('bookPages');
    const checkbox = document.querySelector('.check-box');
    if (checkbox.checked){
        addBookToLibrary(bookName.value, bookAuthor.value, bookPages.value, true);
    }else {
        addBookToLibrary(bookName.value, bookAuthor.value, bookPages.value, false);
    }
    bookForm.reset();
}

let form = document.getElementById('book-form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    checkboxList = Array.from(document.querySelectorAll(".cx"));
    formValidation();
});

//REMOVE FUNCTION
document.addEventListener('click', (event) => {
    const { target } = event;
    let tr = target.parentNode.parentNode.parentNode.rowIndex - 1;
    if(target.parentNode.classList.contains('bsc-trash-delete-bin')){
        myLibrary.splice(tr, 1);
        showBooks();
    }else if (target.parentNode.parentNode.classList.contains('bsc-trash-delete-bin')){
        tr = target.parentNode.parentNode.parentNode.parentNode.rowIndex - 1;
        myLibrary.splice(tr, 1);
        showBooks();
    }
}) 

//CHANGE READ STATUS OF A BOOK
function checkboxCheck(){
    let checkboxList = Array.from(document.querySelectorAll(".cx"));
    for (let i=0; i<checkboxList.length; i++){
        checkboxList[i].addEventListener('click', function(){
            if(checkboxList[i].checked === true){
                myLibrary[i].isRead = true;
            }else if(checkboxList[i].checked === false){
                myLibrary[i].isRead = false;
            }
        })
    }
}
checkboxCheck();
