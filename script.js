
const playButton = document.querySelector('.play-btn');
const squareContainer = document.querySelector('.square-container');



for ( let i = 0; i < 100; i++) {


    playButton.addEventListener('click', function(){
        squareAdding = SquareAdd();

        squareContainer.append(squareAdding);
        squareAdding.innerHTML = i;

    });

}


const createdSquare = document.querySelector('div.square');
console.log(createdSquare);

createdSquare.addEventListener('click', function(){
    
    createdSquare.classList.toogle('skyblue');

});



function SquareAdd(){
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    return newSquare;
}