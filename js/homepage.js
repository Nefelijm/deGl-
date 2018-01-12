$(document).ready(function() {
  var $btnPhoto = $('.btn-photo');
  var $btnReceta = $('.btn-recipe');
  var $BtnToPost = $('.btn-to-post');
  var $textarea = $('.textarea');
  var $imgPost = $('.img-post');
  var $nameRecipe = $('.name-recipe');

  // Función para llamar y ocultar form para postear imágenes/videos
  $btnPhoto.on('click', function(e) {
    var $modal = $('.photo');
    $('.recipe').hide();
    $('.photo').show();
  });

  // Función para llamar y ocultar form para postear recetas
  $btnReceta.on('click', function(e) {
    var $modal2 = $('.recipe');
    $('.photo').hide();
    $('.recipe').show();
  });

  // Función para agregar color al textarea y habilitar botón
  $textarea.on('keyup', function(e) {
    var $val = $(this).val();
    var $text = $(this).val().length;
    if ($text > 0) {
      $(this).css('color', 'pink');
      $('.btn-to-post').removeAttr('disabled');
    }
  });

  // Función para que el contenido escrito en el modal se agregue en la sección de notificaciones
  $BtnToPost.on('click', function(e) {
    console.log('click');
    event.preventDefault();
    var $name = $('.add-post-name').prepend($nameRecipe.val());
    $name.css({
      'border-top': '2px solid #9c6757',
      'font-size': '30px',
      'margin-top': '3%',
      'text-align': 'center',
      'text-transform': 'uppercase'
    });
    var $img = $('.add-post-img').prepend($imgPost.val());
    var $recipe = $('.add-post-content').prepend($textarea.val());
    $recipe.css({
      'border-bottom': '2px solid #9c6757',
      'font-size': '20px',
      'margin-bottom': '3%',
      'text-align': 'justify'
    });

    // $('.modal-post').hide();
		
		//Este es el codigo que estaba trabajando para subir la imagen en la pagina
		/* 
		<input type="file" onchange="previewFile()"><br>
<img src="" height="200" alt="Image preview...">

<script>
   function previewFile(){
       var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }

  previewFile();  //calls the function named previewFile()
  </script>
		*/
		
  });
});
