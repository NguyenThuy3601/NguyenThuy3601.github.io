$(document).ready(function () {

        $('.khoiPorfolio').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 800,
            centerMode: true,
        });
     
        $(window).scroll(function () { 
        
            var VTw = window.pageYOffset;
                VTh = $('header').offset().top -20;
                VT2 = $('.khoiAbout').offset().top -100;
                VT3 = $('.baoPor').offset().top -100;
                VT4 = $('.khoiContact').offset().top -100;
                VTf = $('footer').offset().top -50;
    
                if (VTw < VTh) {
                    $('.menucon').removeClass('active');
                } 
    
                if (VTw >= VTh && VTw < VT2) {
                    $('.menucon').removeClass('active');
                    $('.baby-1').addClass('active');
                }
    
                if (VTw >= VT2 && VTw < VT3) {
                    $('.menucon').removeClass('active');
                    $('.baby-2').addClass('active');
                }
    
                if (VTw >= VT3 && VTw < VT4) {
                    $('.menucon').removeClass('active');
                    $('.baby-3').addClass('active');
                }
    
                if (VTw > VT4 && VTw <= VTf) {
                    $('.menucon').removeClass('active');
                    $('.baby-4').addClass('active');
                }
        });

        $('.baby-1').click(function (e) { 
            e.preventDefault();

            var VTh = $('header').offset().top -20;
            $('html').animate ({
                scrollTop: VTh
            }, 'slow')
            
        });
    
        $('.baby-2').click(function (e) { 
            e.preventDefault();

            var VT2 = $('.khoiAbout').offset().top;
            $('html').animate ({
                scrollTop: VT2
            }, 'slow')
        });
    
        $('.baby-3').click(function (e) { 
            e.preventDefault();

            var VT3 = $('.baoPor').offset().top;
            $('html').animate ({
                scrollTop: VT3
            }, 'slow')
        });
    
        $('.baby-4').click(function (e) { 
            e.preventDefault();

            var VT4 = $('.khoiContact').offset().top;
            $('html').animate ({
                scrollTop: VT4
            }, 'slow')
        });

        $('.nut1').click(function (e) { 
            e.preventDefault();

            var VT4 = $('.khoiContact').offset().top;
            $('html').animate ({
               scrollTop: VT4
            }, 'slow')
        });
        

        $('.nut2').click(function (e) { 
            e.preventDefault();

            var VT2 = $('.khoiAbout').offset().top;
            $('html').animate ({
               scrollTop: VT2
            }, 'slow')
        });
        

});