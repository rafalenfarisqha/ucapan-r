let score = 0;
const scoreDisplay = document.getElementById('score');
const heart = document.getElementById('target-heart');
const playArea = document.getElementById('play-area');
const secretMessage = document.getElementById('secret-message');

function moveHeart() {
    const maxX = playArea.clientWidth - 40;
    const maxY = playArea.clientHeight - 40;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    heart.style.left = randomX + 'px';
    heart.style.top = randomY + 'px';
}

heart.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveHeart();

    if (score >= 10) {
        secretMessage.classList.remove('hidden');
        heart.style.display = 'none';
    }
});

// Pindahkan posisi hati pertama kali
moveHeart();