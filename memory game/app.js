document.addEventListener('DOMContentLoaded', () => {
 //card options
 const cardArray = [
	{
		name:'BAR',
		img:'images/BAR.jpg'
	},
	{
		name:'BAR',
		img:'images/BAR.jpg'
	},
	{
		name:'BAY',
		img:'images/BAY.jpg'
	},
	{
		name:'BAY',
		img:'images/BAY.jpg'
	},
	{
		name:'RMA',
		img:'images/RMA.jpg'
	},
	{
		name:'RMA',
		img:'images/RMA.jpg'
	},
	{
		name:'PSG',
		img:'images/PSG.jpg'
	},
	{
		name:'PSG',
		img:'images/PSG.jpg'
	},
	{
		name:'JUV',
		img:'images/JUV.jpg'
	},
	{
		name:'JUV',
		img:'images/JUV.jpg'
	},
	{
		name:'CHE',
		img:'images/CHE.jpg'
	},
	{
		name:'CHE',
		img:'images/CHE.jpg'
	}
	]


  cardArray.sort(() => 0.5 - Math.random())


  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []


  //BOARD
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/field.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }


  //MATCH
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('GOAL!!!')
      cards[optionOneId].setAttribute('src', 'images/done.jpg')
      cards[optionTwoId].setAttribute('src', 'images/done.jpg')
      cardsWon.push(cardsChosen)
    } 
    else {
      cards[optionOneId].setAttribute('src', 'images/field.jpg')
      cards[optionTwoId].setAttribute('src', 'images/field.jpg')
      alert('GOAL KICK! Try Again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'CONGRATULATIONS! YOU HAVE WON THE MATCH!'
    }
  }


  //CARD
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }


  createBoard()


})
