$(document).ready(function() {

	//$('img').fadeIn(3000);
	//$('#statement1').delay(2000).fadeIn(1000);
	//$('#statement2').delay(4000).fadeIn(1000);
	//$('#guess').delay(6000).fadeIn(1000);
	//$('.button').delay(6000).fadeIn(1000);
	//$('.buttonTwo').delay(6000).fadeIn(1000);
		
		var randomNumber = Math.floor(Math.random() * 101);
		
	function getguess() {
		var guess = document.getElementById("guess").value;
	}
	function validateguess() {
		if (guess.value<0 || guess.value>100 || isNaN(guess.value)) {
			$("#invalid").add("invalid");
		} else {
			}
	}
	function highlow() {
		if (guess.value<randomNumber) {
			$("#higher").toggleClass("hide");
		} else if (guess.value>randomNumber) {
			$("#lower").toggleClass("hide");
		}
	}
	function hotcold() {
		var abs=Math.abs(guess.value-randomNumber);
		if (abs<15 && abs>0) {
			$("#Sahara").toggleClass("hide");
		} else if (abs>15) {
			$("#igloo").toggleClass("hide");
		} else if (abs == 0) {
			$("#correct").toggleClass("hide");
		}
	}
		
	$('#guessbutton').click(function() {
		$("#invalid","#higher","#lower","#Sahara","#igloo","#correct").css("display:none");
		
		getguess();
		validateguess();
		highlow();
		hotcold();
		alert(randomNumber);
	});
});	