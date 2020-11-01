// turn page effect from turn.js
$("#flipbook").turn({
  width: 700,
  height: 500,
  //autoCenter: true,
  duration: 1800 // in milliseconds
});

// open + close slide


var $overlay = $('.overlay');
var $popup = $('.pop-window');
var $slide2 = $('.slide-2');
var audio = new Audio("./slide-2/meow.wav");
var bgAudio = new Audio("./bg-cover/fly.mp3");


$slide2.hide();
$popup.hide();
$overlay.hide();
$('.title-page-2').hide();
$('.text-page-2').hide();
$('#butterfly-container').hide();
$('.classroom').hide();
$('.teacher').hide();
$('.para-p4').hide();
$('.word-p4').hide();
$('.left-text-s3').hide();

$(document).ready(
  function() {

    $('#flipbook').hover(
      function() {
        bgAudio.play();
      }
    );


    // side 1
    // click button to show slide 1
    $('#show').click(
      function() {
        $overlay.fadeIn(700);
        $popup.delay(700).fadeIn(700);
      });

    // click anywhere to close slide 1
    $popup.click(
      function() {
        $overlay.delay(800).fadeOut();
        $popup.delay(800).fadeOut();
      });

    // hover and after hover effect
    $(".text-card").hover(
      function() {
        $(this).removeClass('out').addClass('in');
      },
      function() {
        $(this).removeClass('in').addClass('out');
      }
    );
    // hover page 2 to show text
    $('#animate-page-2').hover(
      function() {
        $('.title-page-2').show();
        $('.title-page-2').addClass('fade-in-left');
        $('.text-page-2').show();
        $('.text-page-2').addClass('fade-in-left');

      }
    );
    //side 2
    $('#rotate-in').hover(
      function() {
        $('.classroom').show();
        $('.classroom').addClass('slide-in');
        $('.para-p4').show();
        $('.para-p4').addClass('fade-in');
      }
    )

    $('#slide-in').hover(
      function() {
        $('.teacher').show();
        $('.teacher').addClass('slide-in');
        $('.word-p4').show();
        $('.word-p4').addClass('fade-in');
      }
    )

    // click to rotate the card / open slide 2
    $('#rotate-in').click(
      function() {
        $(".card").removeClass('rot-out').addClass('rot-in');
        $slide2.show();
      }
    )

    // click to return the card / close slide 2
    $('#rotate-out').click(
      function() {
        $(".card").removeClass('rot-in').addClass('rot-out');
        $slide2.hide();
        audio.play();
      }
    )

    // Side 3
    $('#side-3').click(
      function() {
        $('#butterfly-container').show();
        $("#butterfly-container").delay(5000).fadeOut(500);
        $('.left-text-s3').show();
        $('.right-text-s3').show();
        $('.petal').show();
      }
    );
  });
// add 100 dots
var x = "",
  i = 0;
while (i < 100) {
  x = x + "<span>•</span>";
  i++;
}
document.getElementById("firefly").innerHTML = x;
