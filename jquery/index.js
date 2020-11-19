$("h1").addClass("big-tit margin-boo");
$("button").html("<em>hey!</em>")

$("button").click(function(){

  $(this).css("color","purple");
});


$("input").keypress(function(event){
  $("h1").text(event.key);
});
