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

// List behavior //
let listElements = document.querySelectorAll('.list_title_father');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {

        listElement.classList.toggle('arrow')

        let height = 0;
        let childList = listElement.nextElementSibling; // toma al elemento siguiente

        if (childList.clientHeight == "0") {
            // height = childList.scrollHeight;
            childList.querySelectorAll('li').forEach(li => {
                height += li.offsetHeight;
            });
        }

        childList.style.height = `${height}px`

    })
});
