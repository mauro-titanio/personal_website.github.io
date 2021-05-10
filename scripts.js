$( document ).ready(function() {
// Rotating words
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340 + (i * 80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 2000);
// End rotating words





if ($( window ).width() >= 200) {

  var controller = new ScrollMagic.Controller();
// Contact Icon animation
$(".contact-icon").each(function() {

  var tween = TweenMax.to($(this), 1, {
    opacity: 1,
    y: 0,
    repeat: 1,
    delay: 1.5,
  });


  var scene = new ScrollMagic.Scene({
      triggerElement: ("#contact"),
      duration: "20%",
      triggerHook: 0.5,
    })
    .setTween(tween)
    .addTo(controller);
});
// End Contact Icon animation



// Services animations
var scene = new ScrollMagic.Scene({
    triggerElement: "#services",
    duration: "5%",
  })
  .setTween(".one", 0.5, {
    y: 0,
    opacity: 1
  })
  .addTo(controller);




var scene = new ScrollMagic.Scene({
    triggerElement: "#services",
    duration: "10%",
  }, 1000)
  .setTween(".two", 0.5, {
    y: 0,
    opacity: 1
  })
  .addTo(controller);



var scene = new ScrollMagic.Scene({
    triggerElement: "#services",
    duration: "15%",
  }, 1000)
  .setTween(".three", 0.5, {
    y: 0,
    opacity: 1
  })
  .addTo(controller);


var scene = new ScrollMagic.Scene({
    triggerElement: "#services",
    duration: "20%",
  }, 1000)
  .setTween(".four", 0.5, {
    y: 0,
    opacity: 1
  })
  .addTo(controller);
  // End of Services animations




// Section titles animation
$(".section-title").each(function() {
  var tween = TweenMax.to($(this), 2, {
    opacity: 1,
    x: 0,
    repeat: 1,
  });

  var scene = new ScrollMagic.Scene({
      triggerElement: (this),
      duration: "20%",
      triggerHook: 0.8,
    })
    .setTween(tween)
    .addTo(controller);
});
// End section title animation


// About text animation
var scene = new ScrollMagic.Scene({
    triggerElement: "#about",
    duration: "20%",
  }, 1000)
  .setTween(".description", 1, {
    opacity: 1
  })

  .addTo(controller);

  scene.on("end", function(event) {
     $(".profile").toggleClass("illuminated");
     $(".my-image::before").toggleClass("morph");
  });
  // End of About text animation




    // End of Services animations










};
});
