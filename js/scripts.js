// querySelector
const heading = document.querySelector('.header__texto h2') // retorna 0 o 1 elementos
console.log(heading);
   // heading.textContent = 'nuevo heading';


// querySelectorAll    //retorna 0 o todos los elementos
const enlaces = document.querySelectorAll('.navegacion a');
//enlaces[0].textContent = 'Nuevo texto para enlace';
//enlaces[0].classList.add('nueva_clase');
//enlaces[0].classList.remove('navegacion__enlace');
console.log(enlaces);


// getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);



// **** GENERAR NUEVO ENLACE CON JS ****
const nuevoEnlace = document.createElement('A'); //etiqueta en mayuscula

// agregar el hfref
nuevoEnlace.href = 'nuevo_enlace.html';

// agregar el texto
nuevoEnlace.textContent = 'Nuevo Enlace';

// agregar la clase
nuevoEnlace.classList.add('navegacion_Enlace');

// agregar al Documento 
const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(nuevoEnlace);    //permite agregar una variable e insertarla en otro lugar

console.log(nuevoEnlace);


// **** EVENTOS ****
console.log(1);

window.addEventListener('load', function(){ //load espera a que JS y los archivos que dependen del HTML esten listos
    console.log(2);
});

window.onload = function(){
    console.log(3);
};

document.addEventListener('DOMContentLoaded', function(){ // DOMContentLoaded solo espera que se descargue el HTML pero no espera el css o imagenes
    console.log(4);
});

console.log(5);

// scroll 
window.onscroll = function (){
    console.log('scrolling...');
};

// REACCIONAR A CLICKS  
// seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){   //el click está asociado al boton
//     console.log(evento);

//     // para validar formulario
//     evento.preventDefault();
//     console.log('Enviando formulario');
// });


// EVENTOS DE INPUTS Y TEXTAREA

const datos = {
    nombre: '',
    email: '',
    mensaje: '',
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

// FORMA EXTENSA
// nombre.addEventListener('input', function(e){
//     console.log(e.target.value);
// });
// email.addEventListener('input', function(e){
//     console.log(e.target.value);
// });
// mensaje.addEventListener('input', function(e){
//     console.log(e.target.value);
// });

// FORMA SIMPLIFICADA
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// evento SUBMIT  // en un formulario se utiliza submit
formulario.addEventListener('submit', function(evento){   //el submit está asociado al formulario
    evento.preventDefault();

    // VALIDAR FORMULARIO
    const {nombre, email, mensaje} = datos;
    if (nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;  // el return corta la ejecucion del codigo
    } 
    
    // CREAR ALERTA DE ENVIAR CORRECTAMENTE
    mostrarAlerta('Mensaje enviado correctamente');
});



function leerTexto (e){
    //console.log(e.target.value);
    datos[e.target.id]= e.target.value;
    //console.log(datos);
}


// FUNCION SIMPLIFICAD
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    // desaparecer alerta despues de 5 segundos
     setTimeout(() => {
        alerta.remove();
    }, 5000);
}