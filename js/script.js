/************
HEADER
************/

$(document).ready(function(){
	$('.appleAcademy').hide().fadeIn(2000);
	$('.cuteApple').css('scale', '1.2', 5000);
	console.log('document ready');
});



/***********
GALLERY PAGE
***********/
//problem - clicking on images leads to dead end
//solution - create an overlay with the fullsized image; a lightbox.

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
// add image
$overlay.append($image);
// add caption
$overlay.append($caption);


//add overlay



$('body').append($overlay);


// get clicks on the image links
$('#gallery a').click(function(event){
	event.preventDefault();
	
	// update overlay with linked image
	var imageLocation = $(this).attr('href');
	$image.attr('src', imageLocation);
	//debugging
	console.log(imageLocation);

	//display image's alt text as caption
	var captionText = $(this).children('img').attr('alt');
	
	$caption.text(captionText);
	//show overlay


	$overlay.show();
});


//an escape condition (click to close)
$overlay.click(function(){
	$overlay.hide();
});


/*********
QUIZ PAGE
*********/

//making quiz question appear one by one, adding a score counter

var score = 0
var quizover = true
var rank = 'initial';



$('.question1').hide();
$('.question2').hide();
$('.question3').hide();
$('.question4').hide();
$('.question5').hide();
$('.quizscoring').hide();

$('.correct').click(function(){
	score += 1
	console.log(score)
	console.log(rank)
})

rank='spank'

$('#quiz_start_button').click(function(){
	$(this).hide();
	$('.question1').fadeIn(600);
});
$('.question1').click(function(){
	$('.question1').hide();
	$('.question2').fadeIn(600);
});
$('.question2').click(function(){
	$('.question2').hide();
	$('.question3').fadeIn(600);
});
$('.question3').click(function(){
	$('.question3').hide();
	$('.question4').fadeIn(600);
});
$('.question4').click(function(){
	$('.question4').hide();
	$('.question5').fadeIn(600);
});
$('.question5').click(function(){
	$('.question5').hide();
	$('.quizscoring').fadeIn(600);
	quizover = false
	alert('You got ' + score + ' out of 5! Check out your Apple Rank')
});

// if(1 == score){
// 	rank ='Amateur';
// 	console.log('amateur');
// 	console.log(rank);
// };
// if(2 == score){
// 	rank = 'Aspirant';
// };
// if(3 == score){
// 	rank = 'Adventurer';
// };
// if(4 == score){
// 	rank = 'Acolyte';
// };
// if(5 == score){
// 	rank = 'Academic';
// };

// if (quizover = false){


// }