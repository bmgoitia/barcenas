
window.onload = function() {
 
 		$(".tlDateY").parent().css( "margin-bottom", "30px" );
 		$(".tlDateM").parent().css( "margin-bottom", "50px" );
    $(".tlDateM").parent().css( "background-color", "#000" );

    $('.tTabs a').on("click", function(){
    	console.log('clicked');
    })


    /* Slider */

    var mySwiper = new Swiper('.swiper-container', {
			  // Optional parameters
			  direction: 'horizontal',
			  loop: false,

			  pagination: {
			    el: '.swiper-pagination',
			  },

			  navigation: {
			    nextEl: '.swiper-button-next',
			    prevEl: '.swiper-button-prev',
			  },


    })

 
};

/* Files */

$(".testListHead").click(function(){
  $(".testListHead span").toggleClass("arrowUp");
});

