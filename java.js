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

