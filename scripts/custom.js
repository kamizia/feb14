$(window).load(function() { 
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(400).fadeOut("slow"); // will fade out the white DIV that covers the website.
});


$(document).ready( function(){
    
    //Snowing heart effect
    $.fn.snow();
    
    //Animations on loading the page
    new WOW().init();
    
    
    //Clearing Email Field on Focus
    $("input").focus(function() {
      this.value = "";
    });
    
    //Pulsing big heart icon    
    function pulse() {
        $('.pulse').animate({
            fontSize: 110, 
            marginTop:0,
            opacity: 0.8
        }, 350, function() {
            $('.pulse').animate({
                fontSize: 100, 
                marginTop:5,
                opacity: 1
            }, 350, function() {
                pulse();
            });
        }); 
    };

    pulse();  
    
    //Coming Soon Countdown Date//    
	var endDate = "February 14, 2020 15:03:25";
	
	$('.countdown').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html(
		"<div class='countdown-box box-years'><div class='countdown-years'>" + this.leadingZeros(data.years, 2) + 
		"</div><span>years</span></div><div class='countdown-box box-days'><div class='countdown-days'>" + this.leadingZeros(data.days, 2) + 
		"</div><span>days</span></div><div class='countdown-box box-hours'><div class='countdown-hours'>" + this.leadingZeros(data.hours, 2) + 
		"</div><span>hours</span></div><div class='countdown-box box-minutes'><div class='countdown-minutes'>" + this.leadingZeros(data.min, 2) + 
		"</div><span>min</span></div><div class='countdown-box box-seconds'><div class='countdown-seconds'>" + this.leadingZeros(data.sec, 2) + 
		"</div><span>sec</span></div>");
	  }
	});
        
});