document.addEventListener("DOMContentLoaded", function () {
    loadHeaderNav();
    loadLibraryContent();
});

async function loadLibraryContent() {
    await loadSection("library_portfolio_section.html");
    await loadSection("library_context_section.html");
    await loadSection("library_purpose_section.html");
    await loadSection("../footer/footer_section.html");
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