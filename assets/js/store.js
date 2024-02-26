$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    $(".hero-back").css({
          'background-size' : 100 + scrollPos + '%'      
    });
});


//scroll reveal

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400 
 });

 ScrollReveal().reveal('.navigation, .Nepal',{delay: 500});
 ScrollReveal().reveal('.pahad,  .mount_name',{delay: 700, origin: 'bottom'});




// Scrolling
let nep = document.getElementById('nep');
let content = document.getElementById('content');
let snowy = document.getElementById('snowy');
let stopPoint = 100; // Define the scroll position where you want to stop the element

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    // Check if the scroll position is above the stop point
    if (value < stopPoint) {
        // Update the style only if the scroll position is below the stop point
        nep.style.bottom = 5 + value * -0.4 + '%'; 
        content.style.top = 50 + value * -0.4 + '%';
        snowy.style.top = 50 + value * -0.4 + 'px'; 
    }
});



/*let StopPoint = 100; // Define the scroll position where you want to stop the element

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    // Check if the scroll position is above the stop point
    if (value < StopPoint) {
        // Update the style only if the scroll position is below the stop point
        
    }
});*/
