document.addEventListener("DOMContentLoaded", function () {
    loadHeaderNav();
    loadPortfolioContentClocVolTwo();
    loadPortfolioFooter();
});

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
        if (inputValue === 'fundamentals') {
            // Lógica para cargar un archivo HTML cuando el valor del input es 'fundamentals'
            loadPortfolioClocVolTwoBodyFundamentals();
        } else if (inputValue === 'advance_functions') {
            // Lógica para cargar un archivo HTML cuando el valor del input es 'advance_functions'
            loadPortfolioClocVolTwoBodyAdvanceFunctions();
        } else if (inputValue === 'classes_in_kotlin') {
            // Lógica para cargar un archivo HTML cuando el valor del input es 'classes_in_kotlin'
            loadPortfolioClocVolTwoBodyDesignPatterns();
        } else if (inputValue === 'coroutines') {
            // Lógica para cargar un archivo HTML cuando el valor del input es 'coroutines'
            loadPortfolioClocVolTwoBodySolid();
        } else if (inputValue === 'flow_livedata') {
            // Lógica para cargar un archivo HTML cuando el valor del input es 'flow_livedata'
            loadPortfolioClocVolTwoBodyDryAndKiss();
        } else if (inputValue === 'kotlin_in_android') {
            // Lógica para cargar un archivo HTML cuando el valor del input es 'kotlin_in_android'
            loadPortfolioClocVolTwoBodyWebServices();
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });

        var bookContentMenu = document.getElementById('checkbox_list_menu_icon');
        bookContentMenu.checked = false;
    }
}

// --- CLOC VOL TWO --- //
function loadPortfolioContentClocVolTwo(){
    loadPortfolioClocVolTwoContentTabs();
    loadPortfolioClocVolTwoBodyFundamentals();
}

// Content Tabs //
async function loadPortfolioClocVolTwoContentTabs() {
    await loadPortfolioHeader("../../../ui/portfolio/cloc_vol_two/cloc_vol_two_content_tabs.html");
}

// POO Body Content //
async function loadPortfolioClocVolTwoBodyFundamentals() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_two/cloc_vol_two_kotlin_fundamentals.html");
}

// JAVA Body Content //
async function loadPortfolioClocVolTwoBodyAdvanceFunctions() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_two/cloc_vol_two_advance_functions.html");
}

// Design Partens Body Content //
async function loadPortfolioClocVolTwoBodyDesignPatterns() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_Two/cloc_vol_Two_design_patterns.html");
}

// Solid Body Content //
async function loadPortfolioClocVolTwoBodySolid() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_Two/cloc_vol_Two_solid.html");
}

// Dry & Kiss Body Content //
async function loadPortfolioClocVolTwoBodyDryAndKiss() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_Two/cloc_vol_Two_dry_and_kiss.html");
}

// Web Services Body Content //
async function loadPortfolioClocVolTwoBodyWebServices() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_Two/cloc_vol_Two_web_services.html");
}

// Android Components Body Content //
async function loadPortfolioClocVolTwoBodyAndroidComponents() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_Two/cloc_vol_Two_android_components.html");
}
