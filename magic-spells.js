$(window).load(function() {

    // init controller
	var controller = new ScrollMagic.Controller();

    // // TOPPER STUFF
    // fillTopper();
    // var topperHeight = $(window).height()
    // var scrollProgress = 5;
    // var topperScrollMagicController = new ScrollMagic({
    //     globalSceneOptions: {
    //         triggerHook: 'onLeave'
    //     }
    // });
    // function getTopperHeight() {
    //     return topperHeight / 1.5;
    // }
    // $(window).resize(function() {
    //     topperHeight = $(window).height();
    //     $('#topper').height($(window).height());

        // Force better DOM repainting hack. Helps on mobile
    //     $('html').addClass('force-gpu').removeClass('force-gpu');
    // });
    // var topperTextTween = TweenMax.staggerFromTo('#topper h1 span', 0.5,
    //     {
    //         y: 25,
    //         opacity: 0
    //     },
    //     {
    //         y: 0,
    //         opacity: 1
    //     },
    //     0.075
    // );
    // var starScene = new ScrollScene({
    //     triggerElement: '#topper',
    //     duration: getTopperHeight,
    //     offset: 0
    // })
    // .addTo(topperScrollMagicController)
    // .setTween(topperTextTween)
    // //.setPin('#topper')
    // .on('progress', function(e) {
    //     scrollProgress = e.progress * 100 * 2;
    //     if (scrollProgress <= 5) {
    //         scrollProgress = 5;
    //     }
    // })
    // .on('start', function(e) {
    //     $('body').addClass('hide-those-particles');
    // });
    // var camera, scene, renderer, mouseX = 0, mouseY = 0, particles = [];
    // initStars();
    // function initStars() {
    //     camera = new THREE.PerspectiveCamera(80, $('#topper').width() / $('#topper').height(), 1, 4000 );
    //     camera.position.z = 1000;
    //     scene = new THREE.Scene();
    //     scene.add(camera);
    //     renderer = new THREE.CanvasRenderer();
    //     renderer.setSize( $('#topper').width(), $('#topper').height() );
    //     document.getElementById('topper').appendChild( renderer.domElement );
    //     makeParticles();
    //     document.addEventListener( 'mousemove', onMouseMove, false );
    //     setInterval(update,1000/30);
    // }
    // function update() {
    //     updateParticles();
    //     renderer.render( scene, camera );
    // }
    // function makeParticles() {
    //     var particle, material;
    //     for ( var zpos= -1000; zpos < 1000; zpos+=5 ) {
    //         material = new THREE.ParticleCanvasMaterial( { color: 0x81dbeb, program: particleRender } );
    //         particle = new THREE.Particle(material);
    //         particle.position.x = Math.random() * 1000 - 500;
    //         particle.position.y = Math.random() * 1000 - 500;
    //         particle.position.z = zpos;
    //         particle.scale.x = particle.scale.y = 1;
    //         scene.add( particle );
    //         particles.push(particle);
    //     }
    // }
    // function particleRender( context ) {
    //     context.beginPath();
    //     context.arc( 0, 0, 1, 0,  Math.PI * 2, true );
    //     context.fill();
    // };
    // function updateParticles() {
    //     for(var i=0; i<particles.length; i++) {
    //         particle = particles[i];
    //         particle.position.z +=  scrollProgress * 0.1;
    //         if(particle.position.z>1000) particle.position.z-=2000;
    //     }
    // }
    // function onMouseMove( event ) {
    //     // Do nothing, based on scroll
    // }
    // $('.hover-block').hover(
    //     function() {
    //         explodeLetter($(this).parents('section').attr('id'), $(this).data('letter'), $(this).data('color'));
    //     }, function() {
    //         implodeLetter($(this).parents('section').attr('id'), $(this).data('letter'), $(this).data('color'));
    //     }
    // );
    // introStuff();




    // // BLURB STUFF
    // var scrollMagicController = new ScrollMagic();
    // var blurbTween = TweenMax.staggerFromTo('#blurb .item', 0.5,
    //     {
    //         y: 50,
    //         x: -50,
    //         opacity: 0
    //     },
    //     {
    //         y: 0,
    //         x: 0,
    //         opacity: 1
    //     },
    //     0.2
    // );
    // var blurbScene = new ScrollScene({
    //     triggerElement: '#blurb .item',
    //     duration: 500,
    //     offset: -200
    // })
    // .setTween(blurbTween)
    // .addTo(scrollMagicController);





    // // OUR PROCESS STUFF
    // $('#our-process span.icon').hover(function() {

    //     $('#our-process span.icon').removeClass('active');
    //     $(this).addClass('active');

    //     var match = $(this).data('match');

    //     $('#our-process h4').removeClass('active');
    //     $('h4.'+match).addClass('active');

    //     return false;
    // });
    // var processTween = TweenMax.staggerFromTo('#our-process h2 span', 0.5,
    //     {
    //         y: 150,
    //         opacity: 0.5
    //     },
    //     {
    //         y: 0,
    //         opacity: 0.1
    //     },
    //     0.1
    // );
    // var processScene = new ScrollScene({
    //     triggerElement: '#our-process h2',
    //     duration: 700,
    //     offset: -100
    // })
    // .setTween(processTween)
    // .addTo(scrollMagicController);
    // var processIconsTween = TweenMax.staggerFromTo('#our-process .step', 0.5,
    //     {
    //         opacity: 0.4
    //     },
    //     {
    //         opacity: 1
    //     },
    //     0.1
    // );
    // var processIconsScene = new ScrollScene({
    //     triggerElement: '#our-process h2',
    //     duration: 500,
    //     offset: -100
    // })
    // .setTween(processIconsTween)
    // .addTo(scrollMagicController);





    // // OUR SERVICES STUFF - WHAT WE DO STUFF
    // var serviceTween = TweenMax.fromTo('#our-services span', 0.5,
    //     {
    //         y: -100
    //     },
    //     {
    //         y: 0
    //     }
    // );
    // var serviceScene = new ScrollScene({
    //     triggerElement: '#our-services span',
    //     duration: 700,
    //     offset: 50
    // })
    // .setTween(serviceTween)
    // .addTo(scrollMagicController);
    // var serviceBlurryTween = TweenMax.fromTo('#our-services span.bg-img.normal', 0.5,
    //     {
    //         opacity: 1
    //     },
    //     {
    //         opacity: 0
    //     }
    // );
    // var serviceBlurryScene = new ScrollScene({
    //     triggerElement: '#our-services span.bg-img.normal',
    //     duration: 500,
    //     offset: 50
    // })
    // .setTween(serviceBlurryTween)
    // .addTo(scrollMagicController);
    // var serviceTextTween = TweenMax.fromTo('#our-services h2, #our-services ul', 0.5,
    //     {
    //         y: 0,
    //     },
    //     {
    //         y: -165
    //     }
    // );
    // var serviceTextScene = new ScrollScene({
    //     triggerElement: '#our-services',
    //     duration: 500,
    //     offset: 50
    // })
    // .setTween(serviceTextTween)
    // .addTo(scrollMagicController);





    // // CONTACT STUFF
    // initParticles();
    // $('#contact .input').click(function() {
    //     if ($(this).is(':focus')) {
    //         $('body').addClass('show-form-overlay');
    //     }
    // });
    // $('.form-overlay').click(function() {
    //     $('body').removeClass('show-form-overlay');
    //     return false;
    // });
    // $('#contact .input-wrap.checkbox input').change(function() {
    //     $('#contact .input-wrap.checkbox').toggleClass('nopeee');
    // });
    // sexyInputs();
    // var contactTween = TweenMax.staggerFromTo('#contact .input-wrap', 0.5,
    //     {
    //         y: 50
    //     },
    //     {
    //         y: 0
    //     },
    //     0.01
    // );
    // var contactScene = new ScrollScene({
    //     triggerElement: '#contact',
    //     duration: 800,
    //     offset: 100
    // })
    // .setTween(contactTween)
    // .addTo(scrollMagicController);
    // var contactTween2 = TweenMax.staggerFromTo('#contact h2 span', 0.5,
    //     {
    //         y: 75
    //     },
    //     {
    //         y: 0
    //     },
    //     0.075
    // );
    // var contactScene2 = new ScrollScene({
    //     triggerElement: '#contact',
    //     duration: 650,
    //     offset: 100
    // })
    // .setTween(contactTween2)
    // .addTo(scrollMagicController);
    // var canvasTween = TweenMax.fromTo('#contact canvas', 0.5,
    //     {
    //         opacity: 0
    //     },
    //     {
    //         opacity: 0.5
    //     }
    // );
    // var canvasScene = new ScrollScene({
    //     triggerElement: '#contact',
    //     duration: 700,
    //     offset: 0
    // })
    // .setTween(canvasTween)
    // .addTo(scrollMagicController);

    // var latestScene = new ScrollScene({
    //     triggerElement: '#latest',
    //     duration: 8000
    // })
    // .addTo(scrollMagicController)
    // .on('enter', function(e) {
    //     $('body').removeClass('hide-those-particles');
    // })
    // .on('leave', function(e) {
    //     $('body').addClass('hide-those-particles');
    // });


    // $('form').submit(function() {
    //     var form = $(this);
    //     form.find('.input').parent('.input-wrap').removeClass('has-error');

    //     var hasError = false;
    //     form.find('.input').each(function() {
    //         if ($(this).val() == '') {
    //             $(this).parent('.input-wrap').addClass('has-error');
    //             $(this).select();
    //             hasError = true;
    //             return false;
    //         }

    //         if ($(this).hasClass('email') && !isEmailValid($(this).val())) {
	//             $(this).parent('.input-wrap').addClass('has-error');
	//             $(this).select();
	//             hasError = true;
	//             return false;
    //         }

    //     });

    //     var formData = {};
    //     formData.email = $('input.email').val();
    //     formData.name = $('input.name').val();
    //     formData.inquiry = $('select.inquiry').val();
    //     formData.message = $('textarea.message').val();
    //     formData.subscribe = $('input.subscribe').prop('checked');
    //     formData = $.param(formData);

    //     if (!hasError) {
    //         $.getJSON(window.location.protocol + '//' + window.location.hostname + '/meowmeowmeow.php?'+formData, function(data) {
    //             console.log('test');

    //             // if (data.status == 'sent') {
    //                 $('.form-overlay').click();
    //                 $('input[type=text], textarea').val('');
    //                 $('#contact h2 span.lets').text('Thank');
    //                 $('#contact h2 span.chat').text('You!');
    //                 $('#contact').addClass('success');
    //             // }
    //         });
    //    }

    //     return false;
    // });



    // // FOOTER STUFF
    // var footerScene = new ScrollScene({
    //     triggerElement: '#footer',
    //     offset: -200
    // })
    // .on('enter', function(e) {

    //     $('.hover-block.d').trigger("mouseover");

    //     setTimeout(function() {
    //         $('.hover-block.d').trigger("mouseout");
    //     }, 700);


    //     $('.hover-block.i-1').trigger("mouseover");
    //     setTimeout(function() {
    //         $('.hover-block.i-1').trigger("mouseout");
    //     }, 700);

    //     $('.hover-block.g').trigger("mouseover");
    //     setTimeout(function() {
    //         $('.hover-block.g').trigger("mouseout");
    //     }, 700);


    //     $('.hover-block.i-2').trigger("mouseover");
    //     setTimeout(function() {
    //         $('.hover-block.i-2').trigger("mouseout");
    //     }, 700);

    //     $('.hover-block.t').trigger("mouseover");
    //     setTimeout(function() {
    //         $('.hover-block.t').trigger("mouseout");
    //     }, 700);

    //     $('.hover-block.a').trigger("mouseover");
    //     setTimeout(function() {
    //         $('.hover-block.a').trigger("mouseout");
    //     }, 700);

    //     $('.hover-block.l').trigger("mouseover");
    //     setTimeout(function() {
    //         $('.hover-block.l').trigger("mouseout");
    //     }, 700);

    // })
    // .addTo(scrollMagicController);

    // OUR ABOUT STUFF - WHAT IS THE STUFF
    var aboutTextTween = TweenMax.fromTo('#about h2, #about p', 0.5,
        {
            y: 100,
        },
        {
            y: -10
        }
    );
    var aboutTextScene = new ScrollMagic.Scene({
        triggerElement: '#about',
        duration: 800,
        offset: -150
    })
    .setTween(aboutTextTween)
    // .addIndicators()
    .addTo(controller);


    // OUR SERVICES STUFF - WHAT WE DO STUFF
    var serviceTextTween = TweenMax.fromTo('#services h2, #services h3, #services p, #services img', 0.5,
        {
            y: 150,
        },
        {
            y: -10
        }
    );
    var serviceTextScene = new ScrollMagic.Scene({
        triggerElement: '#services',
        duration: 800,
        offset: -150
    })
    .setTween(serviceTextTween)
    // .addIndicators()
    .addTo(controller);

    // // Build service img tween
	var tween_img = TweenMax.to("#services img", 0.5, {scale: 1.2, yoyo: true});


    var optimizerScene1 = new ScrollMagic.Scene({
        triggerElement: '#services',
        duration: 500,
        offset:50
    })
    // .on('leave', function(e) {
    //     $('img').removeClass('animated bounceIn');
    // })
    // .on('start', function(e) {
    //     $('img').addClass('animated bounceIn');
    // })
    .setTween(tween_img)
    // .addIndicators()
    .addTo(controller);

    // OUR TEAM STUFF - WHO DOES THE STUFF
    var teamTextTween = TweenMax.fromTo('#team h2, #team p, #team img', 0.5,
        {
            y: 150,
        },
        {
            y: -10
        }
    );
    var teamTextScene = new ScrollMagic.Scene({
        triggerElement: '#team',
        duration: 500,
        offset: -150
    })
    .setTween(teamTextTween)
    // .addIndicators()
    .addTo(controller);


    // OUR CONTACT STUFF - HOW TO CALL FOR THE STUFF
    var contactTextTween = TweenMax.fromTo('#contact .row', 0.5,
        {
            y: 150,
        },
        {
            y: -10
        }
    );
    var contactTextScene = new ScrollMagic.Scene({
        triggerElement: '#contact',
        duration: 500,
        offset: -150
    })
    .setTween(contactTextTween)
    // .addIndicators()
    .addTo(controller);

    // build tween
	var rightTween = TweenMax.fromTo("#contact-box-r", 2, {left: 100}, {left: 0}, 0.15);

    var contactTeamScene = new ScrollMagic.Scene({
        triggerElement: '#contact',
        duration: 500,
        offset: -20
    })
    .setTween(rightTween)
    // .addIndicators()
    .addTo(controller);

    // build tween
	var leftTween = TweenMax.fromTo("#contact-box-l", 2, {right: 100}, {right: 0}, 0.15);

    var contactTeamScene = new ScrollMagic.Scene({
        triggerElement: '#contact',
        duration: 500,
        offset: -20
    })
    .setTween(leftTween)
    // .addIndicators()
    .addTo(controller);

});



