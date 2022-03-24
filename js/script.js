let list = document.querySelector('.store-content')
let items = document.querySelectorAll('.store-content__item')
let button = document.querySelector('.filter')
let buttonText = document.querySelector('.filter span')


button.addEventListener('click', () => {
  if(buttonText.innerHTML == 'Cheaper First'){
    let sorted = [...items].sort((a,b) => a.id - b.id)
    list.innerHTML = ''
    for(let i of sorted){
      list.appendChild(i)
    }
    buttonText.innerHTML = 'More Expensive'
  } else {
    let sorted = [...items].sort((a,b) => b.id - a.id)
    list.innerHTML = ''
    for(let i of sorted){
      list.appendChild(i)
    }
    buttonText.innerHTML = 'Cheaper First'
  }
})

 


