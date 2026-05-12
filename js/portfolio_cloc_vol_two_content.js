// portfolio_cloc_vol_two_content.js
 
document.addEventListener("DOMContentLoaded", function () {
    loadHeaderNav();
    loadPortfolioContentClocVolTwo();
    loadPortfolioFooter();
});
 
// ── Cargar nav principal ──────────────────────────────────────
async function loadHeaderNav() {
    await loadHeader("../../../ui/portfolio/cloc_vol_two/cloc_vol_two_nav_section.html");
}
 
// ── Iniciar toda la página ────────────────────────────────────
async function loadPortfolioContentClocVolTwo() {
    // 1. Tabs del header
    await loadPortfolioClocVolTwoContentTabs();
 
    // 2. Dark mode — botón vive en el header, puede inicializarse ya
    initReadingModeToggle();
 
    // 3. Cargar el body primero
    await loadPortfolioClocVolTwoBodyFundamentals();
 
    // 4. Sidebar DESPUÉS del body, porque #portfolio_list_section vive ahí
    initSidebarListener();
}
 
// ── Content Tabs ──────────────────────────────────────────────
async function loadPortfolioClocVolTwoContentTabs() {
    await loadPortfolioHeader("../../../ui/portfolio/cloc_vol_two/cloc_vol_two_content_tabs.html");
}
 
// ── Body sections ─────────────────────────────────────────────
function loadPortfolioClocVolTwoBodyFundamentals() {
    return loadPortfolioBody("../../../ui/portfolio/cloc_vol_two/cloc_vol_two_kotlin_fundamentals.html");
}
 
function loadPortfolioClocVolTwoBodyAdvanceFunctions() {
    return loadPortfolioBody("../../../ui/portfolio/cloc_vol_two/cloc_vol_two_advance_functions.html");
}
 
function loadPortfolioClocVolTwoBodyClassesInKotlin() {
    return loadPortfolioBody("../../../ui/portfolio/cloc_vol_two/cloc_vol_two_classes_in_kotlin.html");
}
 
function loadPortfolioClocVolTwoBodyKotlinCoroutines() {
    return loadPortfolioBody("../../../ui/portfolio/cloc_vol_two/cloc_vol_two_kotlin_coroutines.html");
}
 
function loadPortfolioClocVolTwoBodyKotlinInAndroid() {
    return loadPortfolioBody("../../../ui/portfolio/cloc_vol_two/cloc_vol_two_kotlin_in_android.html");
}