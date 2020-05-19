/*push, querySelector, setAttribute(), getAttribute(), createElement(), appendChild(), Math.random(), sort(), For loops*/

document.addEventListener("DOMContentLoaded", () => {

    const cardArray = [
        {
            name: 'rainbow',
            img: 'images/1.jpg'
        },
        {
            name: 'rainbow',
            img: 'images/1.jpg'
        },
        {
            name: 'redRose',
            img: 'images/2.jpg'
        },
        {
            name: 'redRose',
            img: 'images/2.jpg'
        },
        {
            name: 'bouquet',
            img: 'images/3.jpg'
        },
        {
            name: 'bouquet',
            img: 'images/3.jpg'
        },
        {
            name: 'sunflowers',
            img: 'images/4.jpg'
        },
        {
            name: 'sunflowers',
            img: 'images/4.jpg'
        },
        {
            name: 'pink',
            img: 'images/5.jpg'
        },
        {
            name: 'pink',
            img: 'images/5.jpg'
        },
        {
            name: 'blue',
            img: 'images/6.jpg'
        },
        {
            name: 'blue',
            img: 'images/6.jpg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //create your board
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.jpg');
            cards[optionTwoId].setAttribute('src', 'images/white.jpg');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.jpg');
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }

    //flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard()
})