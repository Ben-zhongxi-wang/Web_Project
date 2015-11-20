function submission(){
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	alert("Hello! " + firstName + " , " + lastName);
}

(function(){
	alert("Page loaded");
})();