// call the jQuery library (jQuery or $)

$('document').ready(function(){
    // run code here
    // alert("hello world");

    // selectors - element (h1-h6, p, headerr, etc), id (e.g. #wrapper), class(e.g. .banner)

    //element selector
    // $('p').hide();

    // id selector
    // $('#wrapper').hide();

    // class selector
    // $('.banner').hide();

    // effects - hide(), show(), toggle(hide/show), slideUp(), slideDown(), slideToggle(), fadeIn(), fadeOut(), fadeToggle(), animate(), 

    // events - click(), hover(), mouseOver(), mouseOut(), keyUp(), keyDown(),

    // $('.btn').click(function(){
    //     $('p').toggle();
    // })

    // toggleClass
    // $('.btn').click(function(){
    //     $('p').toggleClass('para');
    // })

    $('.icon').click(function(){
        $('nav ul').toggleClass('show');
    })


    //slider

    // $('.slider').cycle();

    $('.slider').cycle({
        // fx: 'scrollHorz'
        fx: 'wipe'
    });


    // fadeZoom, toss, uncover, fade, curtain.
});