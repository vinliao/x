// handle the greetings at "navbar"
if (localStorage.getItem('name')) {
  const greetings = document.getElementById('greetings')
  if (greetings) {
    greetings.innerHTML = ' Welcome back, ' + localStorage.getItem('name')
  }
}

// handle registration form
const registerForm = document.getElementById('register-form')
if (registerForm) {
  registerForm.addEventListener('submit', evt => {
    const isAdmin = registerForm.admin.checked
    let url
    if (isAdmin) {
      url = 'http://localhost:3000/users/signup/admin'
    }
    else {
      url = 'http://localhost:3000/users/signup/'
    }
    const data = {
      name: registerForm.name.value,
      email: registerForm.email.value,
      password: registerForm.password.value
    }

    // This fetch needs cors to be allowed for it to do any put/post op
    fetch(url, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        alert(response.msg)
        window.location.href = '/'
      })
      .catch(err => console.log(err))

    evt.preventDefault()
  })
}

// handle login form
const loginForm = document.getElementById('login-form')
if (loginForm) {
  loginForm.addEventListener('submit', evt => {
    const url = 'http://localhost:3000/users/login'

    const data = {
      email: loginForm.email.value,
      password: loginForm.password.value
    }

    // This fetch needs cors to be allowed for it to do any put/post op
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log(response)
        if (response.ok) {
          return response.json()
        } else {
          alert('Wrong email or password')
          throw new Error(String(response.status) + ' ' + response.statusText)
        }
      })
      .then(response => {
        console.log(response)
        localStorage.setItem('name', response.data.name)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('isAdmin', response.data.isAdmin)
        alert('Welcome back ' + response.data.name)
        window.location.href = '/'
      })
      .catch(err => console.log(err))

    evt.preventDefault()
  })
}

// insert book to table
const bookTable = document.getElementById('book-table')
if (bookTable) {
  const url = 'http://localhost:3000'
  const buyUrl = 'http://localhost:3000/buy'

  fetch(url)
    .then(response => response.json())
    .then(response => {
      response.data.forEach(book => {
        const row = document.createElement('tr')
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><button id="buy-button">Buy</button></td>
        `
        bookTable.appendChild(row)
      });
    })
    .catch(err => console.log(err))

  bookTable.addEventListener('click', evt => {
    if (evt.target.id == 'buy-button') {
      const btn = evt.target
      const token = localStorage.getItem('token')

      // first parent element is the td of buton, second is the tr
      const row = btn.parentElement.parentElement

      // [2] is because isbn is the third column
      const isbn = row.children[2].innerHTML

      // TODO: do some fetch with isbn and token here
      console.log(isbn)
      const data = { isbn: isbn }

      fetch(buyUrl, {
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
          if(response.ok){
            alert('Order successful!')
          }
        })
        .catch(err => console.log(err))
    }
  })
}