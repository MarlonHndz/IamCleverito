document.addEventListener("DOMContentLoaded", function () {
    loadHeaderNav();
    loadPortfolioContentClocVolOne();
    loadPortfolioFooter();
});

// Header //
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

// Función para cargar el contenido según el tab seleccionado
async function loadSelectedTabContent(selectedLabel) {

    const inputId = selectedLabel.getAttribute('for'); // Obtener el ID del input asociado al label

    const associatedInput = document.getElementById(inputId); // Usar el ID para seleccionar el input correspondiente

    // Asegurarte de que el input exista
    if (associatedInput) {
        // Obtén el valor del input radio seleccionado
        const inputValue = associatedInput.value;

        // Realizar la acción que deseas con el valor del input
        console.log(`El valor del input radio seleccionado es: ${inputValue}`);

        // Aquí puedes agregar la lógica para cargar un archivo HTML o realizar cualquier otra acción
        // según el valor del input.
        if (inputValue === 'POO') {
            // Lógica para cargar un archivo HTML cuando el valor del input es 'POO'
            loadPortfolioClocVolOneBodyPoo();
        } else if (inputValue === 'JAVA') {
            // Lógica para cargar un archivo HTML cuando el valor del input es 'JAVA - Conceptos básicos'
            loadPortfolioClocVolOneBodyJAVA();
        } else if (inputValue === 'design_patterns') {
            // Lógica para cargar un archivo HTML cuando el valor del input es 'Design paterns'
            loadPortfolioClocVolOneBodyDesignPatterns();
        } else if (inputValue === 'SOLID') {
            // Lógica para cargar un archivo HTML cuando el valor del input es 'SOLID'
            loadPortfolioClocVolOneBodySolid();
        } else if (inputValue === 'Dry_Kiss') {
            // Lógica para cargar un archivo HTML cuando el valor del input es 'Dry_Kiss'
            loadPortfolioClocVolOneBodyDryAndKiss();
        } else if (inputValue === 'web_services') {
            // Lógica para cargar un archivo HTML cuando el valor del input es 'web_services'
            loadPortfolioClocVolOneBodyWebServices();
        } else if (inputValue === 'Android_components') {
            // Lógica para cargar un archivo HTML cuando el valor del input es 'Android_components'
            loadPortfolioClocVolOneBodyAndroidComponents();
        }
        // Y así sucesivamente para los otros valores de input

        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });

        var bookContentMenu = document.getElementById('checkbox_list_menu_icon');
        bookContentMenu.checked = false;
    }
}

// --- CLOC VOL ONE --- //
function loadPortfolioContentClocVolOne(){
    loadPortfolioClocVolOneContentTabs();
    loadPortfolioClocVolOneBodyPoo();
}

// Content Tabs //
async function loadPortfolioClocVolOneContentTabs() {
    await loadPortfolioHeader("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_content_tabs.html");
}

// POO Body Content //
async function loadPortfolioClocVolOneBodyPoo() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_poo.html");
}

// JAVA Body Content //
async function loadPortfolioClocVolOneBodyJAVA() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_java_concepts.html");
}

// Design Partens Body Content //
async function loadPortfolioClocVolOneBodyDesignPatterns() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_design_patterns.html");
}

// Solid Body Content //
async function loadPortfolioClocVolOneBodySolid() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_solid.html");
}

// Dry & Kiss Body Content //
async function loadPortfolioClocVolOneBodyDryAndKiss() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_dry_and_kiss.html");
}

// Web Services Body Content //
async function loadPortfolioClocVolOneBodyWebServices() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_web_services.html");
}

// Android Components Body Content //
async function loadPortfolioClocVolOneBodyAndroidComponents() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_android_components.html");
}
