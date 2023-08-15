const recursos = [
    {
        titulo: "Agenda Coaching Nro. 1 17/07",
        descripcion: "Guarda, pasar y pedir gigas; novedades y mas",
        categoria: "AGENDA COACHING",
        archivo: "archivos/recurso_510.pdf"
    },
    {
        titulo: "Agenda Coaching Nro. 2 24/07",
        descripcion: "Un ejemplo de cómo realizar llamadas efectivas.",
        categoria: "AGENDA COACHING",
        archivo: "LlamadaEjemplo.pdf"
    },
    {
        titulo: "Agenda Coaching Nro. 3 31/07",
        descripcion: "como usar mitrol.",
        categoria: "AGENDA COACHING",
        archivo: "LlamadaEjemplo.pdf"
    },
    {
        titulo: "Agenda Coaching Nro. 4 7/08",
        descripcion: "Un ejemplo de cómo realizar llamadas efectivas.",
        categoria: "AGENDA COACHING",
        archivo: "LlamadaEjemplo.pdf"
    },
    {
        titulo: "Llamada Ejemplo",
        descripcion: "Un ejemplo de cómo realizar llamadas efectivas.",
        categoria: "LLAMADAS",
        archivo: "LlamadaEjemplo.pdf"
    },
    {
        titulo: "Llamada Ejemplo",
        descripcion: "Un ejemplo de cómo realizar llamadas efectivas.",
        categoria: "LLAMADAS",
        archivo: "LlamadaEjemplo.pdf"
    },
    {
        titulo: "Llamada Ejemplo",
        descripcion: "Un ejemplo de cómo realizar llamadas efectivas.",
        categoria: "LLAMADAS",
        archivo: "LlamadaEjemplo.pdf"
    },
    // Agrega más recursos aquí
];

document.addEventListener("DOMContentLoaded", () => {
    const categoriesList = document.querySelector('.categories-list');

    // Generar categorías
    const categorias = [...new Set(recursos.map(recurso => recurso.categoria))];
    
    categorias.forEach(categoria => {
        const categoryItem = document.createElement("details");
        categoryItem.classList.add("category");
        categoriesList.appendChild(categoryItem);

        const summary = document.createElement("summary");
        summary.textContent = categoria;
        categoryItem.appendChild(summary);

        const categoryResources = recursos.filter(recurso => recurso.categoria === categoria);
        categoryResources.forEach(recurso => {
            const panel = document.createElement("div");
            panel.classList.add("panel");
            
            const titulo = document.createElement("h3");
            titulo.classList.add("acordeon");
            titulo.textContent = recurso.titulo;

            const descripcion = document.createElement("p");
            descripcion.classList.add("descripcion");
            descripcion.textContent = recurso.descripcion;

            const mostrarDescripcionBtn = document.createElement("button");
            mostrarDescripcionBtn.classList.add("mostrar-descripcion");
            mostrarDescripcionBtn.addEventListener("click", () => {
                descripcion.classList.toggle("visible");
                mostrarDescripcionBtn.classList.toggle("abierto");
            });
    
            const link = document.createElement("a");
            link.textContent = "Descargar archivo";
            link.href = recurso.archivo;
            link.target = "_blank";
    
            const panelContent = document.createElement("div");
            panelContent.classList.add("panel-content");
            panelContent.appendChild(titulo);
            panelContent.appendChild(mostrarDescripcionBtn);

            panel.appendChild(titulo);
            panel.appendChild(mostrarDescripcionBtn);
            panel.appendChild(descripcion);
            panel.appendChild(link);

            categoryItem.appendChild(panel);
        });
    });
});
