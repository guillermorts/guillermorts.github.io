var onhover = function(e){
  $(e.target).closest(".presentacion").find(".visible").toggleClass('visible');
  // var id = $(e.currentTarget).attr("href").match(/\#tutorial([0-9]+)/)[1];
  // console.log(id);

  var classToFind = "." + $(e.currentTarget).attr("data-tab");
  $(e.target).closest(".presentacion").find(classToFind).toggleClass('visible');
};

$('.tab').on('mouseover', onhover);

///////////////////////////////////////////////////////////////////////////////

$("#tofooter").on("click", function(){
    var posicion = $("#footer").offset().top;
    $("html, body").animate({
        scrollTop: posicion
    }, 1500);
 });

 $("#tofooter2").on("click", function(){
     var posicion = $("#footer").offset().top;
     $("html, body").animate({
         scrollTop: posicion
     }, 1500);
  });
 //////////////////////////////////////////////////////////////////////////////

 $(document).on('ready', function() {
   $(".regular").slick({
     dots: true,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 3
   });
   $(".center").slick({
     dots: true,
     infinite: true,
     centerMode: true,
     slidesToShow: 3,
     slidesToScroll: 3
   });
   $(".variable").slick({
     dots: true,
     infinite: true,
     variableWidth: true
   });
 });

///////////////////////////////////////////////////////////////////////////////
$("#toproject1").on("click", function(){
    var posicion = $("#project1").offset().top;
    $("html, body").animate({
        scrollTop: posicion
    }, 1500);
 });

$("#toproject2").on("click", function(){
   var posicion = $("#project2").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#toproject3").on("click", function(){
  var posicion = $("#project3").offset().top;
  $("html, body").animate({
      scrollTop: posicion
  }, 1500);
});

$("#toproject4").on("click", function(){
   var posicion = $("#project4").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#toproject5").on("click", function(){
   var posicion = $("#project5").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#toproject6").on("click", function(){
   var posicion = $("#project6").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#toproject7").on("click", function(){
   var posicion = $("#project7").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#toproject8").on("click", function(){
   var posicion = $("#project8").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#toproject9").on("click", function(){
   var posicion = $("#project9").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});



///////////////////////////////////////////////////////////////////////////////
$("#totutorial1").on("click", function(){
    var posicion = $("#tutorial1").offset().top;
    $("html, body").animate({
        scrollTop: posicion
    }, 1500);
 });

$("#totutorial2").on("click", function(){
   var posicion = $("#tutorial2").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#totutorial3").on("click", function(){
  var posicion = $("#tutorial3").offset().top;
  $("html, body").animate({
      scrollTop: posicion
  }, 1500);
});

$("#totutorial4").on("click", function(){
   var posicion = $("#tutorial4").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#totutorial5").on("click", function(){
   var posicion = $("#tutorial5").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#totutorial6").on("click", function(){
   var posicion = $("#tutorial6").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#totutorial7").on("click", function(){
   var posicion = $("#tutorial7").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#totutorial8").on("click", function(){
   var posicion = $("#tutorial8").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#totutorial9").on("click", function(){
   var posicion = $("#tutorial9").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#totutorial10").on("click", function(){
   var posicion = $("#tutorial10").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#totutorial11").on("click", function(){
   var posicion = $("#tutorial11").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

$("#totutorial12").on("click", function(){
   var posicion = $("#tutorial12").offset().top;
   $("html, body").animate({
       scrollTop: posicion
   }, 1500);
});

///////////////////////////////////////////////////////////////////////////////
