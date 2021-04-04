// scrolll
$(document).ready(function () {
    $('a[href$="#"]').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        let target = $(this).attr('href'); // Set the target as variable

        //smooth scrolling
        target.click(function (e) {
            e.preventDefault();
            $('body, html').animate(
                {
                    scrollTop: $(this.hash).offset().top,
                },
                1000
            );
        });

        return false;
    });
});

$(window)
    .scroll(function () {
        let scrollDistance = $(window).scrollTop();

        // Show/hide menu on scroll
        /*  if (scrollDistance >= 850) {
                        $('nav').fadeIn('fast');
                    } else {
                        $('nav').fadeOut('fast');
                    }  */

        // Assign active class to nav links while scolling
        $('.page-section').each(function (i) {
            if ($(this).position().top - 5 <= scrollDistance) {
                $('.navigation a.active').removeClass('active');
                $('.navigation a').eq(i).addClass('active');
            }
        });
    })
    .scroll();

// Filter Portofolio
$(document).ready(function () {
    $('.filter-button').click(function () {
        $('.filter-button').removeClass('active');
        $(this).addClass('active');

        let value = $(this).attr('data-filter');

        if (value == 'all') {
            $('.filter').show('1000');
        } else {
            $('.filter')
                .not('.' + value)
                .hide('3000');
            $('.filter')
                .filter('.' + value)
                .show('3000');
        }
    });
});

//Particle JS
particlesJS('particles-js', {
    particles: {
        number: {
            value: 160,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#000000',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 3,
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble',
            },
            onclick: {
                enable: true,
                mode: 'repulse',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
            },
            repulse: {
                distance: 400,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});

// Button to top
$(document).ready(function () {
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#topButton').fadeIn();
        } else {
            $('#topButton').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#topButton').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});
