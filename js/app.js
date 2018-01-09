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
    console.log($inputEmail2);
    var $inputPassword2 = $('.input-password2').val();
    console.log($inputPassword2);
    //copiando codigo de registra usuario nuevo, de Firebase
    firebase.auth().signInWithEmailAndPassword($inputEmail2, $inputPassword2).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
  });

  //Creamos una función para copiar el codigo "observador" del código que aparece en firebase
  function obser(){
    //copiando código de observador de Firebase
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('Se encuentra registrado');
        //ejecutamos la función showContent, para que si el usuario existe me muestre mi página
        showContent();
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...
        console.log('No se ha registrado este usuario');
      }
    });
  };
  obser();

  //Realiza una función para que al ingresar, me aparezca el contenido que desee (mi página)
  function showContent(){
    var $contentPage = $('.content-page').text('hola mundo');
  };
});
