document.addEventListener("DOMContentLoaded", function () {
    loadHeaderNav();
    loadPortfolioContentClocVolOne();
    loadPortfolioFooter();
});

// Cargar Header
async function loadHeaderNav() {
    await loadHeader("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_nav_section.html");            
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
