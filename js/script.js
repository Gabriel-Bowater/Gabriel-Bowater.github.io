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
var quizover = false
var rank = 'initial';
reporting = ""
var $answerBoxWrong = $('<div id="answerboxwrong"><p id="answerBoxText">Incorrect :(</p></div>');
var $answerBoxCorrect = $('<div id="answerboxcorrect"><p id="answerBoxText">That\' Apple-solutely Correct! ^_^</p></div>');
var $answerCaption = $('<p></p>');
// var $reportBox = $('<div id="reportBox"><p id="answerBoxText">' + reporting + '</p></div>');
// $('header').append($reportBox);
$('header').append($answerBoxWrong);
$('header').append($answerBoxCorrect);

var questions = ['.question1','.question2','.question3','.question4','.question5'];

for(var i in questions){
	$(questions[i]).hide();
}

$('.quizscoring').hide();

$('.correct').click(function(){
	score += 1
	$answerBoxCorrect.show();
	console.log(score)
	console.log(rank)
})

var $answerText = $('<p></p>');

$('.incorrect').click(function(event){

	$answerBoxWrong.show();
});

$answerBoxWrong.click(function(){
	$answerBoxWrong.fadeOut(300);
});

$answerBoxCorrect.click(function(){
	$answerBoxCorrect.fadeOut(300);
});



function runQuiz(){
	alert("Sup biatch!")
	for (var i in questions){
		$(questions[i]).click(function(){
			$(questions[i]).hide();
			$(questions[i+1]).fadeIn(600);
		});
	};
	quizover = true
	report();
};


$('#quiz_start_button').click(function(){
	$(this).hide();
	$('.question1').show();
});
$('.question1').click(function(){
	// runQuiz();
	$('.question1').hide();
	$('.question2').show();
});
$('.question2').click(function(){
	$('.question2').hide();
	$('.question3').show();
});
$('.question3').click(function(){
	$('.question3').hide();
	$('.question4').show();
});
$('.question4').click(function(){
	$('.question4').hide();
	$('.question5').show();
});
$('.question5').click(function(){
	$('.question5').hide();
	$('.quizscoring').show();
	quizover = true
	report();
});

if (quizover){
	report();
}

function report(){
	rank=''
	$('.quiztext').hide();
	switch(score){
		case 0: 
			rank = "Abortion";
			break;
		case 1: 
			rank = "Amateur";
			break;
		case 2: 
			rank = "Aspirant";
			break;
		case 3: 
			rank = "Adventurer";
			break;
		case 4: 
			rank = "Acolyte";
			break;
		case 5: 
			rank = "Academic";
	}
	reporting = ('You got ' + score + ' out of 5! You achieved the rank of Apple ' + rank)
	var $reportBox = $('<div id="reportBox"><p id="reportBoxText">' + reporting + '</p></div>');
	$('header').append($reportBox);
	$reportBox.show();
	console.log(reporting);
	
	$reportBox.click(function(){
		$reportBox.fadeOut(300);
	});
}


