$.when( $.ready ).then(function() {
    // Document is ready.
  });

  $( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p" ).text( value );
  })
  .keyup();

  $(document).ready(function(){
    $("h2").on("click", function(){
      alert("Jokes on you! No animal guessing for you!");
    });
  });

  var x = 0;
$(document).ready(function(){
  $("div").scroll(function(){
    $("span").text( x+= 1);
  });
});
