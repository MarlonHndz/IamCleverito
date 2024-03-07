// Page init:
document.addEventListener("DOMContentLoaded", function () {
    loadHeaderNav();
    loadHomeContent();
});

// Nav home_tab Click event
document.getElementById("home_tab").addEventListener("click", function () {
    cleanContent();
    loadHomeContent();
});

async function loadHomeContent() {
    await loadSection("ui/home/introduction_home_section.html");
    await loadSection("ui/home/portfolio_home_section.html");
    await loadSection("ui/home/developer_home_section.html");
    await loadSection("ui/home/services_home_section.html");
    await loadSection("ui/footer/footer_section.html");
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