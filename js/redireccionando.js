$(document).ready(function() {

  var $btnInformation = $('.btn-information');
  var $logo = $('.logo');
  var $behind = $('.behind');
  var $iconProlife = $('.icon-prolife')

  //Evento al btn información, que me redirecciona al form para agregar tus datos
  $btnInformation.on('click',function(e){
    $(location).attr('href', 'personalInformation.html');
  });
  //Evento al logo y atrás del prolife y del personalInformation, que me redirecciona a la vista homepage
  $logo.on('click',function(e){
    $(location).attr('href', 'homepage.html');
  });
  $behind.on('click',function(e){
    $(location).attr('href', 'homepage.html');
  });
  //Evento al icon person, para que redireccione a la vista prolife
  $iconProlife.on('click',function(e){
    $(location).attr('href', 'prolife.html');
  });
});
