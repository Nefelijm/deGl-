$(document).ready(function() {
  var $btnInformation = $('.btn-information');
  //var $infName = $('.information-name');
  //var $infNational = $('.information-national');
  //var $infSpecialty = $('.information-specialty');
  //var $infAge = $('.information-age');
  //var $infStudies = $('.information-studies');

  var $nameInf = $('.name-inf').val();
  var $nationalInf = $('.national-inf').val();
  var $specialtyInf = $('.specialty-inf').val();
  var $ageInf = $('.age-inf').val();
  var $studiesInf =$('.studies-inf').val();
  //Función para agregar los datos d ela información en el perfil
  $btnInformation.on('click',function(e){
    var localStorage.name = $nameInf;
    var localStorage.national = $nationalInf;
    var localStorage.speciality = $specialtyInf;
    var localStorage.age = $ageInf;
    var localStorage.studies = $studiesInf;
    window.location.href = '../views/prolife.html';
    /*var $infName = $('.information-name').prepend($nameInf.val());
    var $infNational = $('.information-national').prepend($nationalInf.val());
    var $infSpecialty = $('.information-specialty').prepend($specialtyInf.val());
    var $infAge = $('.information-age').prepend($ageInf.val());
    var $infStudies = $('.information-studies').prepend($studiesInf.val());
    $(location).attr('href', 'prolife.html');*/

  });
});
