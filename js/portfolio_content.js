document.addEventListener("DOMContentLoaded", function () {
   // loadPortfolioFooter();
});

async function loadPortfolioFooter() {
    await loadPortfolioFooterSection("../footer/footer_section.html");
}

function loadPortfolioFooterSection(url) {
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