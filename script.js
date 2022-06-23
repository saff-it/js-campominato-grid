
const playButton = document.querySelector('.play-btn');
const squareContainer = document.querySelector('.square-container');



for ( let i = 0; i < 100; i++) {

    playButton.addEventListener('click', function(){
        let squareElement = document.createElement('div');
        squareElement.classList.add('square');

        squareContainer.append(squareElement);


    });
}