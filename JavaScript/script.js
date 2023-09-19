const container = document.querySelector('.container');
const color = document.querySelector('input');

const defaultColor = '#000';
container.style.backgroundColor = '${defaultColor}';

function changeColor() {
    container.style.backgroundColor = '${color.value}';
}