document.addEventListener("DOMContentLoaded", function () {
    loadHeaderNav();
    loadWipContent();
});

async function loadWipContent() {
    await loadSection("wip_section.html");
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