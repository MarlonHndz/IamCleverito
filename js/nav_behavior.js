async function loadHeaderNav() {
     await loadHeader("/IamCleverito/ui/nav/nav_section.html"); // Production
    // await loadHeader("/ui/nav/nav_section.html");            // Testing
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