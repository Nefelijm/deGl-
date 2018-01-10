$(document).ready(function() {
  //Evento al btn información, que me redirecciona al form para agregar tus datos
  var $btnInformation = $('.btn-information');
  $btnInformation.on('click',function(e){
    $(location).attr('href', 'personalInformation.html');
  });

});
