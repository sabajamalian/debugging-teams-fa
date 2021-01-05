$(function() {
    "use strict";


	
	
	
	    /* ==========================================================================
       CTA Form   
       ========================================================================== */	
	
	    $('#mc-form').ajaxChimp({
        callback: callbackFunctionCta,
        url: 'http://csmthemes.us3.list-manage.com/subscribe/post?u=9666c25a337f497687875a388&id=5b881a50fb'
            // http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    });

    function callbackFunctionCta(resp) {
        if (resp.result === 'success') {
            $('.sub-form-error').slideUp();
            $('.sub-form-success').slideDown();
        } else if (resp.result === 'error') {
            $('.sub-form-success').slideUp();
            $('.sub-form-error').slideDown();
        }
    }
	

	
	

    /* ==========================================================================
   Preload
   ========================================================================== */
    
    $(window).load(function() {
        
        $("#status").fadeOut();
        
        $("#preloader").delay(1000).fadeOut("slow");
    });


    /* ==========================================================================
   parallax scrolling 
   ========================================================================== */
    
    
		
		if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        		if($(window).width()>992){skrollr.init({forceHeight:false})}$(window).on("resize",function(){if($(window).width()<=	992){skrollr.init().destroy()}});$(window).on("resize",function(){if($(window).width()>992){skrollr.init({forceHeight:false})}});
    }




    
    
 /* ==========================================================================
       Number animation
       ========================================================================== */   

    
    $('.counter').waypoint(function() {
        
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

        
        $('.total-number-1').animateNumber({
            number: 205, //change value here
            numberStep: comma_separator_number_step
        }, 2000);
        
        $('.total-number-2').animateNumber({
            number: 1, //change value here
            numberStep: comma_separator_number_step
        }, 2000);
        
        $('.total-number-3').animateNumber({
            number: 1200, //change value here
            numberStep: comma_separator_number_step
        }, 2000);
        
        $('.total-number-4').animateNumber({
            number: 1500, //change value here
            numberStep: comma_separator_number_step
        }, 2000);
    
    
    
    }, {
        offset: '80%'
    
    });


    /* ==========================================================================
   Tweet
   ========================================================================== */
    
    
    $('.tweet').twittie({
        username: 'envatomarket', // change username here
        dateFormat: '%b. %d, %Y',
        template: '{{tweet}}',
        count: 10
    }, function() {
        var item = $('.tweet ul');
        
        item.children('li').first().show().siblings().hide();
        setInterval(function() {
            item.find('li:visible').fadeOut(500, function() {
                $(this).appendTo(item);
                item.children('li').first().fadeIn(500);
            });
        }, 5000);
    });


    /* ==========================================================================
   Smooth Scroll
   ========================================================================== */
    
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                return false;
            }
        }
    });



    /* ==========================================================================
   Review slider
   ========================================================================== */
    
    $('.review-slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    });



    /* ==========================================================================
       Contact Form
       ========================================================================== */
    
    
    $('#contact-form').validate({
        
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: "<i class='fa fa-exclamation-triangle'></i>Please specify your name.",
            email: {
                required: "<i class='fa fa-exclamation-triangle'></i>We need your email address to contact you.",
                email: "<i class='fa fa-exclamation-triangle'></i>Please enter a valid email address."
            },
            message: "<i class='fa fa-exclamation-triangle'></i>Please enter your message."
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "php/contact-me.php",
                success: function() {
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor', 'default');
                        $('.success-cf').fadeIn();
                    });
										$('#contact-form')[0].reset();
                },
                error: function() {
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $('.error-cf').fadeIn();
                    });
                }
            });
        }
    });


    /* ==========================================================================
   ScrollTop Button
   ========================================================================== */
    
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top a').fadeIn(200);
        } else {
            $('.scroll-top a').fadeOut(200);
        }
    });
    
    
    $('.scroll-top a').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });


    /* ==========================================================================
   sticky nav
   ========================================================================== */
    
    
    
    var menu = $('.navbar');
    
    var stickyNav = menu.offset().top;
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > $(window).height()) {
            menu.addClass('stick');
        } else {
            menu.removeClass('stick');
        
        }
    });


	/* ==========================================================================
	   Collapse nav bar
	   ========================================================================== */

			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 	$(".navbar-nav li a").on('click', function() {
	    $(".navbar-collapse").collapse('hide');
	});
}


});
