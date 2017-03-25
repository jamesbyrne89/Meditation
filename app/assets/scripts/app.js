$(window).load(function() {

  // Declare variables
  let currentSession = 10;
  let seconds = currentSession * 60;
  let minutes = Math.floor(seconds / 60);
  let breakTime = 5;
  let remainderSeconds = seconds % 60;
  let started = false;
  let countDown;

  // Intro animation
  $('#logo').delay(300).fadeIn(2500);
  $('#subtitle').delay(300).fadeIn(2500).fadeOut(1500);
  $('#splash-text').delay(300).fadeIn(2500, function() {

    $('#splash-text').fadeOut(1500);
    $('#start').fadeIn('slow');
    $('#clock').fadeIn('slow');

    $('#app').delay(2000).fadeIn(1000);
    $('.progress').fadeIn(500).delay(2500).queue(function(fullWidth) {

      $('.progress').addClass('full-width');
      fullWidth();
    });
  });



  // Start the timer
  $('.btn-start').on('click', function() {
    if (!started && seconds > 0) {
      startTimer(currentSession);
      $('.btn-start').text('Pause session');
    } else if (started && seconds > 0) {
      clearInterval(countDown);
      started = false;
      $('.btn-start').text('Resume session');
    } else if (seconds == 0) {
      resetTimer();

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
      let progressPerc = (seconds / (currentSession * 60) * 100);
      $('.progress').removeClass('full-width').css('width', progressPerc + '%');

      if (seconds <= 0) {
        $('.btn-start').text('New session');
        clearInterval(countDown);
        playSound();
        $('.progress').css('opacity', '0');
      }
      displayTime();

    }, 1000);
  }

  // Show the timer

  function displayTime() {
    $('#mins').text(`${minutes}:`);
    $("#seconds").text(`${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`);


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
    sessionLength.textContent = (currentSession);
  }


  // Play a sound when timer has finished

  function playSound() {
    var sound = new Howl({
      src: ['sounds/Magic_Wand_Noise.mp3'],
      volume: 0.5
    });
    sound.play();

  }


  // Reset the timer


  function resetTimer() {

    minutes = currentSession;
    seconds = currentSession * 60;
    remainderSeconds = seconds % 60;
    displayTime();
    started = false;
    $('.btn-start').text('Start session');
    $('.progress').css('opacity', '1');
    $('.progress').addClass('full-width')
  };


  // Increase or decrease length of session

  $('#minus-five').on('click', function() {

    if (currentSession >= 6) {
      currentSession = currentSession - 5;
      seconds = currentSession * 60;
      remainderSeconds = seconds % 60;
      $('#time').text(currentSession + '.00');
      minutes = currentSession;
      displayTime();

    } else {
      return
    }

  });

  $('#minus-one').on('click', function() {
    if (currentSession >= 2) {
      currentSession = currentSession - 1;
      seconds = currentSession * 60;
      remainderSeconds = seconds % 60;
      $('#time').text(currentSession + '.00');
      minutes = currentSession;
      displayTime();
    } else {
      return
    }
  });

  $('#plus-five').on('click', function() {
    currentSession = currentSession + 5;
    console.log(currentSession);
    seconds = currentSession * 60;
    remainderSeconds = seconds % 60;
    $('#time').text(currentSession + '.00');
    minutes = currentSession;
    displayTime();
  });

  $('#plus-one').on('click', function() {
    currentSession = currentSession + 1;
    console.log(currentSession);
    seconds = currentSession * 60;
    remainderSeconds = seconds % 60;
    $('#time').text(currentSession + '.00');
    minutes = currentSession;
    displayTime();
  });

});