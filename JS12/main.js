$(document).on('ready', function() {

  $(".map-img").on("click", function( event ){
  		var pageX = event.pageX
		var pageY = event.pageY
  	$(".map").append("<div class='placehold-container' style='position: absolute;'> <img class='placeholder' src='https://slack-files.com/files-tmb/T068NB2KC-F0701A2LT-cc9ffd1be9/marker_360.png'> </div>")
  	$(".placehold-container").last().css({'top' : pageY, 'left' : pageX})
  });
 
 $(".map").on('click', '.placehold-container', function( event ){
 	$(this).remove()
 })






























});