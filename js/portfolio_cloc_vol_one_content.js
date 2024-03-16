// --- CLOC VOL ONE --- //
function loadPortfolioContentClocVolOne(){
    loadPortfolioClocVolOneContentTabs();
    loadPortfolioClocVolOneBodyPoo();
    loadPortfolioFooter();
}


// Content Tabs //
async function loadPortfolioClocVolOneContentTabs() {
    await loadPortfolioHeader("../../ui/portfolio/cloc_vol_one/cloc_vol_one_content_tabs.html");
}

// POO Body Content //
async function loadPortfolioClocVolOneBodyPoo() {
    await loadPortfolioBody("../../ui/portfolio/cloc_vol_one/cloc_vol_one_poo.html");
}
