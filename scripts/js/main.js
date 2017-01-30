
$('h1').delay(300).fadeIn(1500, function (){
$('footer').delay(500).fadeIn(1500).delay(1000).fadeOut(1500);
	$('.btn-start').fadeIn('slow');
	$('#time').fadeIn('slow');
	$('h1').fadeOut('slow');
	$('.main-holder').delay(800).fadeIn(1500);
	$('.progress').fadeIn(500);
	$('.progress').delay(5000).addClass('full-width');
});




   // Declare variables

  let currentSession = 10;
  let seconds = currentSession * 60; 
  let minutes = Math.floor(seconds / 60);
  let breakTime = 5;
  let remainderSeconds = seconds % 60; 
  let started = false;
  let countDown;



// Start the timer
$('.btn-start').on('click', function (){
  if (!started) {
    startTimer(currentSession);
    $('.btn-start').text('Pause session');
  }
  else if (started) {
    clearInterval(countDown);
    started = false;
    $('.btn-start').text('Resume session');
  }
});


// Start session timer

function startTimer(currentSession) { 
  started = true;
  displayTime();
  countDown = setInterval(() => {
    seconds--;
    minutes = Math.floor(seconds / 60);
    remainderSeconds = seconds % 60;
    let progressPerc = (seconds/(currentSession * 60)*100);
    $('.progress').css('width', progressPerc+'%');

if (seconds <= 0) {
  clearInterval(countDown);
  playSound();
  
}
displayTime();

}, 1000);
}

// Show the timer

function displayTime() {
 $('#time').text(`${minutes}:`);
 $(".seconds").text(`${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`);


 if (minutes == currentSession) {
  
 }
 return;
}



function increaseTime(e) {

currentSession++;
minutes = currentSession;
seconds = currentSession * 60; 
remainderSeconds = seconds % 60; 
displayTime();
sessionLength.textContent=(currentSession);
}


// Play a sound when timer has finished

      function playSound() {
        var sound = new Audio('sounds/Magic_Wand_Noise.mp3');
        sound.play();
      }


// Reset the timer


const resetTimer =  $('btn-start').on('click', () =>{     
    clearInterval(countDown);
    minutes = currentSession;
    seconds = currentSession * 60;
    remainderSeconds = seconds % 60; 
     displayTime();
    started = false;
    startTimerButton.textContent=('Start');
});


// Increase or decrease length of session

$('#minus-five').on('click', function(){

	if(currentSession>=6){
			currentSession = currentSession-5;
			console.log(currentSession);
	$('#time').text(currentSession+'.00');
	minutes = currentSession;
	displayTime();

	}
	else {
		return
	}
	
});

$('#minus-one').on('click', function(){
	if(currentSession>=2){
			currentSession = currentSession-1;
			console.log(currentSession);
			seconds = currentSession * 60; 
remainderSeconds = seconds % 60; 
	$('#time').text(currentSession+'.00');
	minutes = currentSession;
	displayTime();
	}
	else {
		return
	}
});

$('#plus-five').on('click', function(){
			currentSession = currentSession+5;
			console.log(currentSession);
			seconds = currentSession * 60; 
remainderSeconds = seconds % 60; 
	$('#time').text(currentSession+'.00');
	minutes = currentSession;
	displayTime();
});

$('#plus-one').on('click', function(){
			currentSession = currentSession+1;
			console.log(currentSession);
			seconds = currentSession * 60; 
remainderSeconds = seconds % 60; 
	$('#time').text(currentSession+'.00');
	minutes = currentSession;
	displayTime();
});

function blink(){
	$('.seconds').fadeOut(100).fadeIn(500);
}
