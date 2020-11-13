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
$('.floor').hide();

//music control
function music() {
  bgAudio.play();
  $(".audio-play i").removeClass('fa-pause').addClass("fa-play");
}

$(".audio-play").dblclick(
  function() {
    bgAudio.pause();
    $(".audio-play i").removeClass('fa-play').addClass("fa-pause");
  });


// side 1
// click button to show slide 1
function showSlide1() {
  $overlay.fadeIn(700);
  $popup.delay(700).fadeIn(700);
  document.getElementById("cover-mtext").addEventListener("webkitAnimationEnd",
    function() {
      $("#cover-mtext").removeClass("cover-mtext");
    }
  );
}
// click anywhere to close slide 1
$popup.click(
  function() {
    $overlay.delay(800).fadeOut();
    $popup.delay(800).fadeOut();
  }
);

// hover and after hover effect
$(".text-card").hover(
  function() {
    $(this).addClass('in');
  }
);

// hover page 2 to show text
$('#animate-page-2').one("mouseenter",
  function() {
    $('.title-page-2').show();
    $('.title-page-2').addClass('fade-in-left');
    $('.text-page-2').show();
    $('.text-page-2').addClass('fade-in-left');
    document.getElementById("animate-page-2").addEventListener("webkitAnimationEnd",
      function() {
        $('.title-page-2').removeClass('fade-in-left');
        $('.text-page-2').removeClass('fade-in-left');
      }
    );
  }
);

//side 2
$('#rotate-in').one("mouseenter",
  function() {
    $('.classroom').show();
    $('.classroom').addClass('slide-in');
    $('.para-p4').show();
    $('.para-p4').addClass('fade-in-top');
    document.getElementById("rotate-in").addEventListener("webkitAnimationEnd",
      function() {
        $('.classroom').removeClass('slide-in');
        $('.para-p4').removeClass('fade-in-top');
      }
    );
  }
);

$('#slide-in').one("mouseenter",
  function() {
    $('.teacher').show();
    $('.teacher').addClass('slide-in');
    $('.word-p4').show();
    $('.word-p4').addClass('fade-in');
    document.getElementById("slide-in").addEventListener("webkitAnimationEnd",
      function() {
        $('.teacher').removeClass('slide-in');
        $('.word-p4').removeClass('fade-in');
      }
    );
  }
);

// click to rotate the card / open slide 2
function slide2() {
  $(".card").removeClass('rot-out').addClass('rot-in');
  $slide2.show();
  $(".floor").fadeIn(500);
}


// click to return the card / close slide 2
$('#rotate-out').click(
  function() {
    $(".card").removeClass('rot-in').addClass('rot-out');
    $slide2.fadeOut(1500);
    $(".floor").fadeOut(500);
    audio.play();
  }
);

// Side 3+
function side3plus() {
  $(".fire").show();
  $(".fire").addClass("fire-fade-in");
  $(".rocket").addClass("bounce-out-top");
  document.getElementById("side-3plus").addEventListener("webkitAnimationEnd",
    function() {
      setTimeout(function() {
        $(".fire").removeClass("fire-fade-in");
        $(".rocket").removeClass("bounce-out-top");
      }, 5000);
    }
  );
}

// Side 3
function side3() {
  $('#butterfly-container').show();
  $("#butterfly-container").delay(5000).fadeOut(500);
  $('.left-text-s3').show();
  $('.left-text-s3').addClass("lts3");
  $('.right-text-s3').show();
  $('.right-text-s3').addClass("rts3");
  $('.petal').show();
  $('.petal-layer-1:first').addClass("l-petal-1");
  $('.petal-layer-2:first').addClass("l-petal-2");
  $('.petal-layer-3:first').addClass("l-petal-3");
  $('.petal-layer-4:first').addClass("l-petal-4");
  $('.petal-layer-5:first').addClass("l-petal-5");
  $('.petal-layer-1:last').addClass("r-petal-1");
  $('.petal-layer-2:last').addClass("r-petal-2");
  $('.petal-layer-3:last').addClass("r-petal-3");
  $('.petal-layer-4:last').addClass("r-petal-4");
  $('.petal-layer-5:last').addClass("r-petal-5");
  document.getElementById("rose-p1").addEventListener("webkitAnimationEnd",
    function() {
      setTimeout(function() {
        $('.left-text-s3').removeClass("lts3");
        $('.right-text-s3').removeClass("rts3");
        $('.petal-layer-1:first').removeClass("l-petal-1");
        $('.petal-layer-2:first').removeClass("l-petal-2");
        $('.petal-layer-3:first').removeClass("l-petal-3");
        $('.petal-layer-4:first').removeClass("l-petal-4");
        $('.petal-layer-5:first').removeClass("l-petal-5");
        $('.petal-layer-1:last').removeClass("r-petal-1");
        $('.petal-layer-2:last').removeClass("r-petal-2");
        $('.petal-layer-3:last').removeClass("r-petal-3");
        $('.petal-layer-4:last').removeClass("r-petal-4");
        $('.petal-layer-5:last').removeClass("r-petal-5");
      }, 6000);
    }
  );
}

// add 100 dots
var x = "",
  i = 0;
while (i < 100) {
  x = x + "<span>•</span>";
  i++;
}
document.getElementById("firefly").innerHTML = x;
