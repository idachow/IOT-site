$(function(){
  $("#navbar").load("navigation.html"); 
});

$(function(){
  $("#foot").load("footer.html"); 
});

/****gettingstarted****/

$(function(){
	$.hideAll = function () {
		$("#initialtext").hide();
		$("#interactivity").hide();
		$("#electronics").hide();
		$("#programming").hide();
		$("#links").hide();
		$("#projects").hide();
		$("#inspa").hide();
	};

	$("#interactivity").hide();
	$("#electronics").hide();
	$("#programming").hide();
	$("#links").hide();
	$("#projects").hide();
	$("#inspa").hide();

	$( "#buttoninteractivity" ).click(function() {
			$.hideAll();
	        $( "#interactivity" ).fadeToggle("slow", "linear");
	});



	$( "#buttonelectronics" ).click(function() {
			$.hideAll();
	        $( "#electronics" ).fadeToggle("slow");
	});


	$( "#buttonprogramming" ).click(function() {
			$.hideAll();
	        $( "#programming" ).fadeToggle("slow");
	});



//*resources*//


	$( "#buttonlinks" ).click(function() {
			$.hideAll();
	        $( "#links" ).fadeToggle("slow");
	});


//****projects****//


	$( "#buttoninspa" ).click(function() {
			$.hideAll();
	        $( "#inspa" ).fadeToggle("slow");
	});



	$( "#buttonprojects" ).click(function() {
			$.hideAll();
	        $( "#projects" ).fadeToggle("slow");
	});
}); 