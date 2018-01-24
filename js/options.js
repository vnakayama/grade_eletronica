
// Hover animation time in milliseconds:
var animTime = 400;


$(document).ready(function () {

	// Help button:
	addHover("#help", "#help-hover", "#help-wrapper");

	// Lock button:
	addHover("#lock", "#lock-hover", "#lock-wrapper");

});


function addHover(original, hover, wrapper){

	// Hides the second object:
	$(hover).hide();

	// Adds a mouseenter event to wrapper:
	$(wrapper).on("mouseenter", function(){
		$(original).fadeOut(animTime);
		$(hover).fadeIn(animTime);
	});

	// Adds a mouseleave event to wrapper:
	$(wrapper).on("mouseleave", function(){
		$(hover).fadeOut(animTime);
		$(original).fadeIn(animTime);
	});

}
