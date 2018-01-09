$(document).ready(function(){
// //Funcion para validar el correo electronico 

// $('.email').focusout( function(){
//     var PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
//     var email = PATTERNEMAIL.test($(this).val())
//     if (email === false) {
//        alert('Ingrese correo valido');
//        $(this).val('');

//     }
//     else{

//     }

// //Funcion para validar la contraseña

// $('.password').on('input', function(){
   
//     if ($(this).val().length > 8) {
//         alert('La contraseña debe estar formada por 8 caracteres');
//     } else {
       
//     }

// });

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCzceCZpB1c4MLVjUAHIk16yeyfuLkpMwA",
        authDomain: "deglu-red-social.firebaseapp.com",
        databaseURL: "https://deglu-red-social.firebaseio.com",
        projectId: "deglu-red-social",
        storageBucket: "deglu-red-social.appspot.com",
        messagingSenderId: "526922925804"
    };
    firebase.initializeApp(config);
//Funcion para Registrar usuario
    
$('#register').on('click',function(){

    var email = $('.email').val();
    var password = $('.password').val();


    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

    

});







});