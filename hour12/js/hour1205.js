var rightEdge = window.innerWidth;
var bottomEdge = window.innerHeight;
$(document).ready(function() {
	$("#plane").offset({top:bottomEdge/2, left:rightEdge/2});
	$("#up").click(function(){
		$("#plane").attr("src","images/planeUp.png");
		$("#plane").stop(true).animate({top:0}, 5000);
	});
	$("#left").click(function(){
		$("#plane").attr("src","images/planeLeft.png");
		$("#plane").stop(true).animate({left:0}, 5000);
	});
	$("#right").click(function(){
		$("#plane").attr("src","images/planeRight.png");
		$("#plane").stop(true).animate({left:rightEdge}, 5000);
	});
	$("#down").click(function(){
		$("#plane").attr("src","images/planeDown.png");
		$("#plane").stop(true).animate({top:bottomEdge}, 5000);
	});
	$("#stop").click(function(){$("#plane").stop(true);});
});