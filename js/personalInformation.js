$(document).ready(function() {
  var $btnInformation = $('.btn-information');
  //var $infName = $('.information-name');
  //var $infNational = $('.information-national');
  //var $infSpecialty = $('.information-specialty');
  //var $infAge = $('.information-age');
  //var $infStudies = $('.information-studies');

  var $nameInf = $('.name-inf');
  var $nationalInf = $('.national-inf');
  var $specialtyInf = $('.specialty-inf');
  var $ageInf = $('.age-inf');
  var $studiesInf =$('.studies-inf');
  //Función para agregar los datos d ela información en el perfil
  $btnInformation.on('click',function(e){
    var $infName = $('.information-name').prepend($nameInf.val());
    var $infNational = $('.information-national').prepend($nationalInf.val());
    var $infSpecialty = $('.information-specialty').prepend($specialtyInf.val());
    var $infAge = $('.information-age').prepend($ageInf.val());
    var $infStudies = $('.information-studies').prepend($studiesInf.val());
    $(location).attr('href', 'prolife.html');

  });
});
