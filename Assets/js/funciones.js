  
  function validarFormulario() {
    let numero = document.getElementById('numero').value;
    console.log(numero)
    if(numero === "" || /^\s+$/.test(numero)) {
      alert('No has escrito el número de seguimiento');
      return;
    }
    else if(isNaN(numero)){
        alert('Por favor ingresa solo números');
      return;
    }
}


function validaDatos() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let msge = document.getElementById("comentario").value;
  //validar que los campos no esten vacíos
  if (nombre && email && msge){
    //validar nombre compuesto de letras y un espacio entre nombre y apellido y que no sean solo espacios en blanco
    if(/^[A-Za-z ]+$/.test(nombre) && !/^\s+$/.test(nombre)) {
      //validar que el correo tenga formato correcto
      if ((/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email))){
        //Valida que no sean espacios en blanco en el mensaje
        if (!/^\s+$/.test(msge)){
          alert("Mesaje enviado")
        }else {
          alert("Escriba su mensaje")
        }
        
      }else {
        alert("El correo electrónico no tiene formato correcto")
      }
    }else{
      alert("El nombre debe contener letras solamente")
    }
  }
  else{
    alert("Faltan campos por rellenar")
    
  }
  
}

$(document).ready(function () {
  $('.table').DataTable();
});


