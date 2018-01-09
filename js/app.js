$(document).ready(function() {
  console.log('hola');
  var $btnEnviar = $('.btn-enviar');
  var $btnEnviar2 = $('.btn-enviar2');

  //Realizamos el evento click al btn Registrar, para que al llenar el email y la contraseña se me agregue a la data del Firebase
  $btnEnviar.on('click',function(e){
    //sacamos el valor de los input email y contraseña
    console.log('click');
    var $inputEmail = $('.input-email').val();
    console.log($inputEmail);
    var $inputPassword = $('.input-password').val();
    console.log($inputPassword);
    //copiando codigo de registra usuario nuevo, de Firebase
    firebase.auth().createUserWithEmailAndPassword($inputEmail, $inputPassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
  });

  //Realizamos el evento click al btn Registrar, para que al llenar el email y la contraseña se me agregue a la data del Firebase
  $btnEnviar2.on('click',function(e){
    //sacamos el vlaor d elos input email2 y contraseña2
    console.log('click');
    var $inputEmail2 = $('.input-email2').val();
    console.log($inputEmail);
    var $inputPassword2 = $('.input-password2').val();
    console.log($inputPassword);
    //copiando codigo de registra usuario nuevo, de Firebase
    firebase.auth().signInWithEmailAndPassword($inputEmail2, $inputPassword2).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  });
});
