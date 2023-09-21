
const container = document.getElementById('container');

function createRaindrop(){
    const raindrop = document.createElement('div')
    raindrop.classList.add('raindrop')
    raindrop.style.width = '2px';
    raindrop.style.height = '10px';
    raindrop.style.left = `${Math.random() * 100}%`;
    raindrop.style.top = '0';
    container.appendChild(raindrop);
    raindrop.addEventListener('animationiteration', ()=> {
        container.removeChild(raindrop);
    })
}
function simulateLightning(){
    const lightning = document.querySelector('.lightning');
    lightning.style.display = 'block';
    setTimeout(() => {
        lightning.style.display = 'none';

    }, 200)

}
setInterval(createRaindrop, 200);
container.addEventListener('click', simulateLightning)