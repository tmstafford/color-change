let box = document.querySelector("#box");
let button = document.querySelector("#button");

let colors = ['#7DF9FF', '#00A36C', '#CCCCFF', '#E97451', '#C0C0C0', '#DFFF00', '#FF69B4', '#800080', '#800020', '#0F52BA'];

button.addEventListener('click', function() {
    let index = parseInt((Math.random() * colors.length) + 1);

    box.style.background = `${colors[index]}`;
});