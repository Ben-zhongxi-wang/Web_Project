$(init)

function init(){
	$("h1")
		.html("Changed Topic")
		.css({"color":"white", "background-color":"blue"})
	$("#p1").click(p1Clicked);
	$("#firstName").val("Tianjie")
	$("#lastName").val("Dong")
	$("body").append("<h2> new title </h2>")
	
}

function p1Clicked(){
	$("body").append("<p> new paragraph </p>")
}