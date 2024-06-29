//Haz tú validación en javascript acá

function validarFormulario(){
let nombreInput = document.getElementsByName('nombre')[0];
let nombre = nombreInput.value.trim(); 

if(nombre === ""){
    alert('Por favor, escribe tu nombre.');
    nombreInput.focus();
    return false; 
}

if(nombre.length > 50) {
    alert('No exceda los 50 caracteres por favor');
    nombreInput.focus();
    return false;
}


let emailInput = document.getElementsByName('email')[0];
let email = emailInput.value.trim(); 

if(email === ""){
    alert('Por favor, escriba su email.');
    emailInput.focus();
    return false; 
}

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    alert('Por favor, escribe un email válido.');
    emailInput.focus();
    return false;
}


let asuntoInput = document.getElementsByName('asunto')[0];
let asunto = asuntoInput.value.trim();

if(asunto === ""){
    alert('Por favor, escribe un asunto.');
    asuntoInput.focus();
    return false; 
}

if (asunto.length > 50) {
    alert('Excede los caracteres permitidos');
    asuntoInput.focus();
    return false;
}


let mensajeTextArea = document.getElementsByName('mensaje')[0];
let mensaje = mensajeTextArea.value.trim();

if(mensaje === ""){
    alert('Por favor, escriba un mensaje.');
    mensajeTextArea.focus();
    return false; 
}

if (mensaje.length > 300) {
    alert('Excede los caracteres permitidos');
    mensajeTextArea.focus();
    return false;
}

return true;

}