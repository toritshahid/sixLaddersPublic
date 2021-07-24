
      $(document).on('ready', function() {
         /*Carousel iptions*/
         $('.single-item').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            });
            /*Carousel left scroll button click*/
            $('.left-car-hmp').click(function(){
            $('.slider').slick('slickPrev');
            $leftbutt = $('.home-page-block-fifth');
               if(($(".slick-prev").hasClass("slick-disabled"))){
                  $leftbutt.addClass("clicked-arr-left");
               }else{
                  $leftbutt.removeClass("clicked-arr-left");
               };
               if(($(".slick-next").hasClass("slick-disabled"))){
                  $leftbutt.addClass("clicked-arr-right");
               }else{
                  $leftbutt.removeClass("clicked-arr-right");
               };
            })
             /*Carousel right scroll button click*/
            $('.right-car-hmp').click(function(){
            $('.slider').slick('slickNext');
            $leftbutt = $('.home-page-block-fifth');
               if(($(".slick-prev").hasClass("slick-disabled"))){
                  $leftbutt.addClass("clicked-arr-left");
               }else{
                  $leftbutt.removeClass("clicked-arr-left");
               };
               if(($(".slick-next").hasClass("slick-disabled"))){
                  $leftbutt.addClass("clicked-arr-right");
               }else{
                  $leftbutt.removeClass("clicked-arr-right");
               };
         })
      });
