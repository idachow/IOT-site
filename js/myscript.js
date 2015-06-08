$(function(){
  $("#navbar").load("navigation.html"); 
});

$(function(){
  $("#foot").load("footer.html"); 
});

$(function(){
	$("#interactivity").hide();
	$("#electronics").hide();
	$("#programming").hide();
});

$(function(){
	$( "#buttoninteractivity" ).click(function() {
	        $( "#interactivity" ).toggle("slow");
	});
});

$(function(){
	$( "#buttonelectronics" ).click(function() {
	        $( "#electronics" ).toggle("slow");
	});
});

$(function(){
	$( "#buttonprogramming" ).click(function() {
	        $( "#programming" ).toggle("slow");
	});
});
