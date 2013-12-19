/* Author: angus
 * 
 */

	/*-- pic info --*/
	$("#details").hover(function(){
		$("#modal").toggleClass("active",300);
	});
	
	/*
     * fancybox
     */
	
	$(".content figure a").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'outside'
    		}
    	}
    });
    
    /*-- return to home --*/
    $("#go-back").click(function(){
    	window.location.href='Journey.html#beautiful';
    });





