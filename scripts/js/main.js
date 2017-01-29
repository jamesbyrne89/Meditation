$('.btn-start').on('click', function(){
	$('.btn-start').fadeOut('slow');
	$('h1').fadeOut('slow');
	$('.spotify').addClass('visible');
	$('#time').fadeIn('slow');
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
    startTimer();
    $('.btn-start').text('Pause');
  }
  else if (started) {
    clearInterval(countDown);
    started = false;
    $('.btn-start').text('Start');
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
    $('.seconds').fadeOut(50).fadeIn(500);
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
        var sound = new Audio('Magic_Wand_Noise.mp3');
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