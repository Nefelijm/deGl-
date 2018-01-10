$(document).ready(function(){

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAlbcybJZDOmr_rLwWDzAnarW7U23C8ZyI",
        authDomain: "deglu-producto.firebaseapp.com",
        databaseURL: "https://deglu-producto.firebaseio.com",
        projectId: "deglu-producto",
        storageBucket: "",
        messagingSenderId: "926786399247"
    };
    firebase.initializeApp(config);

//Obteniendo todo los elementos del DOM

    var email = $('#textEmail');
    var password = $('#textPassword');
    var login = $('#btnLogin');
    var sign = $('#btnSign');
    var logout = $('#btnLogout');

//Evento click para obtener los valores de los inputs

    $('#btnLogin').on('click',function(e){
    var email = $('#textEmail').val();
    var password = $('#textPassword').val();
    //Hacemos el metodo de identficacion 
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error){
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode) {
            $('#textPassword').val('');
            alert(errorMessage);
        }
    });   
    
});

//Evento click para registrar usuario
    $('#btnSign').on('click',function(e){
        e.preventDefault();
    var email = $('#textEmail').val();
       console.log(email);
    var password = $('#textPassword').val();
      console.log(password);
    //Hacemos el metodo de identficacion 
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
  
     });
    }); 
    
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var email = user.email;
                var emailVerified = user.emailVerified;
                console.log(email);
                // window.location.href = '../views/feed.html';
            } else {
                console.log('usuario no logeado');
            }
        });













});