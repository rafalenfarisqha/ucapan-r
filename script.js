const btn = document.getElementById('love-btn');
const secretMsg = document.getElementById('secret-message');

btn.addEventListener('click', () => {
    secretMsg.classList.remove('hidden');
    secretMsg.textContent = "I love you more than words can say. Stay with me for a long, long time ya, Raffi! 🥰💕";
    btn.textContent = "Forever Yours ❤️";
    btn.style.backgroundColor = "#cbd5e0";
    btn.style.boxShadow = "none";
    btn.style.cursor = "default";
});