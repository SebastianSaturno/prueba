// Animación de aparición al hacer scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('section, .offer-section, .form-section');
    for (const el of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            el.classList.add('visible');
        }
    }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Contador regresivo para la oferta limitada
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = "00:" + minutes + ":" + seconds;
        if (--timer < 0) {
            display.textContent = "¡Oferta finalizada!";
            clearInterval(interval);
        }
    }, 1000);
}
window.addEventListener('DOMContentLoaded', function () {
    const timerDisplay = document.getElementById('timer');
    if (timerDisplay) {
        startTimer(15 * 60, timerDisplay); // 15 minutos
    }
});
