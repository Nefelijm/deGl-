$(document).ready(function() {
  var $btnPhoto = $('.btn-photo');
  var $btnReceta = $('.btn-recipe');
  var $BtnToPost = $('.btn-to-post');
  var $textarea = $('.textarea');
  var $imgPost = $('.img-post');
  var $nameRecipe = $('.name-recipe')

  //Función para llamar y ocultar form para postear imágenes/videos
  $btnPhoto.on('click',function(e){
    var $modal = $('.photo');
    $('.recipe').hide();
    $('.photo').show();
  });

  //Función para llamar y ocultar form para postear recetas
  $btnReceta.on('click',function(e){
    var $modal2 = $('.recipe');
    $('.photo').hide();
    $('.recipe').show();
  });

  //Función para agregar color al textarea y habilitar botón
  $textarea.on('keyup',function(e){
    var $val = $(this).val();
    var $text = $(this).val().length;
     if ($text > 0){
       $(this).css("color", "pink");
       $('.btn-to-post').removeAttr('disabled');
     }
  });

  //Función para que el contenido escrito en el modal se agregue en la sección de notificaciones
  $BtnToPost.on('click',function(e){
    event.preventDefault();
    $('.add-post-name').prepend($nameRecipe.val());
    $('.add-post-img').prepend($imgPost.val());
    $('.add-post-content').prepend($textarea.val());
    $('.modal-post').hide();
  });
});
