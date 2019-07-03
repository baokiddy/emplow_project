/* Handle Home Content Height
------------------------------------------------ */
var handleHomeContentHeight = function() {
    $('#home').height($(window).height());
    
    $(window).on('resize', function() {
   		$('#home').height($(window).height());
    });
};


/* Handle Header Navigation State
------------------------------------------------ */
var handleHeaderNavigationState = function() {
    $(window).on('scroll load', function() {
        if ($('#header').attr('data-state-change') != 'disabled') {
            var totalScroll = $(window).scrollTop();
            var headerHeight = $('#header').height();
            if (totalScroll >= headerHeight) {
                $('#header').addClass('navbar-small');
            } else {
                $('#header').removeClass('navbar-small');
            }
        }
    });
};

/* Handle Page Scroll Content Animation
------------------------------------------------ */
var handlePageScrollContentAnimation = function() {
    $('[data-scrollview="true"]').each(function() {
        var myElement = $(this);
        var elementWatcher = scrollMonitor.create( myElement, 60 );

        elementWatcher.enterViewport(function() {
            $(myElement).find('[data-animation=true]').each(function() {
                var targetAnimation = $(this).attr('data-animation-type');
                var targetElement = $(this);
                if (!$(targetElement).hasClass('contentAnimated')) {
                    if (targetAnimation == 'number') {
                        var finalNumber = parseInt($(targetElement).attr('data-final-number'));
                        $({animateNumber: 0}).animate({animateNumber: finalNumber}, {
                            duration: 1000,
                            easing:'swing',
                            step: function() {
                                var displayNumber = handleAddCommasToNumber(Math.ceil(this.animateNumber));
                                $(targetElement).text(displayNumber).addClass('contentAnimated');
                            }
                        });
                    } else {
                        $(this).addClass(targetAnimation + ' contentAnimated');
                        setTimeout(function() {
                            $(targetElement).addClass('finishAnimated');
                        }, 1500);
                    }
                }
            });
        });
    });
};

/* Handle Header Scroll To Action
------------------------------------------------ */
var handleHeaderScrollToAction = function() {
    $(document).on('click', '[data-click=scroll-to-target]', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var target = ($(this).attr('data-scroll-target')) ? $(this).attr('data-scroll-target') : '';
        var target = (!target && $(this).attr('href')) ? $(this).attr('href') : target;
        var headerHeight = 50;
        $('html, body').animate({
            scrollTop: $(target).offset().top - headerHeight
        }, 500);
        
        if ($(this).attr('data-toggle') == 'dropdown') {
            var targetLi = $(this).closest('li.dropdown');
            if ($(targetLi).hasClass('open')) {
                $(targetLi).removeClass('open');
            } else {
                $(targetLi).addClass('open');
            }
        }
    });
    $(document).click(function(e) {
        if (!e.isPropagationStopped()) {
            $('.dropdown.open').removeClass('open'); 
        }
    });
};