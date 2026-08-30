const passwordInput = document.getElementById('password-input');
const submitBtn = document.getElementById('submit-btn');
const errorMsg = document.getElementById('error-msg');

const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');
const nextBtn = document.getElementById('next-btn');
const bgMusic = document.getElementById('bg-music');

// Kata sandi untuk masuk (bisa kamu ganti di sini, misal "raffi" atau tanggal jadian)
const secretPassword = "raffi"; 

submitBtn.addEventListener('click', () => {
    const userVal = passwordInput.value.trim().toLowerCase();
    if (userVal === secretPassword) {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
        
        // Putar musik romantis saat password benar
        bgMusic.play().catch(error => {
            console.log("Autoplay dicegah browser, butuh interaksi tambahan.");
        });
    } else {
        errorMsg.classList.remove('hidden');
    }
});

nextBtn.addEventListener('click', () => {
    step2.classList.add('hidden');
    step3.classList.remove('hidden');
});