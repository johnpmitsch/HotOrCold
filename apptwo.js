$(document).ready(function() {

	$('img').fadeIn(3000);
	$('#statement1').delay(2000).fadeIn(1000);
	$('#statement2').delay(4000).fadeIn(1000);
	$('#guess').delay(6000).fadeIn(1000);
	$('.button').delay(6000).fadeIn(1000);
	$('.buttonTwo').delay(6000).fadeIn(1000);
		
		var randomNumber = Math.floor(Math.random() * 101);
		
	function getguess() {
		var guess = document.getElementById("guess").value;
	}
	function newgame() {
		var x = Math.floor(Math.random() * 101);
		$('#message,#message2').html(" ");
		$('#guess').val('');
	}
	function validateguess() {
		if (guess.value<0 || guess.value>100 || isNaN(guess.value) || (guess.value=="")) {
			$("#message").html("What do you have slush for brains?! Invalid input!");
			exit();
		}
	}
	function highlow() {
		if (guess.value<randomNumber) {
			$("#message2").html("Guess Higher! ").effect("pulsate", {times:2}, 200);
		} else if (guess.value>randomNumber) {
			$("#message2").html("Guess Lower! ").effect("pulsate", {times:2}, 200);
		}
	}
	function hotcold() {
		var abs=Math.abs(guess.value-randomNumber);
		if (abs<12 && abs>0) {
			$("#message").html("Your guess is getting hotter than the Sahara!").effect("pulsate", {times:2}, 200);
			$('#camel').effect( "bounce", "slow" );
		} else if (abs>12) {
			$("#message").html("Your guess is colder than my igloo in January!").effect("pulsate", {times:2}, 200);
			$('#eskimo').effect( "bounce", "slow" );
		} else if (abs == 0) {
			$("#message").html("Correct! You Win!!!").effect("pulsate", {times:2}, 200);
			$("#message2").html("Congrats!").effect("pulsate", {times:2}, 200);
			$('#camel,#eskimo').effect( "shake", "slow" );
		}
	}	
	function rungame() {
		getguess();
		validateguess();
		highlow();
		hotcold();
	}
	$('#guessbutton').click(function() {
		rungame()
	});
	$('#guess').keypress(function(e) {
        if(e.which == 13) {
			event.preventDefault();
			rungame();
	}
	});
	$("#newgame").click(function() {
		newgame();
	});
});	