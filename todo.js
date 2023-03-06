    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
      {
      "userId": 14,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
  },
  {
      "userId": 20,
      "id": 2,
      "title": "delectus aut autem",
      "completed": false
  }]
  
  const fetchTodos = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then( (response) => response.json())
      .then ( (json) => arrayOfTodos = json)
  }

const logTodos = () => {
  console.log(arrayOfTodos)
}

      
    

  const populateTodos = () => {
  
    let orderedListElement = document.querySelector('#todo-list')

    for (let index = 0; index < arrayOfTodos.length; index++) {

const todo = arrayOfTodos[index];

const listitem = document.createElement('li')
const text = document.createTextNode(todo.title)
listitem.appendChild(text)
orderedListElement.appendChild(listitem)
    }
  }
  
  const filterTodos = () => {
    let filtered = []
    const result = filtered;
    for (let index =0; index <arrayOfTodos.length; index++) {
const todo = arrayOfTodos[index];
let userId = 2
if (todo.userId === userId) {
  filtered.push(todo)
}

    }
    console.log('filtered', filtered)
    document.getElementById("todo-list").innerHTML= ""
  }

const inputTodos = () => {
  const inputTodos = document.getElementById("userId").value
  const x = Number(inputTodos)
  console.log(x);
  let filtered = []
  for (let index =0; index <arrayOfTodos.length; index++) {
    const todo = arrayOfTodos[index];
    let userId = x
    if (todo.userId === userId) {
      filtered.push(todo)
    } 
  }
  console.log("filtered", filtered)
  document.getElementById("todo-list").innerHTML= "" //starting DOM 
  let orderedListElement = document.querySelector('#todo-list')

  for (let index = 0; index < filtered.length; index++) {

const todo = filtered[index];

const listitem = document.createElement('li')
const text = document.createTextNode(todo.title)
listitem.appendChild(text)
orderedListElement.appendChild(listitem)
}
}
  // get OL by ID
  // loop through arrayOfTodos
    // create a list element
    // create a textnode and make it equal to the title
    // append textnode into list item
    // append the list item into OL