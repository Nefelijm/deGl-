$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyAlbcybJZDOmr_rLwWDzAnarW7U23C8ZyI',
    authDomain: 'deglu-producto.firebaseapp.com',
    databaseURL: 'https://deglu-producto.firebaseio.com',
    projectId: 'deglu-producto',
    storageBucket: '',
    messagingSenderId: '926786399247'
  };
  firebase.initializeApp(config);


  // Obteniendo todo los elementos del DOM
  var email = $('#textEmail');
  var password = $('#textPassword');
  var login = $('#btnLogin');
  var sign = $('#btnSign');
  var logout = $('#btnLogout');

  // Creando Variables que nos ayudaran 
  var verifyEmail = false;
  var verifyPassword = false;

  // Creando Funciones para que se active el boton
  function activeButton() {
    if (verifyEmail === true && verifyPassword === true) {
      $('#btnLogin').attr('disabled', false);
      $('#btnSign').attr('disabled', false);
    }
  }

  function desactiveButton() {
    if (verifyEmail === true && verifyPassword === true) {
      $('#btnLogin').attr('disabled', true);
      $('#btnSign').attr('disabled', true);
    }
  }    

  // Validando correo

  $('#textEmail').on('input', function() {
    var parameterEmail = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/); // Expresiones regulares que nos ayudara a validar el email
    if (parameterEmail.test($(this).val()) === false || $(this).val() === '') {
      $('#msj1').text('Ingrese su correo correcto');
      $(this).focus();
      desactiveButton();
      return false;
    } else {
      $('#msj1').text('');
      verifyEmail = true;
      activeButton();
    }
  });

  // Validando Password

  $('#textPassword').on('input', function(event) {
    if ($(this).val().length >= 6) {      
      $('#msj2').text('Ingrese su Password correcto');
      $(this).focus();
      desactiveButton();
      return false;
    } else {
      $('#msj2').text('');
      verifyPassword = true;
      activeButton();
    }
  });

  // Evento click para obtener los valores de los inputs

  $('#btnLogin').on('click', e => {
    e.preventDefault();
    var emailLogin = email.val();
    console.log(emailLogin);
    var passwordLogin = password.val();
    var auth = firebase.auth();
    // Hacemos el metodo de identficacion
    var promise = auth.signInWithEmailAndPassword(emailLogin, passwordLogin);
    promise.catch(e => console.log(e.message));
    window.location.href = '../views/homepage.html';
  });

  $('#btnSign').on('click', e => {
    e.preventDefault();
    var emailLogin = email.val();
    var passwordLogin = password.val();
    var auth = firebase.auth();
    // Hacemos el metodo de identficacion 
    var promise = auth.createUserWithEmailAndPassword(emailLogin, passwordLogin);
    promise.catch(e => console.log(e.message));
    window.location.href = '../views/homepage.html';
  });

  $('#btnLogout').on('click', e => {
    e.preventDefault();
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    } else {
      console.log('no logueado');
      btnLogout.classList.add('hide');
    }
  });
});
