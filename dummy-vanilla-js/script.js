document.getElementById('coolbutton').addEventListener('click', () => {
  const dataList = ['hello', 'my', 'friend']
  const cooldiv = document.getElementById('cooldiv')
  const row = document.createElement('ul')

  let htmlList
  dataList.forEach((str) => {
    if (!htmlList) {
      htmlList = `<li>${str}</li>`
    }
    else {
      htmlList += `<li>${str}</li>`
    }
  })

  row.innerHTML = htmlList

  cooldiv.appendChild(row)
})

// one cool note: the function above appends an <ul> element to the div
// which means we can append as much as we want. The bottom function on
// the other hand will search for the <ul> element on the document
// then set the value of it (innerHTML)

document.getElementById('todo-button').addEventListener('click', () => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  fetch(url)
    // fetch doesn't automatically return the json data, it returns
    // an object that we can interact it with, to get the json data, we
    // can call the .json() function which returns a promise
    .then(response => {
      return response.json()
    })
    .then(data => {
      const todoDiv = document.getElementById('todo-list')

      // returned data is 200 in length, take the first 5
      const slicedData = data.slice(0, 5)
      let htmlTodo
      slicedData.forEach(todo => {
        if (!htmlTodo) {
          htmlTodo = `<li>${todo.title}</li>`
        }
        else {
          htmlTodo += `<li>${todo.title}</li>`
        }
      })

  todoDiv.innerHTML = htmlTodo
})
  .catch(err => console.log(err))
})

document.getElementById('server-button').addEventListener('click', () => {
  const url = 'http://localhost:3000/dummy'
  fetch(url)
    .then(response => {
      return response.text()
    })
    .then(data => {
      const p = document.getElementById('server-paragraph')
      p.innerHTML = data
    })
    .catch(err => console.log(err))
})