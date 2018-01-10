$(document).ready(function() {
  var $btnInformation = $('.btn-information');
  //var $infName = $('.information-name');
  //var $infNational = $('.information-national');
  //var $infSpecialty = $('.information-specialty');
  //var $infAge = $('.information-age');
  //var $infStudies = $('.information-studies');
  //Función para agregar los datos d ela información en el perfil
$btnInformation.on('click',function(e){
    e.preventDefault();
    console.log('click')
    var $nameInf = $('.name-inf').val();
    var $nationalInf = $('.national-inf').val();
    var $specialtyInf = $('.specialty-inf').val();
    var $ageInf = $('.age-inf').val();
    var $studiesInf =$('.studies-inf').val();

    localStorage.name = $nameInf;
    localStorage.national = $nationalInf;
    localStorage.speciality = $specialtyInf;
    localStorage.age = $ageInf;
    localStorage.studies = $studiesInf;
    window.location.href = '../views/prolife.html';
    /*var $infName = $('.information-name').prepend($nameInf.val());
    var $infNational = $('.information-national').prepend($nationalInf.val());
    var $infSpecialty = $('.information-specialty').prepend($specialtyInf.val());
    var $infAge = $('.information-age').prepend($ageInf.val());
    var $infStudies = $('.information-studies').prepend($studiesInf.val());
    $(location).attr('href', 'prolife.html');*/

  });
});
