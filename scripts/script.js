const ejercicio1 = document.querySelector(".eje_1");
const ejercicio2 = document.querySelector(".eje_2");
const resultado = document.getElementById('resultado');



function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();
    const mesNacimiento = nacimiento.getMonth();
    const diaNacimiento = nacimiento.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
      edad--;
    }

    return edad;
}



function mostrarEdad() {
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    if (fechaNacimiento) {
        const edad = calcularEdad(fechaNacimiento);
        resultado.textContent = `La edad actual es: ${edad} años`;
    } else {
        resultado.textContent = 'Por favor, ingresa una fecha de nacimiento válida.';
    }
}

ejercicio1.textContent=`
${calcularEdad}

${mostrarEdad}

`;



// Ejercicio #2
function determinarAño () {
    const dias = document.getElementById("input_dias").value;
    const año = document.querySelector(".area_año");
    const añosSingularPrural = dias < 2 ? "dia": "dias";

    if(dias == 365){
        año.textContent = "es un año comun";
    } else if( dias == 366 ){
        año.textContent ="El año es bisiesto";
    } else if( dias > 366 || dias < 365 ){
        año.textContent =`no existe un año con ${dias} ${añosSingularPrural}`;
    }
}

// determinarAño();

ejercicio2.textContent = `${determinarAño}`;
