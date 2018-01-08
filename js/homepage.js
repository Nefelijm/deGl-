$(document).ready(function() {
  var $btnPhoto = $('.btn-photo');
  var $btnReceta = $('.btn-recipe');
  var $toPost = $('.to-post');

  $btnPhoto.on('click',function(e){
    var $modal = $('.photo');
    //$modal.append("<form><div class="form-group"><label for="exampleInputEmail1">Nombre</label><input type="email" class="form-control" id="exampleInputEmail1" placeholder="Escribe el nombre de la imágen"></div><div class="form-group"><label for="exampleInputFile">File input</label><input type="file" id="exampleInputFile"></div></form>");
    $('.recipe').hide();
    $('.photo').show();
  });

  $btnReceta.on('click',function(e){
    var $modal2 = $('.recipe');
    //$modal2.append("<form><div class="form-group"><label for="exampleInputEmail1">Nombre</label><input type="email" class="form-control" id="exampleInputEmail1" placeholder="Escribe el nombre de la imágen"></div><div class="form-group"><label for="exampleInputFile">File input</label><input type="file" id="exampleInputFile"></div></form>");
    $('.photo').hide();
    $('.recipe').show();
  });
});


$textarea.on('keyup',function(e){
    console.log(e.target);
    var $val =$(this).val();
    console.log($(this).val().length);
    var $veinte = $(this).val().length;
     if ($veinte > 20) {
       $(this).css( "color", "red" );
       $('#tweet-btn').removeAttr('disabled');
     };
  });

  var $val =$(this).val();
  $button.on('click',function(e){
    event.preventDefault();
    $('#messages').prepend($textarea.val());
  });
