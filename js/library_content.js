document.addEventListener("DOMContentLoaded", function () {
    loadHeaderNav();
    loadLibraryContent();
});

async function loadLibraryContent() {
    await loadSection("library_portfolio_section.html");
    await loadSection("library_context_section.html");
    await loadSection("library_purpose_section.html");
    await loadSection("../footer/footer_section.html");
    initCardClicks();
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

function initCardClicks() {
    document.querySelectorAll('.card-portfolio[data-read-url]').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.location.href = card.dataset.readUrl;
        });
    });
}