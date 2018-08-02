// Write all your JavaScript and JQuery code in this file! :)
/* START PROVIDED CODE */
function randomX() {
  return Math.random() * $(window).width();
}

function randomY() {
  return Math.random() * $(window).height();
}
function randompos() {
	var x = randomX()
	var y = randomY()
	pos = [x , y]
}


	// body...

$("#moveButton").on("click", function(){
	$("#message").css("left", randomX());
	$('#message').css("top", randomY());

	// body...
})

/* END PROVIDED CODE */

// Write your code below this line :)
