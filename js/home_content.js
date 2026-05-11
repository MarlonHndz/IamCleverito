// Page init:
document.addEventListener("DOMContentLoaded", function () {
    loadHeaderNav();
    loadHomeContent();

    // Nav home_tab Click event
    document.getElementById("home_tab").addEventListener("click", function () {
        cleanContent();
        loadHomeContent();
    });
});



async function loadHomeContent() {
    await loadSection("ui/home/portfolio_home_section.html");
    await loadSection("ui/home/introduction_home_section.html");
    await loadSection("ui/home/developer_home_section.html");
    //await loadSection("ui/home/services_home_section.html");
    await loadSection("ui/footer/footer_section.html");
    initSlider()
}

function loadSection(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector("main").innerHTML += data;
                resolve();
            })
            .catch(error => console.log(error));
    });
}

function cleanContent() {
    document.querySelector("main").innerHTML = '';
}

function initSlider() {
    const track = document.getElementById('sliderTrack');
    const slides = track.querySelectorAll('li');
    const dotsContainer = document.getElementById('sliderDots');
    let current = 0;
    let autoTimer; // 👈 guardamos el timer

    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => { goTo(i); resetTimer(); }); // 👈 reset al hacer clic
        dotsContainer.appendChild(dot);
    });

    function goTo(index) {
        current = index;
        track.style.transform = `translateX(-${current * 25}%)`;
        document.querySelectorAll('.dot').forEach((d, i) =>
            d.classList.toggle('active', i === current));
    }

    function resetTimer() {
        clearInterval(autoTimer);
        autoTimer = setInterval(autoAdvance, 8000); // 👈 reinicia la cuenta
    }

    function autoAdvance() {
        goTo((current + 1) % slides.length); // circular: después del último vuelve al primero
    }

    document.getElementById('sliderPrev').addEventListener('click', () => {
        goTo((current - 1 + slides.length) % slides.length);
        resetTimer(); // 👈 reset también con flechas
    });
    document.getElementById('sliderNext').addEventListener('click', () => {
        goTo((current + 1) % slides.length);
        resetTimer();
    });

    autoTimer = setInterval(autoAdvance, 8000); 
}