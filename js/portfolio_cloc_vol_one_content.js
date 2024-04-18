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
