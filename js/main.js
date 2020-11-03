//JS interagise con gli elementi del DOM dopo il caricamento della pagina
$(document).ready(function() {
   //seleziona la funzione che si avvierò al button 'next'
    $('.next').click(function() {

        var imgActivate = $('img.active , i.active')
        imgActivate.removeClass('active')

        if (imgActivate.hasClass('last')) {
            $('img.first , i.first').addClass('active')
        } else {
            imgActivate.next().addClass('active')
        }
    })

   //seleziona la funzione che si avvierò al button 'prev'
    $('.prev').click(function() {
        var imgActivate = $('img.active , i.active')
        imgActivate.removeClass('active')

        if (imgActivate.hasClass('first')) {
            $('img.last , i.last').addClass('active')
        } else {
            imgActivate.prev().addClass('active')
        }

    })

});

//*BONUS
$(".next").mouseenter(function() {
  $(".next").css({"color":"red", "font-size":"50px"});
});
$(".next").mouseleave(function() {
  $(".next").css({"color": "black", "font-size":"40px"});
});
$(".prev").mouseenter(function() {
  $(".prev").css({"color": "red", "font-size":"50px"});
});
$(".prev").mouseleave(function() {
  $(".prev").css({"color": "black", "font-size":"40px"});
});
