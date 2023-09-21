
function getRandomColor(){
    const letters = '01234556789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}
function changeColor(){
    const button = document.querySelector('button');
    const color = getRandomColor();
    button.style.backgroundColor = color;
    document.getElementById('colorCode').textContent = `Color Code: ${color}`;
}