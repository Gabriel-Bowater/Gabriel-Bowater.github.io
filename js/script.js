$(document).ready(function(){
	$('.appleAcademy').hide().fadeIn(5000);
	$('.cuteApple').css('scale', '1.2', 5000);
	console.log('document ready');
});

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