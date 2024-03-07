async function loadHeaderNav() {
    await loadHeader("ui/nav/nav_section.html");
    addListenerToMenu();
}

function loadHeader(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector("header").innerHTML += data;
                resolve();
            })
            .catch(error => console.log(error));
    });
}

function addListenerToMenu() {
    var navigateSpan = document.getElementById('navigate');

    navigateSpan.addEventListener("click", function () {

        let height = 0;
        let menu = navigateSpan.nextElementSibling;

        if (menu.clientHeight == "0") {
            height = menu.scrollHeight;
        }
        menu.style.height = `${height}px`

        //nav btn style
        navigateSpan.classList.toggle('navigate-black-bg');

    });
}

window.addEventListener('scroll', function () {
    var scroll = window.scrollY;


    var sections = document.querySelectorAll('.section');
    var navLinks = document.querySelectorAll('#nav-menu a');

    /* Change to menu:
    var navMenu = document.getElementById('nav-menu');
    var navigateSpan = document.getElementById('navigate');

    if (scroll > 0) {
        // Ocultar enlaces y mostrar el elemento "Navegar"
        //navMenu.style.display = 'none';
        //navigateSpan.style.display = 'inline';


        navMenu.style.opacity = '0'; // Ocultar enlaces con una transición suave
        navigateSpan.style.opacity = '1'; // Mostrar el elemento "Navegar" con una transición suave
        if (navMenu.style.opacity === '0') {
            navMenu.style.display = 'none';
        }
    } else {
        // Mostrar enlaces y ocultar el elemento "Navegar"
        //navMenu.style.display = 'block';
        //navigateSpan.style.display = 'none';

        //navMenu.classList.remove('child')

        navMenu.style.opacity = '1'; // Mostrar enlaces con una transición suave
        navigateSpan.style.opacity = '0'; // Ocultar el elemento "Navegar" con una transición suave
        if (navMenu.style.opacity === '1') {
            navMenu.style.display = 'block';
        }
    }



    // Color changes per section:
    sections.forEach(section => {
        var top = section.offsetTop;
        var bottom = top + section.offsetHeight;

        if (scroll >= top && scroll < bottom) {

            var sectionId = section.getAttribute('id');

            navLinks.forEach(link => {
                link.classList.remove('nav_white_bg');

                /* -- Home -- /
                if (sectionId === "home-header-section") {
                    link.classList.remove('nav_white_bg');
                }

                if (sectionId === "home-wave-section") {
                    link.classList.add('nav_white_bg');
                }

                if (sectionId === "home-introduction-section") {
                    link.classList.add('nav_white_bg');
                }

                if (sectionId === "home-portfolio-section") {
                    link.classList.add('nav_white_bg');
                }

                if (sectionId === "home-developer-section") {
                    link.classList.add('nav_white_bg');
                }

                if (sectionId === "home-services-section") {
                    link.classList.add('nav_white_bg');
                }

                /* -- Library -- /
                if (sectionId === "library-header-section") {
                    link.classList.remove('nav_white_bg');
                }

                if (sectionId === "library-portfolio-section") {
                    link.classList.add('nav_white_bg');
                }

                if (sectionId === "library-context.section") {
                    link.classList.remove('nav_white_bg');
                }

                if (sectionId === "library-purpose-section") {
                    link.classList.add('nav_white_bg');
                }
            });

        }
    });
    */
});