// -+-+-+-+-+- Portfolio General Functions -+-+-+-+-+-//
// Header //
function loadHeader(url) {
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

function loadPortfolioHeader(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector("header").innerHTML += data;
                resolve();
                addListenerToHorizontalNavForBook();
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
                document.getElementById("portfolio_body").innerHTML = '';
                document.getElementById("portfolio_body").innerHTML += data;
                resolve();
                loadListListener();
                addListenerToNavListForBook();
            })
            .catch(error => console.log(error));
    });
}
// List behavior //
function loadListListener() {
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
    await loadPortfolioFooterSection("../../../ui/footer/footer_section.html");
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

// List menu click event for small devices //
function addListenerToNavListForBook() {
    var bookContentMenu = document.getElementById('checkbox_list_menu_icon');
    var portfolioListSection = document.getElementById('portfolio_list_section');

    const checkbox = document.getElementById('checkbox_list_menu_icon');
    let isDisplayed = false;

    bookContentMenu.addEventListener('change', () => {
        if (isDisplayed && !event.target.checked) {
            portfolioListSection.style.width = `0px`;
        } else {
            portfolioListSection.style.width = `300px`;
        }
        isDisplayed = !isDisplayed;
    });
}

// Horizontal Nav Behavior //
function addListenerToHorizontalNavForBook() {
    const labels = document.querySelectorAll('.tab');
    const contentTabs = document.querySelector('.content_tabs');

    // Agregar un event listener a cada radio button para detectar el cambio de selección
    labels.forEach(function (label) {
        label.addEventListener('click', moveGliderSpan);
    });


    // Llamar a la función para ajustar el span inicialmente
    moveGliderSpan({
        // target: document.querySelector('input[type="radio"]:checked')
    });

    // Escuchar el evento scroll en el contenedor desplazable
    contentTabs.addEventListener('scroll', moveGliderSpan({
        target: document.querySelector('input[type="radio"]:checked')
    }));

}

// Función para ajustar la posición y el ancho del span
function moveGliderSpan(event) {
    const glider = document.querySelector('.glider');
    const contentTabs = document.querySelector('.content_tabs');
    const scrollHorizontal = contentTabs.scrollLeft;

    const selectedLabel = event.target; // Obtener el input seleccionado
    const rect = selectedLabel.getBoundingClientRect(); // Obtener las dimensiones del input

    // Calcular la posición izquierda relativa al contenedor .content_tabs
    const contentTabsRect = contentTabs.getBoundingClientRect();
    const leftOffset = rect.left - contentTabsRect.left + scrollHorizontal;

    glider.style.width = rect.width + 'px'; // Ajustar el ancho del span al ancho del input
    glider.style.left = leftOffset + 'px'; // Ajustar la posición izquierda del span


    loadSelectedTabContent(selectedLabel)
}
