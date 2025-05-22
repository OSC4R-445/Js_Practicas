let book = new Object()

book.title = "Js for dummies remaster" ;
book.author = "Oscar Iafrate" ;
book.year = "2025" ;
book.isbn = "7-8184-2384" ;
book.stock = 200 ;

function book (title, author, year, stock, isbn) {

    this.title = title
    this.author = author
    this.year = year
    this.stock = stock
    this.isbn = isbn

    this.informAvaiable = () => {
        
    }

    this.lendBook = () => {

    }

    this.showUser = () => {

    }
}

class Usuario {
    id = ""
    name = ""
    books = []

    constructor (id,name) {
        this.id = id
        this.name = name
    }

    solicitarLibro(book, arrayBooks){

        if (this.libros.some(1 => 1.isbn == book.isbn)) {
            alert ('Ya tienes el libro')
        } else {
            if (book.stock > 0) {
                this.libros.push(book);
                let idxBook = arrayBooks.indexof(book){
                }

            }   else {
                alert("no hay stock del libro")
            }
        }
    }

    returnBook(book, arrayBooks) {
        let idxBook = arrayBooks.indexof(book);
        let idxUserBook = this.libros.indexof(book);
        if (idxBook != -1) {
            arrayBooks[idxBook].stock++
            
        }
        if (idxUserBook != -1) {
            idxUserBook.splice(idxUserBook, 1)
        }

    }
}