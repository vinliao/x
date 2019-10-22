const registerForm = document.getElementById('register-form')
registerForm.addEventListener('submit', evt => {
  const url = 'http://localhost:3000/users/signup/admin'
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
    .then(data => console.log(data))
    .catch(err => console.log(err))


  evt.preventDefault()
})

document.getElementById('get-admin').addEventListener('click', () => {
  const url = 'http://localhost:3000/users/admin'
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
})