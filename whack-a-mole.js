const square = document.querySelectorAll('.square');	// Kijkt naar de class om te weten wat gebruikt wordt.
const mole = document.querySelectorAll('.mole');	// Kijkt naar class mol om te weten wat de mol is.
const timeLeft = document.querySelector('#time-left');	// Kijkt naar de id en de ingevoerde waarde in de HTML.
let score = document.querySelector('#score'); // Wordt gebruikt om de score in de HTML te plaatsen
var hitscore = 0;

let result = 0	// De begin waarde voor de score.
let currentTime = timeLeft.textContent 	// Dit toont de tijd waarde in de HTML twerwijl het aftelt.

function randomSquare() {	// Deze functie regelt het willekeurige gespring van de mol.
		square.forEach(className => {
			className.classList.remove('mole0')	// Dit zorgt ervoor dat de afbeelding van de mol verwijderd wordt in het vakje waar die net was.
			className.classList.remove('mole1')	// Dit zorgt ervoor dat de afbeelding van de mol verwijderd wordt in het vakje waar die net was.
			className.classList.remove('mole2')	// Dit zorgt ervoor dat de afbeelding van de mol verwijderd wordt in het vakje waar die net was.
		})
	let kans = Math.floor(Math.random() * 3)
	let randomPosition = square[Math.floor(Math.random() * 9)]	// Dit zorgt ervoor dat de mol op 1 van 9 verschillende plekken kan zijn.
	randomPosition.classList.add('mole'+kans)	// Dit zorgt ervoor dat de sfbeelding van de mol geplaatst wordt in het vakje waar die nu is.
	
	switch (kans){	// bij deze switch worden de punten toegekend op basis van 'bonus'; gewone mol is 1 punt, special is 5 punten
		case 0: 	
			hitscore = 1;	
			break;			// bij deze switch worden de punten toegekend op basis van 'bonus'; gewone mol is 1 punt, special is 5 punten
		case 1:
			hitscore = 3;	
			break; 
		case 2: 	
			hitscore = 5
			break;		// bij deze switch worden de punten toegekend op basis van 'bonus'; gewone mol is 1 punt, special is 5 punten	
	}
//	console.log(kans);
//	kans = Math.floor(Math.random() * 3)
//	if(kans == 1){
//		let randomPosition2 = square[Math.floor(Math.random() * 9)]
//		randomPosition2.classList.add('mole'+kans)
//		hitPosition2 = randomPosition2.id
//	}
	hitPosition = randomPosition.id	// Dit is zodat de hit/klik positie hetzelfde zal zijn als de willekeurige positie.
}

square.forEach(id => {	// Dit is de variabele voor de mol z'n (huidige) positie.
	id.addEventListener('click', () => {	// Luistert naar het klik evenement.
		var audio = document.getElementById("audio");
		audio.play();

		//		console.log(id.id +"<<>>"+hitPosition);
		if(id.id === hitPosition || id.id === hitPosition2){	// Als de klik op de zelfde plek is als de mol op dat moment dan telt het als een succesvolle mep.
			result = result + hitscore	// Telt er elke keer 1 bij als je succesvol op de mol klikt.
			score.textContent = result	// Zet de huidige score in de in de HTML veld.
			hitPosition=null	// Betekent dat de hitPosition nog geen waarde heeft.
			hitPosition2=null
		}
//		console.log("aantalpunten:"+result);
	})
})



function molletje() {	// Deze Function zorgt er voor dat de mol willekeurig beweegt.
	document.getElementById("start").disabled = true;	// Schakelt de knop uit.
	setInterval(randomSquare, 1000);	// Bepaalt met hoeveel millisecondes de mol tussen vakjes springt.
}

function timer() {	// Deze Function zorgt ervoor dat er een timer is die aftelt en daarna het spel beiendigt.
	document.getElementById("start").disabled = true;	// Schakelt de knop uit.
	currentTime--;	// De huidige tijd telt af.
	timeLeft.textContent = currentTime;	// Kijkt naar de ingevoerde waarde in de <p id="timeleft">
	if(currentTime === 0 ) {	// wanneer het op nul uitkomt eindigt dit het spel.
		alert("GAME OVER! je eind score = " + result);	// Toont het uiteindelijke resultaat in de alert pop-up.
		location.reload();	// Herlaad de pagina.
	}
}