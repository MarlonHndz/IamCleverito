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
            loadPortfolioClocVolTwoBodyClassesInKotlin();
        } else if (inputValue === 'kotlin_in_android') {
            // Lógica para cargar un archivo HTML cuando el valor del input es 'kotlin_in_android'
            loadPortfolioClocVolTwoBodyKotlinInAndroid();
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

// Kotlin fundamentals Body Content //
async function loadPortfolioClocVolTwoBodyFundamentals() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_two/cloc_vol_two_kotlin_fundamentals.html");
}

// Advance functions Body Content //
async function loadPortfolioClocVolTwoBodyAdvanceFunctions() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_two/cloc_vol_two_advance_functions.html");
}

// Classes in Kotlin Body Content //
async function loadPortfolioClocVolTwoBodyClassesInKotlin() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_two/cloc_vol_two_classes_in_kotlin.html");
}

// Kotlin in Android Body Content //
async function loadPortfolioClocVolTwoBodyKotlinInAndroid() {
    await loadPortfolioBody("../../../ui/portfolio/cloc_vol_two/cloc_vol_two_kotlin_in_android.html");
}
