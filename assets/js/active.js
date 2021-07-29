(function() {
    "use strict";

    jQuery(document).ready(function($) {

        /*Popover*/
        $('[data-toggle="popover"]').popover({
            html: true,
            trigger: 'focus',
            //trigger :'manual',
            content: function() {
                var content = $(this).attr("data-popover-content");
                return $(content).children(".popover-body").html();
            }
        });

        $('[data-toggle="tooltip"]').tooltip();

        //For mobile menu
        $("#navigation").clone().prependTo($(".nav-mobile"));        
        $( "#navigation2" ).clone().prependTo( $( ".mobile-nav2" ) ); 
        $('.mobile-nav2-icon').on('click', function () {
                $('.mobile-nav2').toggleClass('active');
        });
        
        

        //Review
        $(".tech-maecenas-review-area").slick({
            slidesToShow: 1,
            arrows: false,
            dots: false,
            autoplay: false,
            infinite: true,
            prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
            nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
            mouseDrag: false,
            //touchMove: false,
            animateOut: 'slide',
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 480,
                settings: {
                    autoplay: false
                }
            }],

        }); //Review
        

        //AOS animation
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            once: true
        });
        

        $(".scrollup").on("click", function() {
            $("body,html").stop(false, false).animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 0) {
                $('header.for-sticky').addClass("sticky");
            } else {
                $('header.for-sticky').removeClass("sticky");
            }

            if ($(this).scrollTop() > 200) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }

        });

        $(window).on('scroll', function() {

            if ($(this).scrollTop() > 400 && ($(window).width() < 581)) {
                $('.start-mobile-btn').fadeIn();
            } else {
                $('.start-mobile-btn').fadeOut();
            }
        });
        $('.nav-mobile li').on('click', function() {
           //$('.nav-mobile li').removeClass('menu-drop-active'); 
           $(this).toggleClass('menu-drop-active');
        });
        $('.menu-check').on('click', function() {
          $('body').toggleClass('mobile-menu-body');
        });
        /*$('.teams-item-block').on('click', function() {
           $('.teams-item').removeClass('active'); 
           $(this).parent().addClass('active');
       }); 
       $('.teams-popup-close-btn').on('click', function() {
           $('.teams-item').removeClass('active');
       }); */  
        
    });

}(jQuery));