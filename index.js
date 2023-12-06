const proyectosContainer = document.getElementById("tarjetasContainer");
const aside = document.getElementsByTagName("aside")[0];

const getTecnologias = (tecnologias) =>{

    let res = "";
    tecnologias.forEach(tecnologia => {
        res += `<span class="tecnologia">${tecnologia}</span>`
    })
    return res;
}

//Creacion de proyectos
proyectos.forEach(proyectos =>{
    const nuevoProyecto = document.createElement("div");
    nuevoProyecto.classList = "tarjeta proyecto";
    nuevoProyecto.textContent = proyectos.titulo;
    proyectosContainer.appendChild(nuevoProyecto);
    nuevoProyecto.innerHTML=`
        <img src="img/proyectos/${proyectos.imagen}">
        <div>
        <h3>${proyectos.titulo}</h3>
        <p>${proyectos.descripcion}</p>
        <p>Tecnologias: ${getTecnologias(proyectos.tecnologias)} </p>
        </div>
        <a href ="${proyectos.link}" target = "_blank">Ver proyecto</a>
        `;
});

//Creacion de Sidebar
const nuevaPresentacion = document.createElement("div");
nuevaPresentacion.classList = "presentacion";
nuevaPresentacion.innerHTML = `
    <img src="${informacionPersonal.imagen}"><br>

`;
informacionPersonal.otros.forEach(dato =>{
    nuevaPresentacion.innerHTML += `
        <div>
            <span>${dato[0]}:</span>
            <span>${dato[1]}</span>
        </div>
    `
});
aside.appendChild(nuevaPresentacion);

//idiomas
const nuevoIdiomas = document.createElement("div");
nuevoIdiomas.classList = "idioma";
informacionPersonal.idiomas.forEach(dato =>{
    nuevoIdiomas.innerHTML += `
        <div>
            <span>${dato[0]}:</span>
            <span>${dato[1]}</span>
        </div>
    `
});
aside.appendChild(nuevoIdiomas);

//Lenguajes de programacion
const nuevoLenguajeProgramacion = document.createElement("div");
nuevoLenguajeProgramacion.classList = "idioma";
informacionPersonal.tecnologias.forEach(dato =>{
    nuevoLenguajeProgramacion.innerHTML += `
        <div>
            <span>${dato[0]}</span>
            
        </div>
        <progress max="10" value=${dato[1]}>
    `
});
aside.appendChild(nuevoLenguajeProgramacion);
//links

const getIconoRed = (red)=>{
    switch(red){
        case "GitHub":
            return "github.svg"
        case "Linkedn" :
            return "linkedn.svg"   
    }
}
const nuevoRedes = document.createElement("div");
nuevoRedes.classList = "redes";
informacionPersonal.redes.forEach(dato =>{
    if(dato[1] === "")return;
    nuevoRedes.innerHTML += `
        <a href="${dato[1]}" target="_blank">
            <img src="/img/iconos/${getIconoRed(dato[0])}">
        </a>
        
    `
});
aside.appendChild(nuevoRedes);


