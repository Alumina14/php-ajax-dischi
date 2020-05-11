
$( document ).ready(function(){

  function init(){
    call()
  };

  init();


function call(){

  $.ajax({

    url: 'api.php',
    method: 'get',
    success: function(data) {

      console.log(data);

      for (var key in data) {

        console.log(data[key]);
        var outputCanzone = data[key];



      // handlebars
      var source = $('#cointainerHandlebars').html();
      var template = Handlebars.compile(source);

      var context = {
            'poster': outputCanzone.poster,
            'titolo': outputCanzone.title,
            'autore': outputCanzone.author,
            'anno': outputCanzone.year
          };

        var html = template(context);

        $('.outputCanzoni').append(html);
      };

    },
    error: function(err) {
      console.log(err);
      alert("errore caricamento api");

    }


  });

};

});
