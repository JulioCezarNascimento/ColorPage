const container = document.querySelector('.container');
const color = document.querySelector('#color'); // Corrigi o seletor para o ID correto

const defaultColor = '#000';
container.style.backgroundColor = `${defaultColor}`;

function changeColor() {
    container.style.backgroundColor = `${color.value}`;
}
