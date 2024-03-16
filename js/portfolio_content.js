document.addEventListener("DOMContentLoaded", function () {
    loadPortfolioContentClocVolOne();
});

// Header //
function loadPortfolioHeader(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector("header").innerHTML += data;
                resolve();
            })
            .catch(error => console.log(error));
    });
}

// Body //
function loadPortfolioBody(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById("portfolio_body").innerHTML += data;
                resolve();
                loadListListener();
            })
            .catch(error => console.log(error));
    });
}
// List behavior //
function loadListListener(){
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
}

// Footer //
async function loadPortfolioFooter() {
    await loadPortfolioFooterSection("../../ui/footer/footer_section.html");
}

function loadPortfolioFooterSection(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById("portfolio_footer_section").innerHTML += data;
                resolve();
            })
            .catch(error => console.log(error));
    });
}
