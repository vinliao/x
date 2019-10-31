// handle the greetings at "navbar"
if (localStorage.getItem('name')) {
  const greetings = document.getElementById('greetings')
  if (greetings) {
    greetings.innerHTML = ' Welcome back, ' + localStorage.getItem('name')
  }
}

const addBook = document.getElementById('add-book')
if (addBook) {
  // localstorage can only store string!
  if (localStorage.getItem('isAdmin') == 'true') {
    addBook.innerHTML = '<a href="/add.html">Add new book</a>'
  }
}

// handle register form
const registerForm = document.querySelector('#register-form')
if (registerForm) {
  registerForm.addEventListener('submit', evt => {
    const url = 'http://localhost:3000/users'

    const data = {
      email: document.querySelector('#register-email').value,
      password: document.querySelector('#register-password').value,
      isAdmin: document.querySelector('#admin-checkbox').checked
    }

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      window.location.href = '/'
    })

    evt.preventDefault()
  })
}

// Impelement login form using simple search, don't do this in real app!
const loginForm = document.querySelector('#login-form')
if (loginForm) {
  loginForm.addEventListener('submit', evt => {

    let url = 'http://localhost:3000/users'
    const email = document.querySelector('#login-email').value
    const password = document.querySelector('#login-password').value
    url = url + '?password=' + password + '&email=' + email

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          alert('Something went wrong')
          throw new Error(String(response.status) + ' ' + response.statusText)
        }
      })
      .then(response => {
        // the response returns a list, because we're doing a search to the backend
        localStorage.setItem('userId', response[0].id)
        window.location.href = '/'
      })
      .catch(err => console.log(err))

    evt.preventDefault()
  })
}

// add book as admin
const addBookForm = document.getElementById('add-book-form')
if (addBookForm) {
  addBookForm.addEventListener('submit', evt => {
    const token = localStorage.getItem('token')
    const url = 'http://localhost:3000/books'

    const data = {
      title: document.querySelector('#add-book-title').value,
      author: document.querySelector('#add-book-author').value,
      isbn: document.querySelector('#add-book-isbn').value
    }

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json',
        'Authorization': 'Bearer: ' + token
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        window.location.href = '/'
      })
      .catch(err => console.log(err))

    evt.preventDefault()
  })
}

// get books and render it on table
const bookTable = document.querySelector('#book-table')
if (bookTable) {
  const url = 'http://localhost:3000/books'
  const tbody = bookTable.children[1]

  fetch(url)
    .then(response => response.json())
    .then(response => {
      response.forEach(book => {
        const row = document.createElement('tr')
        let tableHtml = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td>
            <button type="button" class="btn btn-sm btn-secondary main-color-bg" data-toggle="modal"
              data-target="#buyModal">
              Buy
            </button>
          </td>
        `
        row.innerHTML = tableHtml
        tbody.appendChild(row)
      });
    })
    .catch(err => console.log(err))
}

// TODO: buy book by clikcing the buy on the home page

// TODO: order functionality
// http://localhost:3000/orders?userId=2