function setSuccess(inputId){
	$("#"+inputId).addClass("border-success").removeClass("border-danger");
}
function setError(inputId){
	$("#"+inputId).addClass("border-danger").removeClass("border-success");
}

$(function(){
	$(".btn").click(function(){
		var username= $("#username").val();
		var password= $("#password").val();
		if(username== ""){
			$.notify("My name is wrong :(", "error");
			setError("username");
		}else{
			$.notify("My name is nice;)!", "success");
			setSuccess("username");
		}
		if(password==""){
			$.notify("You put Password me wrong :(", "error");
			setError("password");
		}else{
			$.notify("Password me  Rigth ;)", "success");
			setSuccess("password");
		}
	});
});