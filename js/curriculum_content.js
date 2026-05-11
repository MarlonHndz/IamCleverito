// curriculum_content.js
// Carga las secciones de la página de carrera profesional
// y gestiona los acordeones de experiencia.

document.addEventListener("DOMContentLoaded", function () {
    loadHeaderNav();
    loadCurriculumContent();
});

async function loadCurriculumContent() {
    await loadCurriculumSection("hero_curriculum_section.html");
    await loadCurriculumSection("experience_curriculum_section.html");
    await loadCurriculumSection("skills_curriculum_section.html");
    await loadCurriculumSection("education_curriculum_section.html");
    await loadCurriculumSection("../footer/footer_section.html");
}

function loadCurriculumSection(url) {
    return new Promise((resolve) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector("main").innerHTML += data;
                resolve();
            })
            .catch(error => {
                console.error("Error loading section:", url, error);
                resolve(); // no bloquear si falla
            });
    });
}

// ── Acordeón principal (exp-entry) ──────────────────────────
// Se llama desde onclick en el HTML (scope global necesario)
function toggleExp(headerEl) {
    const entry = headerEl.closest(".exp-entry");
    const body  = entry.querySelector(":scope > .exp-card > .exp-body");

    if (entry.classList.contains("exp-open")) {
        // Cerrar: fijar height actual, luego animar a 0
        body.style.maxHeight = body.scrollHeight + "px";
        requestAnimationFrame(() => requestAnimationFrame(() => {
            body.style.maxHeight = "0";
        }));
        entry.classList.remove("exp-open");
    } else {
        // Abrir
        entry.classList.add("exp-open");
        body.style.maxHeight = body.scrollHeight + "px";
        // Después de la transición, quitar el max-height fijo
        // para que los sub-items puedan expandirse libremente
        body.addEventListener("transitionend", function handler() {
            if (entry.classList.contains("exp-open")) {
                body.style.maxHeight = "none";
            }
            body.removeEventListener("transitionend", handler);
        });
    }
}

// ── Acordeón anidado (sub-entry, Globant multi-proyecto) ────
function toggleSub(headerEl) {
    const entry = headerEl.closest(".sub-entry");
    const body  = entry.querySelector(":scope > .sub-card > .sub-body");

    if (entry.classList.contains("sub-open")) {
        body.style.maxHeight = body.scrollHeight + "px";
        requestAnimationFrame(() => requestAnimationFrame(() => {
            body.style.maxHeight = "0";
        }));
        entry.classList.remove("sub-open");
    } else {
        entry.classList.add("sub-open");
        body.style.maxHeight = body.scrollHeight + "px";
        body.addEventListener("transitionend", function handler() {
            if (entry.classList.contains("sub-open")) {
                body.style.maxHeight = "none";
            }
            body.removeEventListener("transitionend", handler);
        });
    }
}
