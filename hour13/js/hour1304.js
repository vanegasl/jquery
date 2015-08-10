$(document).ready(function(){
	var validationObj = $("#simpleForm").validate({
		rules: {
			name: { required:true, minlength:5 },
			email: { required:true, email:true },
			password1: { required:true, rangelength:[6,12], equalTo:"#password2" },
			battle: { required:true, date:true },
			weapon: { required:true, rangelength:[2,2] },
			hands: { required:true},
			armor: { required:true, minlength:2 }},
		messages: {
			password1: { equalTo:"Passwords Do Not Match"},
			weapon: { rangelength:"Select 2 Weapons"},
			armor: { minlength:"2 Pieces of Armor Required"}
		},
		errorPlacement: function(error, element) {
			if(element.is(":radio")) {
				error.insertAfter($("input:radio:last").next("label"));
			} else if (element.is(":checkbox")) {
				error.insertAfter($("input:checkbox:last").next("label"));
			} else {
				error.insertAfter(element);
			}
		}
	});
	validationObj.form();
	$("form").submit(function(e){
		if(!validationObj.form()) {
			alert("Form Errors");
			e.preventDefault();
		}
	});
});
