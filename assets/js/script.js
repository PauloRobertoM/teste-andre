(function($, window) {
    $('#owl-vitrine').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // $(window).scroll(function(){
    //       if( $('.teste').is(":visible") ) {
    //         $('.teste').addClass('enabled');
    //       }
    //       if( $('.teste').is(":hidden") ) {
    //         $('.teste').removeClass('enabled');
    //       }
    //     });
    // $(window).scroll(function () {
    //     $('.teste').each(function () {
    //         var imagePos = $(this).offset().top;
    //         var imageHeight = $(this).height();
    //         var topOfWindow = $(window).scrollTop();

    //         if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
    //             $(this).addClass("enabled");
    //         } else {
    //             $(this).removeClass("enabled");
    //         }
    //     });
    // });
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.teste').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).addClass("enabled");
                    
            }
            
        }); 
    
    });
})(jQuery, window);