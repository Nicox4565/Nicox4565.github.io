var hoy = new Date();
var HoraActual = hoy.getHours();
var saludoPag;

if (HoraActual > 18) {
    saludoPag = 'Buenas noches!';
} else if (HoraActual > 12) {
    saludoPag = 'Buenas tardes!';
} else if (HoraActual > 0) {
    saludoPag = 'Buenos dias!';
} else {
    saludoPag = 'Bienvenidos!';
}

document.write('<h2 class="Saludo">' + saludoPag + '</h2>');

function saludo() {
    let nombre =document.getElementById("name").value;
    alert("Gracias por llenar la encuesta" + " "+ nombre)
}


const div1 = document.getElementById("ContT2");
const div2 = document.getElementById("ContT3");
const div3 = document.getElementById("ContT4");
const div4 = document.getElementById("ContT5");


const CargarImagen = (entradas, observador) => {
    
    entradas.forEach((entradas) => {
        if(entradas.isIntersecting){
            entradas.target.classList.add('visible');
        }
        
    })
}

const observador = new IntersectionObserver(CargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px ',
    threshold: 1.0
});

observador.observe(div1);
observador.observe(div2);
observador.observe(div3);
observador.observe(div4);