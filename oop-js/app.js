// Using Constructor
function Book(title, author) {
  this.title = title
  this.author = author
}

Book.prototype.summarize = function () {
  return `${this.title} is written by ${this.author}`
}

const book1 = new Book('Book1', 'Author 1')
console.log(book1.summarize())

// Using Object.Create
const bookProto = {
  summarize: function () {
    return `${this.title} is written by ${this.author}`
  }
}

const book2 = Object.create(bookProto)
book2.title = 'super cool title'
book2.author = 'super author'
console.log(book2.summarize())

// Using es6 classes
class BookClass {
  constructor(title, author) {
    this.title = title
    this.author = author
  }

  summarize(){
    return `${this.title} is written by ${this.author}`
  }

  static coolFunction(){
    return 'This is a static function'
  }
}

const book3 = new BookClass('title 3', 'super author')
console.log(book3.summarize())

// this won't work because it's static,
// static function can be called by referencing the class itself
// console.log(book3.coolFunction())

console.log(BookClass.coolFunction())