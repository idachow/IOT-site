$(function(){
  $("#navbar").load("navigation.html"); 
});

$(function(){
  $("#foot").load("footer.html"); 
});

$(function(){
    var pull        = $('#pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();
 
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    }); 
});

/****gettingstarted****/

$(function(){
    $navarrow = ("<span></span>");

	$.hideAll = function () {
		$("#initialtext").hide();
		$("#interactivity").hide();
		$("#electronics").hide();
		$("#programming").hide();
        $("button").attr("class", "btn btn-block ");
	};

	$("#interactivity").hide();
	$("#electronics").hide();
	$("#programming").hide();



	$( "#buttoninteractivity" ).click(function() {
			$.hideAll();
	        $( "#interactivity" ).fadeToggle("slow", "linear");
            $(this).attr("class", "btn btn-block btn-warning");
	});



	$( "#buttonelectronics" ).click(function() {
			$.hideAll();
	        $( "#electronics" ).fadeToggle("slow");
            $(this).attr("class", "btn btn-block btn-warning");
	});

	$( "#buttonprogramming" ).click(function() {
			$.hideAll();
	        $( "#programming" ).fadeToggle("slow");
            $(this).attr("class", "btn btn-block btn-warning");
	});
});

/****gallery lightbox***/


$(function(){

	var $overlay = $('<div id="overlay"></div>');
    var $image = $("<img>");
    var $caption = $("<p></p>");
    var $linkout = $("<a>Original Source</a>");

     /**text attached to image attached to overlay attached to body*/
    $overlay.append($image);
    $overlay.append($caption);
    $overlay.append($linkout);
	$("body").append($overlay);

	$("#inspirationGallery a").click(function(event){
		event.preventDefault();
		var imgLoc = $(this).children("img").attr("src");
        $image.attr("src",imgLoc);
		$overlay.show();

        var captionText = $(this).children("img").attr("alt");
        $caption.text(captionText);

        /*need a link out to original source!*/
        var href = $(this).attr("href");
        $linkout.attr("href",href);

	});

    /*remove overlay w click*/
    $overlay.click(function(){
        $overlay.hide();
    });

});


//***mobile nav****//

$(document).ready(function(){

    if( viewport.is("<sm") ) {
        $(window).scroll(function(){
            var window_top = $(window).scrollTop() + 10; // 
            var div_top = $('#subnav').offset().top;
                if (window_top > div_top) {
                    $('nav').addClass('stick');
                } else {
                    $('nav').removeClass('stick');
                }
        });
    }

});




