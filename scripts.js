(function($){

    var isMobile = window.matchMedia("only screen and (max-width: 767px)");
    if (!isMobile.matches) {
        var $item = $("#bgCarouselSlider .carousel-item");
        var $wHeight = $(window).height();
        $item.eq(0).addClass("active");
        $item.height($wHeight);
        $item.addClass("full-screen");
        $(window).on("resize", function () {
            $wHeight = $(window).height();
            $item.height($wHeight);
        });
    }

    $("#bgCarouselSlider").carousel({
        interval: 10000,
        pause: false
    });

    // REVIEWS OWL 
    $('.roomtypes-owl').owlCarousel({
        items:1,
        loop:true,
        autoHeight: true,
        autoplay:10000,
        autoplaySpeed:5000,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        margin:30
    });

    // destination and Accommodation Carousel
    $('#destinationCarousel').carousel({
        interval: 10000,
        pause: 'hover'
    });

    //rooms OWL
    $('.rooms-owl').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:1,
        smartSpeed: 1000
    });

    /*Scroll to top*/
	$(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
		  $('.scrollup').fadeIn();
		} else {
		  $('.scrollup').fadeOut();
		}
    });
	$('.scrollup').click(function(){
	   $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
    });   

})(jQuery);