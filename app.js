const board = document.querySelector('#board');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');
const colors1 = ['#810180' ,'#820180' , '#9b2890' ,'#b0499c' ,'#a33695' , '#c66aa9' , '#d783b4' ,'#c061a5', '#dc8bb6' ,'#eba2bf' , '#fbb8c9'];
const colors2 = ['#75ebd5' ,'#6ae6d7' , '#80ded9' ,'#88d9dc' ,'#8cd6dc' , '#8ed2dd' , '#91cfdc' ,'#97cadf', '#9ec3e0' ,'#a4bee3' , '#aab7e4'];
const SQUARES_NUMBER = 1400;

let colors = colors1;

pink.addEventListener('click', () => { colors = colors1});
blue.addEventListener('click', () => { colors = colors2});

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
};

function setColor(element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
};

let index = 0;

function getRandomColor() {
    
    index++;
    if (index == colors.length) {
        index = 0;
        colors.reverse();

    };
    return colors[index];
};

