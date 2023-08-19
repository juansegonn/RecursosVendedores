const recursos = [
    {
        titulo: "Agenda coaching Nro. 1 17/07",
        descripcion: "Guarda, pasar y pedir gigas; novedades y mas.",
        categoria: "AGENDA COACHING",
        archivo: "archivos/recurso_510.pdf"
    },
    {
        titulo: "Agenda coaching Nro. 2 24/07",
        descripcion: "Info prepagos, cierre \"no llame\" y evitacion de rechazos.",
        categoria: "AGENDA COACHING",
        archivo: "archivos/recurso_511.pdf"
    },
    {
        titulo: "Agenda coaching Nro. 3 31/07",
        descripcion: "4gb de regalo y comparativa entre empresas.",
        categoria: "AGENDA COACHING",
        archivo: "archivos/recurso_514.pdf"
    },
    {
        titulo: "Agenda coaching Nro. 4 7/08",
        descripcion: "Equipos a contrafactura, portas cuit y fibra individuos.",
        categoria: "AGENDA COACHING",
        archivo: "archivos/recurso_516.pdf"
    },
    {
        titulo: "Taller de rebates",
        descripcion: "Guia de como rebatir siguiendo el formato CRP.",
        categoria: "TALLERES",
        archivo: "recurso_515.pdf"
    },
    {
        titulo: "Calculadora negocio porta",
        descripcion: "Explicacion de como utilizar la calculadora cuit correctamente.",
        categoria: "CUIT",
        archivo: "recurso_530.mp4"
    },
    {
        titulo: "Links para clientes con CUIT",
        descripcion: "Enlaces para obtener IIBB y otros links importantes.",
        categoria: "CUIT",
        archivo: "recurso_495.docx"
    },
    {
        titulo: "Taller para fibra cuit/dni",
        descripcion: "Guia rapida de como cargar la fibra.",
        categoria: "CUIT",
        archivo: "recurso_512.pdf"
    },
    {
        titulo: "Taller porta CUIT",
        descripcion: "Guia detallada de como y cuando portar una linea con CUIT.",
        categoria: "CUIT",
        archivo: "LlamadaEjemplo.pdf"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const categoriesList = document.querySelector('.categories-list');
    const searchInputs = document.querySelectorAll('.searchInput');
    const resourcesList = document.querySelector('.resources-list');

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
            const panel = createResourcePanel(recurso);
            categoryItem.appendChild(panel);

            const listItem = createResourceListItem(recurso);
            resourcesList.appendChild(listItem);
        });
    });

    const main = document.querySelector("main");
    main.appendChild(resourcesList);
});


function createResourcePanel(recurso) {
    const panel = document.createElement("div");
    panel.classList.add("panel");
    
    const titulo = document.createElement("h3");
    titulo.textContent = recurso.titulo;

    const descripcion = document.createElement("p");
    descripcion.classList.add("descripcion");
    descripcion.textContent = recurso.descripcion;

    const mostrarDescripcionBtn = createToggleButton();

    const link = createDownloadLink(recurso.archivo);

    panel.appendChild(titulo);
    panel.appendChild(mostrarDescripcionBtn);
    panel.appendChild(descripcion);
    panel.appendChild(link);

    return panel;
}

function createResourceListItem(recurso) {
    const listItem = document.createElement("div");
    listItem.classList.add("panel");

    const titulo = document.createElement("h3");
    titulo.textContent = recurso.titulo;

    const descripcion = document.createElement("p");
    descripcion.classList.add("descripcion");
    descripcion.textContent = recurso.descripcion;

    const mostrarDescripcionBtn = createToggleButton();

    const link = createDownloadLink(recurso.archivo);

    listItem.appendChild(titulo);
    listItem.appendChild(mostrarDescripcionBtn);
    listItem.appendChild(descripcion);
    listItem.appendChild(link);

    return listItem;
}

function createToggleButton() {
    const btn = document.createElement("button");
    btn.classList.add("mostrar-descripcion");
    btn.addEventListener("click", () => {
        btn.classList.toggle("abierto");
        const descripcion = btn.parentNode.querySelector(".descripcion");
        descripcion.classList.toggle("visible");
    });

    return btn;
}

function createDownloadLink(url) {
    const link = document.createElement("a");
    link.textContent = "Descargar archivo";
    link.href = url;
    link.target = "_blank";
    link.setAttribute("download", "");

    return link;
}

document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        const searchTerm = e.target.value.toLowerCase();
        
        // Ocultar la lista de categorías si se realiza una búsqueda
        const categoriesList = document.querySelector('.categories-list');
        categoriesList.style.display = searchTerm === '' ? 'flex' : 'none';

        // Mostrar la lista de recursos solo si hay coincidencias en la búsqueda
        const resourcesList = document.querySelector('.resources-list');
        const panels = resourcesList.querySelectorAll('.panel');
        resourcesList.style.display = searchTerm === '' ? 'none' : 'block';
        
        panels.forEach(panel => {
            const titulo = panel.querySelector('h3').textContent.toLowerCase();
            const descripcion = panel.querySelector('.descripcion').textContent.toLowerCase();

            if (titulo.includes(searchTerm) || descripcion.includes(searchTerm)) {
                panel.style.display = 'flex';
            } else {
                panel.style.display = 'none';
            }
        });
    }
});

