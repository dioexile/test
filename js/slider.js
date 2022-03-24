// слайдер в таком виде тк в фигме нет ни фотографий (фото слева не меняется), ни текста, ни количества слайдов
const slide = document.querySelector('.slide')
const slide2 = document.querySelector('.slide2')
const slide3 = document.querySelector('.slide3')
const left = document.querySelector('#first-left')
const right = document.querySelector('#first-right')
const left2 = document.querySelector('#second-left')
const right2 = document.querySelector('#second-right')
const left3 = document.querySelector('#third-left')
const right3 = document.querySelector('#third-right')


right.addEventListener('click', () => {
  slide.style.display = 'none'
  slide2.style.display = 'block'
})
right2.addEventListener('click', () => {
  slide2.style.display = 'none'
  slide3.style.display = 'block'
})
right3.addEventListener('click', () => {
  slide3.style.display = 'none'
  slide.style.display = 'block'
})
left.addEventListener('click', () => {
  slide.style.display = 'none'
  slide3.style.display = 'block'
})
left2.addEventListener('click', () => {
  slide2.style.display = 'none'
  slide.style.display = 'block'
})
left3.addEventListener('click', () => {
  slide3.style.display = 'none'
  slide2.style.display = 'block'
})

