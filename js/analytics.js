// Cargar Google Analytics (gtag.js) de forma asíncrona
(function() {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-GF1RL6T9E4';
    document.head.appendChild(gaScript);

    // Inicializar Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    
    gtag('js', new Date());
    gtag('config', 'G-GF1RL6T9E4');
})();

// Cargar Microsoft Clarity de forma asíncrona
(function(c, l, a, r, i, t, y) {
    c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "q2v9gpwekl");
