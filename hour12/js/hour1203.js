$(document).ready(function(){
	$("div div").hide();
	$("span").mouseover(function() {
		var i = $(this).index("span");
		$("img").eq(i).animate({height: 100}, 1000);	
	});
	$("span").mouseout(function() {
		var i = $(this).index("span");
		$("img").eq(i).animate({height: .1}, 1000);	
	});
	$("#container").mouseenter(function(e) {
		e.stopPropagation();
		$("#images").stop(true).slideToggle(1000);
	});
	$("#container").mouseleave(function(e) {
		e.stopPropagation();
		$("#images").stop(true).slideToggle(1000);
	});
});