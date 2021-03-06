
window.onload = function() {
 
 		$(".tlDateY").parent().css( "margin-bottom", "30px" );
 		$(".tlDateM").parent().css( "margin-bottom", "50px" );
    $(".tlDateM").parent().css( "background-color", "#000" );

    $('.tTabs a').on("click", function(){
    	console.log('clicked');
    })


    

 
};

/* Files */

$(".testListHead").click(function(){
  $(".testListHead span").toggleClass("arrowUp");
});

