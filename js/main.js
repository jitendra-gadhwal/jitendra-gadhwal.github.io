
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	// affix the navbar after scroll below header
$('#nav').affix({
      offset: {
        top: $('nav').height()-100
      }
});	

	// skills chart
	$(document).ready(function(e) {

           /* Preloader */
        $(window).load(function () {
            $('.preloader').delay(800).fadeOut('slow');
        });
    
    
	//var windowBottom = $(window).height();
	var index=0;
	$(document).scroll(function(){
		var top = $('#skills').height()-$(window).scrollTop();
		console.log(top)
    let startAnimationPosition = 300;
    if($(window).width() < 720 && $(window).width() > 0){
      startAnimationPosition = 1800;
    }
    if($(window).width() < 980 && $(window).width() > 720){
      startAnimationPosition = 800;
    }
		if(top<startAnimationPosition){
			if(index==0){	
				$('.chart').easyPieChart({
					easing: 'easeOutBounce',
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
			
				}
			index++;
		}
	})
	//console.log(nagativeValue)
	});


  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	  	
    // CounterUp
	$(document).ready(function( $ ) {
		if($("span.count").length > 0){
			$('span.count').counterUp({
					delay: 10, // the delay time in ms
			time: 1500 // the speed time in ms
			});
		}
	});
	

  // Pretty Photo
  $("a[rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'fast', /* fast/slow/normal */
            slideshow: 5000, /* false OR interval time in ms */
            autoplay_slideshow: false, /* true/false */
            opacity: 0.80, /* Value between 0 and 1 */
            show_title: true, /* true/false */
            allow_resize: true, /* Resize the photos bigger than viewport. true/false */
            default_width: 500,
            default_height: 344,
            custom_markup: '<div id="map_canvas" style="width:500px; height:386px"></div>',
            changepicturecallback: function(){ initialize(); }
  });

}());


}
main();


var textInfo;
function initialize() {
  document.getElementById('map_canvas').innerHTML = textInfo;
}

function changetext(number) {
  switch(number){
    case 1:
      textInfo = '<div class="project">' +
        '<a href="https://photographai.com"> PhotographAI</a>' +
        '<ul>' +
        '<li>Currently going through CS253 – Web Application Engineering and CS61A – Structure & Interpretation of Computer Programs</li>' +
        '<li>Learnt basic Python, JavaScript, HTML, CSS on Codecademy.com.</li>' +
        '<li>An independent, dedicated, efficient person. These attributes are proved through the series of courses I have taken or I am taking as of now independently through online platforms.</li>' +
        '<li>Good Communication Skills, Presentation Skills, attitude towards leadership, authorisation and delegation, conflict resolution and negotiation and a very good team worker.</li>' +
        '<li>Currently going through CS253 – Web Application Engineering and CS61A – Structure & Interpretation of Computer Programs</li>' +
        '<li>Learnt basic Python, JavaScript, HTML, CSS on Codecademy.com.</li>' +
        '<li>An independent, dedicated, efficient person. These attributes are proved through the series of courses I have taken or I am taking as of now independently through online platforms.</li>' +
        '<li>An independent, dedicated, efficient person. These attributes are proved through the series of courses I have taken or I am taking as of now independently through online platforms.</li>' +
        '</ul>' +
        '</div>';
    break;
  }
}