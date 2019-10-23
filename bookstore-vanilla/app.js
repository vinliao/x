class User {
  constructor(token, name){
    this.token = token
    this.name = name
  }
}

let user

const registerForm = document.getElementById('register-form')
if(registerForm){
  registerForm.addEventListener('submit', evt => {
    const isAdmin = registerForm.admin.checked
    let url
    if(isAdmin){
      url = 'http://localhost:3000/users/signup/admin'
    }
    else{
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

const loginForm = document.getElementById('login-form')
if(loginForm){
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
      .then(response => response.json())
      .then(response => {
        console.log(response)
        user = new User(response.data.token, response.data.name)
        alert('Welcome back ' + user.name)
        window.location.href = '/'
      })
      .catch(err => console.log(err))

    evt.preventDefault()
  })
}