
const playButton = document.querySelector('.play-btn');
const squareContainer = document.querySelector('.square-container');



for ( let i = 0; i < 100; i++) {

    playButton.addEventListener('click', function(){
        const squareAdding = SquareAdd();
        
        squareContainer.append(squareAdding);

    });

    
    
}

function SquareAdd(){
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    return newSquare;
}