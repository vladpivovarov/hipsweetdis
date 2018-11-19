$(document).ready(function(){
  
  $(".sweet").addClass("showeds");
  
  $(".up").fadeOut();
  $(".up").on("click", function (ev) {
        ev.preventDefault();
        $('body,html').animate({scrollTop: 0}, 1000);
  });
    

    $(window).on("scroll", function (){
      
        var scr = $(window).scrollTop();
        var why = $('.why').offset().top-500;
        var delivery = $('.delivery').offset().top-500;
        var crew = $('.crew').offset().top-500;
        var answer = $('.answer').offset().top-500;
        var map = $('.map').offset().top-500;
        var footer = $('.footer').offset().top -550;
        
        if(scr>why && scr<delivery){
            $('.why').addClass("showeds");
        }else if(scr>delivery && scr<crew){
            $('.delivery').addClass("showeds");   
        }else if(scr>crew && scr<answer){
            $('.crew').addClass("showeds");   
        }else if(scr>answer && scr<map){
            $('.answer').addClass("showeds");  
        }else if(scr>map && scr<footer){
            $('.map').addClass("showeds");  
        }else if(scr>footer){
            $('.footer').addClass("showeds");  
            $(".up").fadeIn();  
        }else{
          console.log("nothing");
        }
    });


    $(".nav").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 1000);
    });


    $(".button").on("click", function() {

      var scroll = $(".crew").offset().top + 800;
      $('body,html').animate({scrollTop: scroll}, 2000);
    });




});



$(".menu__list__item").on("click",function(){
    var item = $(this);
    var index = item.index();
    $(".menu__list__item").removeClass("menu__list__item_active");
    item.addClass("menu__list__item_active");
    $(".cooks__right").removeClass("cooks__right_active");
    $(".cooks__right").eq(index).addClass("cooks__right_active");
    $(".cooks__left").removeClass("cooks__left_active");
    $(".cooks__left").eq(index).addClass("cooks__left_active"); 
});


$(".input-text-number").mask('8 (000) 00-00-000');



$("#accordion").accordion();
$(".h3-accordion").on("click", function(){
    if($(".h3-accordion").hasClass("h3-accordion-active")){
        $(".h3-accordion").removeClass("h3-accordion-active");
    }
    $(this).addClass("h3-accordion-active");
})

ymaps.ready(init);

    function init(){     
         var myMap = new ymaps.Map("map", {
            center: [55.755814, 37.617635],
            zoom: 12,
            controls: []
        });
       
         var myPlacemark = new ymaps.Placemark(
            [55.814668, 49.072034], {
              hintContent: 'Наш главный офис!',
              balloonContent: 'Welcome!'
            },
            {
               iconLayout: 'default#image',
               iconImageHref: '/assets/img/metka.png',
               iconImageSize: [42,59]
            });
       
       myMap.behaviors
         .disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom'])
       
         myMap.geoObjects.add(myPlacemark);
    }