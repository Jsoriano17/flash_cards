const flashTitle = document.getElementById('flash-title')
const flashInfo = document.getElementById('flash-info')
const next = document.getElementById('next')
const deletes = document.getElementById('delete')
const userInputTitle = document.querySelector('user-input-title')
const userInputInfo = document.querySelector('user-input-info')
const userEditTitle = document.querySelector('user-edit-title')
const userEditInfo = document.querySelector('user-edit-info')


let cards = [
    {title: "Arrow Function", info: "Arrow functions are a new short hand to writing functions. Its important to know that they have a very key important difference from normal function, that difference is the 'this' keyword. 'this' has a different scope in the arrow function."},
    {title: "Let", info: "Let works very similar to var the difference being the scope, let has a local scope"},
    {title: "Const", info: "Const declares variables that will have the same value through out the program"},
    {title: "Var", info: "Var can declare any variable and has a global scope which means it can be accessed from anywhere"}
]

let flashHeader = document.getElementById('flash-header')
let flashInfoHeader = document.getElementById('flash-info-header')
let flashInfoDesc = document.getElementById('flash-info-desc')
var num = 0
function setCardIndex () {
num = 0
flashHeader.innerHTML = cards[num].title
flashInfoHeader.innerHTML = cards[num].title
flashInfoDesc.innerHTML = cards[num].info
}

setCardIndex()

//display and hide cards

flashTitle.addEventListener('click', () => {
    flashTitle.style.display = 'none'
    flashInfo.style.display = 'block'
})

flashInfo.addEventListener('click', () => {
    flashTitle.style.display = 'block'
    flashInfo.style.display = 'none'
})

next.addEventListener('click', (i) => {
    if (num < cards.length) {
    num ++
    flashHeader.innerHTML = cards[num].title
    flashInfoHeader.innerHTML = cards[num].title
    flashInfoDesc.innerHTML = cards[num].info
    } else {
        setCardIndex()
    }

})
deletes.addEventListener('click', () => {
  destroy = num 
  cards.splice(destroy, destroy + 1)

})

function getInfo() {
    let userTitle = document.querySelector('.user-input-title').value
    let userInfo = document.querySelector('.user-input-info').value
    let newObj = {title: userTitle, info: userInfo}
    let newCard = cards.push(newObj)
    setCardIndex()
  }

  function getInfoEdit() {
    let userTitle = document.querySelector('.user-edit-title').value
    let userInfo = document.querySelector('.user-edit-info').value
    let card = num 
    cards[card] =  {title: userTitle, info: userInfo}
    setCardIndex()
  }
