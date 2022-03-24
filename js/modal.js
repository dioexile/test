let open = document.querySelector('.form-btn__btn')
let close = document.querySelector('.modal-dialog__close')
let modal = document.querySelector('.modal')
let submitButton = document.querySelector('#submit') 
let modalDialog = document.querySelector('.modal-dialog')
let todos = document.querySelector('.todos')
let modalForm = document.querySelector('.modal-form')
let loader = document. querySelector('#loading')

open.addEventListener('click', (e)=>{
  e.preventDefault()
  modal.style.display = 'block'
})
close.addEventListener('click', (e)=>{
  e.preventDefault()
  modal.style.display = 'none'
})
document.addEventListener('click', (e) => {
  if(e.target === modal){
    modal.style.display = 'none'
  }
})

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  modalForm.innerHTML = ''
  todos.style.display = 'block'
  loader.style.display = 'inline-block'
  const createTodoElement = (item) => {
    const todoElement = document.createElement('li');
    todoElement.appendChild(document.createTextNode(item.title));
    return todoElement;
  };
  
  const updateTodoList = todoItems => {
    const todoList = document.querySelector('ul');
    if (Array.isArray(todoItems) && todoItems.length > 0) {
      todoItems.map(todoItem => {
        todoList.appendChild(createTodoElement(todoItem));
      });
    } else if (todoItems) {
      todoList.appendChild(createTodoElement(todoItems));
    }
  };
  
  const main = async () => {
    loader.style.display = 'none'
    modalDialog.style.top = '15%'
    updateTodoList(await getTodoItems());
  };
  
  setTimeout(main, 1000)

  
  
})


