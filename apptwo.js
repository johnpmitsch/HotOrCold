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
	function newgame() {
		var randomNumber = Math.floor(Math.random() * 101);
	}
	function validateguess() {
		if (guess.value<0 || guess.value>100 || isNaN(guess.value) || (guess.value=' ')) {
			$("#statement1").replaceWith("<p class=statement id=statement1>What, do you have slush for brains?</p>");
			$("#statement2").replaceWith("<p class=statement id=statement2>Invalid input! Try again.</p>");
		}
	}
	function highlow() {
		if (guess.value<randomNumber) {
			$("#statement2").replaceWith("<p class=statement id=statement2>Guess Higher!</p>");
		} else if (guess.value>randomNumber) {
			$("#statement2").replaceWith("<p class=statement id=statement2>Guess Lower!</p>");
		}
	}
	function hotcold() {
		var abs=Math.abs(guess.value-randomNumber);
		if (abs<12 && abs>0) {
			$("#statement1").replaceWith("<p class='statement hot' id=statement1>Your guess is hotter than a BBQ in the Sahara!</p>");
		} else if (abs>12) {
			$("#statement1").replaceWith("<p class='statement cold' id=statement1>Your guess is colder than my igloo in January!</p>");
		} else if (abs == 0) {
			$("#statement1").replaceWith("<p class=statement id=statement1>Correct!!</p>");
			$("#statement2").replaceWith("<p class=statement id=statement2>You Win!!</p>");
		}
	}	
	$('#guessbutton').click(function() {
		getguess();
		validateguess();
		highlow();
		hotcold();
	});
	$("#newgame").click(function() {
		newgame();
	});
});	