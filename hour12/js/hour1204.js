$(document).ready(function() {
	$("img").mouseover(function() {
		$(this).animate({height: "200px", opacity:1}, 1000);		
	});
	$("img").mouseout(function() {
		$(this).animate({height: "100px", opacity:.3}, 1000);		
	});
});
