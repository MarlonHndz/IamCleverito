let isLoadingTab = false; // 🔒 evita race conditions

// -+-+-+-+-+- Header -+-+-+-+-+-//
function loadHeader(url) {
    return new Promise((resolve) => {
        fetch(url)
            .then(r => r.text())
            .then(data => {
                document.querySelector("header").innerHTML += data;
                resolve();
            })
            .catch(err => { console.error("loadHeader:", err); resolve(); });
    });
}

function loadPortfolioHeader(url) {
    return new Promise((resolve) => {
        fetch(url)
            .then(r => r.text())
            .then(data => {
                document.querySelector("header").innerHTML += data;
                resolve();
                // Listeners del header: solo se registran UNA vez aquí
                addListenerToHorizontalNavForBook();
            })
            .catch(err => { console.error("loadPortfolioHeader:", err); resolve(); });
    });
}

// -+-+-+-+-+- Body -+-+-+-+-+-//
function loadPortfolioBody(url) {
    if (isLoadingTab) return Promise.resolve(); // 🔒 evitar doble carga
    isLoadingTab = true;

    return new Promise((resolve) => {
        fetch(url)
            .then(r => r.text())
            .then(data => {
                const body = document.getElementById("portfolio_body");
                body.innerHTML = data;
                resolve();
                loadListListener();
                initSidebarListener();
            })
            .catch(err => { console.error("loadPortfolioBody:", err); resolve(); })
            .finally(() => { isLoadingTab = false; });
    });
}

// -+-+-+-+-+- Footer -+-+-+-+-+-//
async function loadPortfolioFooter() {
    await loadPortfolioFooterSection("../../../ui/footer/footer_section.html");
}

function loadPortfolioFooterSection(url) {
    return new Promise((resolve) => {
        fetch(url)
            .then(r => r.text())
            .then(data => {
                document.getElementById("portfolio_footer_section").innerHTML += data;
                resolve();
            })
            .catch(err => { console.error("loadPortfolioFooterSection:", err); resolve(); });
    });
}

// -+-+-+-+-+- List (nav lateral, submenús) -+-+-+-+-+-//
function loadListListener() {
    const listElements = document.querySelectorAll('.list_title_father');
    listElements.forEach(el => {
        // Clonar para eliminar listeners previos antes de agregar el nuevo
        const clone = el.cloneNode(true);
        el.parentNode.replaceChild(clone, el);

        clone.addEventListener('click', () => {
            clone.classList.toggle('arrow');
            const childList = clone.nextElementSibling;
            if (!childList) return;

            if (childList.clientHeight > 0) {
                childList.style.height = '0px';
            } else {
                let height = 0;
                childList.querySelectorAll('li').forEach(li => { height += li.offsetHeight; });
                childList.style.height = `${height}px`;
            }
        });
    });
}

// -+-+-+-+-+- Sidebar: se inicializa UNA sola vez -+-+-+-+-+-//
function initSidebarListener() {
    const checkbox = document.getElementById('checkbox_list_menu_icon');
    const sidebar = document.getElementById('portfolio_list_section');
    const overlay = document.getElementById('sidebar_overlay');

    if (!checkbox || !sidebar) return;

    // Función centralizada para abrir/cerrar
    function setSidebar(open) {
        if (open) {
            sidebar.classList.add('sidebar-open');
            if (overlay) overlay.classList.add('overlay-visible');
            checkbox.checked = true;
        } else {
            sidebar.classList.remove('sidebar-open');
            if (overlay) overlay.classList.remove('overlay-visible');
            checkbox.checked = false;
        }
    }

    checkbox.addEventListener('change', () => setSidebar(checkbox.checked));

    // Cerrar al hacer clic fuera (overlay)
    if (overlay) {
        overlay.addEventListener('click', () => setSidebar(false));
    }

    // Cerrar al hacer clic en un link del sidebar (en móvil)
    sidebar.addEventListener('click', (e) => {
        if (e.target.matches('a.list_title:not(.list_title_father)')) {
            // Solo en breakpoint donde el sidebar es un drawer
            if (window.innerWidth <= 1285) {
                setSidebar(false);
            }
        }
    });
}

// -+-+-+-+-+- Tabs horizontales -+-+-+-+-+-//
function addListenerToHorizontalNavForBook() {
    const labels = document.querySelectorAll('.tab');
    const contentTabs = document.querySelector('.content_tabs');
    if (!labels.length || !contentTabs) return;

    labels.forEach(label => {
        label.addEventListener('click', (e) => {
            moveGliderSpan(e.currentTarget); // 👈 pasamos el label directamente
        });
    });

    // Posición inicial del glider con el primer tab activo
    const firstChecked = document.querySelector('input[type="radio"]:checked');
    if (firstChecked) {
        const firstLabel = document.querySelector(`label[for="${firstChecked.id}"]`);
        if (firstLabel) moveGliderSpan(firstLabel);
    }

    // ✅ Scroll: pasamos la función como callback (sin invocarla)
    contentTabs.addEventListener('scroll', () => {
        const checkedInput = document.querySelector('input[type="radio"]:checked');
        if (checkedInput) {
            const currentLabel = document.querySelector(`label[for="${checkedInput.id}"]`);
            if (currentLabel) moveGliderSpan(currentLabel, /* onlyGlider */ true);
        }
    });
}

// Mueve el glider y (opcionalmente) carga el contenido del tab
function moveGliderSpan(labelEl, onlyGlider = false) {
    const glider = document.querySelector('.glider');
    const contentTabs = document.querySelector('.content_tabs');
    if (!glider || !contentTabs || !labelEl) return;

    const rect = labelEl.getBoundingClientRect();
    const containerRect = contentTabs.getBoundingClientRect();
    const scrollLeft = contentTabs.scrollLeft;
    const leftOffset = rect.left - containerRect.left + scrollLeft;

    glider.style.width = rect.width + 'px';
    glider.style.left = leftOffset + 'px';

    if (!onlyGlider) {
        loadSelectedTabContent(labelEl);
    }
}

// Carga el HTML del tab seleccionado
function loadSelectedTabContent(labelEl) {
    if (!labelEl) return;

    const inputId = labelEl.getAttribute('for');
    if (!inputId) return;

    const input = document.getElementById(inputId);
    if (!input) return;

    const value = input.value;

    // ✅ Nombres como strings — window[nombre] devuelve undefined de forma segura
    // si la función no existe en esta página, sin lanzar ReferenceError.
    const loaderNames = {
        // ── Vol 1 ──
        'POO':                'loadPortfolioClocVolOneBodyPoo',
        'JAVA':               'loadPortfolioClocVolOneBodyJAVA',
        'design_patterns':    'loadPortfolioClocVolOneBodyDesignPatterns',
        'SOLID':              'loadPortfolioClocVolOneBodySolid',
        'Dry_Kiss':           'loadPortfolioClocVolOneBodyDryAndKiss',
        'web_services':       'loadPortfolioClocVolOneBodyWebServices',
        'Android_components': 'loadPortfolioClocVolOneBodyAndroidComponents',
        // ── Vol 2 ──
        'fundamentals':       'loadPortfolioClocVolTwoBodyFundamentals',
        'advance_functions':  'loadPortfolioClocVolTwoBodyAdvanceFunctions',
        'classes_in_kotlin':  'loadPortfolioClocVolTwoBodyClassesInKotlin',
        'kotlin_coroutines':  'loadPortfolioClocVolTwoBodyKotlinCoroutines',
        'kotlin_in_android':  'loadPortfolioClocVolTwoBodyKotlinInAndroid',
    };

    const loaderName = loaderNames[value];
    const loader = loaderName ? window[loaderName] : undefined;

    if (typeof loader === 'function') {
        loader().then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            applyStoredReadingMode();
        });
    }

    const checkbox = document.getElementById('checkbox_list_menu_icon');
    if (checkbox) checkbox.checked = false;
    const sidebar = document.getElementById('portfolio_list_section');
    if (sidebar) sidebar.classList.remove('sidebar-open');
    const overlay = document.getElementById('sidebar_overlay');
    if (overlay) overlay.classList.remove('overlay-visible');
}

// -+-+-+-+-+- Dark / Light mode para la zona de lectura -+-+-+-+-+-//

const READING_MODE_KEY = 'cleverito_reading_mode'; // persiste entre tabs

function initReadingModeToggle() {
    const btn = document.getElementById('reading_mode_toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const body = document.getElementById('portfolio_body');
        const isDark = body.classList.toggle('reading-dark');
        localStorage.setItem(READING_MODE_KEY, isDark ? 'dark' : 'light');
        updateToggleIcon(btn, isDark);
    });

    // Aplicar modo guardado al arrancar
    applyStoredReadingMode();
}

function applyStoredReadingMode() {
    const stored = localStorage.getItem(READING_MODE_KEY) ?? 'dark';
    const body = document.getElementById('portfolio_body');
    const btn = document.getElementById('reading_mode_toggle');
    if (!body) return;

    const isDark = stored === 'dark';
    body.classList.toggle('reading-dark', isDark);
    if (btn) updateToggleIcon(btn, isDark);
}

function updateToggleIcon(btn, isDark) {
    btn.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    btn.querySelector('.mode-icon').textContent = isDark ? '☀️' : '🌙';
    btn.querySelector('.mode-label').textContent = isDark ? 'Modo claro' : 'Modo oscuro';
    btn.classList.toggle('is-dark-mode', isDark);
}