/* Author: angus
 *
*/

	/*
     * curtain
     */
    
	$('.curtains').curtain({
		scrollSpeed : 450,
		controls : '.menu',
		curtainLinks : '.curtain-links'
	});
	
	
	$(".like-wrapper").click(function(){
		$("#like-modal").toggleClass("active",300);
	});
	
	/*
 	 * backstretch
    */
	var bs_images = [
      	"img/spring/bg.jpg", 	
      	"img/time/bg.jpg",
      	"img/meow/bg.jpg",
      	"img/walker/bg.jpg",
      	"img/voidness/bg.jpg"
	];

  	// preload images
  	$(bs_images).each(function(){
    	$("<img/>")[0].src = this; 
  	});
    
    $.backstretch(bs_images[0], {speed: 800});//default background
    
    $("#kwick1").hover(function() {
    	$.backstretch(bs_images[0]);
    	$("#main header").removeClass("dark");
  	});
  	
  	$("#kwick2").hover(function() {
    	$.backstretch(bs_images[1]);
    	$("#main header").removeClass("dark");
  	});
  	
  	$("#kwick3").hover(function() {
    	$.backstretch(bs_images[2]);
    	$("#main header").removeClass("dark");
  	});
  	
  	$("#kwick4").hover(function() {
    	$.backstretch(bs_images[3]);
    	$("#main header").addClass("dark");
  	});
  	
  	$("#kwick5").hover(function() {
    	$.backstretch(bs_images[4]);
    	$("#main header").addClass("dark");
  	});
	
	
		
	/*
     * airport
     */
	
	$("#airport").airport([
    	'warm',	
    	'sweet',
    	'great',
    	'lovely',
    	'unique',			
    	'loving',
    	'perfect',		
    	'amazing',			
    	'beautiful',			
    	'excellent',			
    	'brilliant',			
    	'wonderful',			    							
    	'unforgettable'
    ]);
    
    /*
     * kwicks
     */
    
    $().ready(function() {  
    	$('.kwicks').kwicks({  
        	max: 160,  
        	spacing:  0  
    	});  
	});




