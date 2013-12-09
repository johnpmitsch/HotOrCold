$(document).ready(function() {

    //$('img').fadeIn(3000);
	//$('#statement1').delay(2000).fadeIn(1000);
	//$('#statement2').delay(4000).fadeIn(1000);
	//$('#guess').delay(6000).fadeIn(1000);
	//$('.button').delay(6000).fadeIn(1000);
	//$('.buttonTwo').delay(6000).fadeIn(1000);
		
	var randomNumber = Math.floor(Math.random() * 101);
	var guessResult = 0;
	var highlow=0;
	var userGuess = document.getElementById("guess").value;
	
	function checkrange() {
		if(userguess > 100 || userguess =='') || guess < 1 ) {	
			$("#invalid").animate({display:block;},400);	
		} else {
		}
	}
	
	function hotcold() {
		var abs=Math.abs(userGuess-randomNumber);
		if(abs>15) {
			$("#igloo").toggleClass("hide");
		} else if ((abs>0)&&(abs<15)) {
			$("#sahara").toggleClass("hide");
		} else if(abs == 0) {
			$("#correct").toggleClass("hide");
		};
	}
		
		

	$('#guessbutton').click(function() {
		
		
		checkrange();
		hotcold();
		
		if(userGuess<randomNumber) {
			highlow=1;
		} else if (userGuess>randomNumber) {
			highlow=2;
		}
		
			
		alert(abs);
		alert(highlow);
	});
	
		
});