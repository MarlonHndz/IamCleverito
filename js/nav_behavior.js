async function loadHeaderNav() {
    await loadHeader("/IamCleverito/ui/nav/nav_section.html"); // Production
    //await loadHeader("/ui/nav/nav_section.html");            // Testing

    markCurrentNavTab();
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

function markCurrentNavTab() {

    const currentPath = window.location.pathname;

    if (currentPath.includes("/curriculum/")) {

        const curriculumTab = document.getElementById("curriculum_tab");

        curriculumTab.classList.add("nav-link-active");

        curriculumTab.removeAttribute("href");
    }

    if (currentPath.includes("/library/")) {

        const curriculumTab = document.getElementById("library_tab");

        curriculumTab.classList.add("nav-link-active");

        curriculumTab.removeAttribute("href");
    }
}