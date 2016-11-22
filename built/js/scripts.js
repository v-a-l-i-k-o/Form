$(document).ready(function() {
// ------------------------------------------------------------------------------------

/* ===== CUSTOM CODE: ===== */
  
/* ----- change bg ----- */

function ChangeBg() {
	var counter = 0; 
	var bgStore = ['img/nastol__full.jpg', 'img/conference-bg__full.png	'];
	var bgContainer = $('.wrapper__conference');
	setInterval(function() {
    bgContainer.fadeOut(150, function () {
      bgContainer.css('background-image', 'url('+bgStore[counter++]+')');
      bgContainer.fadeIn(100);
    });

    if (counter == bgStore.length)
      counter = 0;
  }, 5000)
};

ChangeBg();

/* ----- countDown ----- */

var remain = 14105;

function parseTime(tamp){
  if (tamp < 0) tamp = 0;
  var day = Math.floor((tamp/60/60)/24);
  var hour = Math.floor(tamp/60/60);
  var mins = Math.floor((tamp - hour*60*60)/60);
  var secs = Math.floor(tamp - hour*60*60 - mins*60); 
  var left_hour = Math.floor((tamp - day*24*60*60)/60/60);
	
	if (String(day).length > 1) {
    $('.js-digit-days span:first').text(String(day)[0]);
    $('.js-digit-days span:last').text(String(day)[1]);
  } else {
  	$('.js-digit-days span:first').text(0);
    $('.js-digit-days span:last').text(String(day)[0]);
  }

  if (String(left_hour).length > 1) {
    $('.js-digit-hours span:first').text(String(left_hour)[0]);
    $('.js-digit-hours span:last').text(String(left_hour)[1]);
  } else {
  	$('.js-digit-hours span:first').text(0);
    $('.js-digit-hours span:last').text(String(left_hour)[0]);
  }

  if (String(mins).length > 1) {
    $('.js-digit-mins span:first').text(String(mins)[0]);
    $('.js-digit-mins span:last').text(String(mins)[1]);
  } else {
  	$('.js-digit-mins span:first').text(0);
    $('.js-digit-mins span:last').text(String(mins)[0]);
  }

  if (String(secs).length > 1) {
    $('.js-digit-secs span:first').text(String(secs)[0]);
    $('.js-digit-secs span:last').text(String(secs)[1]);
  } else {
  	$('.js-digit-secs span:first').text(0);
    $('.js-digit-secs span:last').text(String(secs)[0]);
  }
}

var startCountDown = setInterval(function() {
  remain = remain - 1;
  parseTime(remain);
  if(remain <= 0) {
    alert('Hello');
  }
}, 1000);

// -------------------------------------------------------------------------------------
});