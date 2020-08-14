 
$(window).on('load',function(){
 $('.preloader').fadeOut(2000, function () {
	$('.preloader').empty();
  });
   });


$(document).ready(function() {
    $(".container").fadeIn(3000);
    
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
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


});

