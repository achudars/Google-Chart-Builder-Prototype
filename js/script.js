$( document ).ready(function() {
	/* styling efects for chosen chart type */
	$('.thumbnail').tooltip();

    $(".thumbnail").click(function(){
    	$(".thumbnail").removeClass("checked");
		$(this).addClass("checked");
    });
    $(".thumbnail img").click(function(){
    	$(".thumbnail").removeClass("checked");
		$(this).parent().parent().toggleClass("checked");
    });

    /* styling efects for chosen settings */
    $(".mini-tab").click(function(){
    	$(".mini-tab").removeClass("selected");
		$(this).toggleClass("selected");
    });
});