function intro(){

$('h1').delay(300).fadeIn(1500);
function showButton(){
$('footer').delay(500).fadeIn('slow').delay(1000).fadeOut(1500);
	$('.btn-start').fadeOut('slow');
	$('h1').fadeOut('slow');
	$('.spotify').delay(2000).fadeIn(1500);
	$('#time').fadeIn('slow');
};
};

intro();

function blink(){
	$('.seconds').fadeOut(50).fadeIn(500);
}

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
    let progressPerc = (seconds/(currentSession * 60)*100);
    $('.progress').css('width', progressPerc+'%');
           
    blink();
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

