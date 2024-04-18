// --- CLOC VOL ONE --- //
function loadPortfolioContentClocVolOne(){
    loadPortfolioClocVolOneContentTabs();
    loadPortfolioClocVolOneBodyPoo();
}

// Content Tabs //
async function loadPortfolioClocVolOneContentTabs() {
    await loadPortfolioHeader("../../ui/portfolio/cloc_vol_one/cloc_vol_one_content_tabs.html");
}

// POO Body Content //
async function loadPortfolioClocVolOneBodyPoo() {
    await loadPortfolioBody("../../ui/portfolio/cloc_vol_one/cloc_vol_one_poo.html");
}

// JAVA Body Content //
async function loadPortfolioClocVolOneBodyJAVA() {
    await loadPortfolioBody("../../ui/portfolio/cloc_vol_one/cloc_vol_one_java_concepts.html");
}

// Design Partens Body Content //
async function loadPortfolioClocVolOneBodyDesignPatterns() {
    await loadPortfolioBody("../../ui/portfolio/cloc_vol_one/cloc_vol_one_design_patterns.html");
}

// Solid Body Content //
async function loadPortfolioClocVolOneBodySolid() {
    await loadPortfolioBody("../../ui/portfolio/cloc_vol_one/cloc_vol_one_solid.html");
}

// Dry & Kiss Body Content //
async function loadPortfolioClocVolOneBodyDryAndKiss() {
    await loadPortfolioBody("../../ui/portfolio/cloc_vol_one/cloc_vol_one_dry_and_kiss.html");
}
