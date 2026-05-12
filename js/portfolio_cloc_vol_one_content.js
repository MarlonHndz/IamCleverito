// portfolio_cloc_vol_one_content.js

document.addEventListener("DOMContentLoaded", function () {
    loadHeaderNav();
    loadPortfolioContentClocVolOne();
    loadPortfolioFooter();
});

// ── Cargar nav principal ──────────────────────────────────────
async function loadHeaderNav() {
    await loadHeader("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_nav_section.html");
}

// ── Iniciar toda la página ────────────────────────────────────
async function loadPortfolioContentClocVolOne() {
    // 1. Tabs del header
    await loadPortfolioClocVolOneContentTabs();

    // 2. Dark mode — este sí puede ir aquí porque el botón está en el header
    initReadingModeToggle();

    // 3. Cargar el body primero
    await loadPortfolioClocVolOneBodyPoo();

    // 4. ✅ Sidebar DESPUÉS del body, porque #portfolio_list_section vive ahí
    initSidebarListener();
}

// ── Content Tabs ──────────────────────────────────────────────
async function loadPortfolioClocVolOneContentTabs() {
    await loadPortfolioHeader("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_content_tabs.html");
}

// ── Body sections ─────────────────────────────────────────────
function loadPortfolioClocVolOneBodyPoo() {
    return loadPortfolioBody("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_poo.html");
}

function loadPortfolioClocVolOneBodyJAVA() {
    return loadPortfolioBody("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_java_concepts.html");
}

function loadPortfolioClocVolOneBodyDesignPatterns() {
    return loadPortfolioBody("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_design_patterns.html");
}

function loadPortfolioClocVolOneBodySolid() {
    return loadPortfolioBody("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_solid.html");
}

function loadPortfolioClocVolOneBodyDryAndKiss() {
    return loadPortfolioBody("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_dry_and_kiss.html");
}

function loadPortfolioClocVolOneBodyWebServices() {
    return loadPortfolioBody("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_web_services.html");
}

function loadPortfolioClocVolOneBodyAndroidComponents() {
    return loadPortfolioBody("../../../ui/portfolio/cloc_vol_one/cloc_vol_one_android_components.html");
}
