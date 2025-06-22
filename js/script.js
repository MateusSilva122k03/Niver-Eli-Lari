// Função que cria corações

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const size = Math.random() * 20 + 10;
    heart.style.fontSize = `${size}px`;
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    heart.style.opacity = Math.random();

    const rotation = Math.random() * 360;
    heart.style.transform = `rotate(${rotation}deg)`;
    
    heart.innerText = '';

    document.body.appendChild(heart);

// Remove o coração depois que ele sumir da tela

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Cria um coração a cada 500ms

setInterval(createHeart, 500);

// Controle de Música

const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.innerText = '⏸️ Pausar Música';
    } else {
        audio.pause();
        playButton.innerText = '▶️ Tocar Música';
    }
});

// Carta de amor interativa

const abrirCarta = document.getElementById('abrirCarta');
const fecharCarta = document.getElementById('fecharCarta');
const conteudoCarta = document.getElementById('conteudoCarta');

abrirCarta.addEventListener('click', () => {
    conteudoCarta.style.display = 'block';
});

fecharCarta.addEventListener('click', () => {
    conteudoCarta.style.display = 'none';
});

