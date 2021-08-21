      var $jq = jQuery.noConflict();
	  $jq(document).on('ready', function() {
         /*Carousel options*/
         $jq('.single-item').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            });
            /*Carousel left scroll button click*/
            $jq('.left-car-hmp').click(function(){
            $jq('.slider').slick('slickPrev');
            $leftbutt = $jq('.home-page-block-fifth');
               if(($jq(".slick-prev").hasClass("slick-disabled"))){
                  $leftbutt.addClass("clicked-arr-left");
               }else{
                  $leftbutt.removeClass("clicked-arr-left");
               };
               if(($jq(".slick-next").hasClass("slick-disabled"))){
                  $leftbutt.addClass("clicked-arr-right");
               }else{
                  $leftbutt.removeClass("clicked-arr-right");
               };
            })
             /*Carousel right scroll button click*/
            $jq('.right-car-hmp').click(function(){
            $jq('.slider').slick('slickNext');
            $leftbutt = $jq('.home-page-block-fifth');
               if(($jq(".slick-prev").hasClass("slick-disabled"))){
                  $leftbutt.addClass("clicked-arr-left");
               }else{
                  $leftbutt.removeClass("clicked-arr-left");
               };
               if(($jq(".slick-next").hasClass("slick-disabled"))){
                  $leftbutt.addClass("clicked-arr-right");
               }else{
                  $leftbutt.removeClass("clicked-arr-right");
               };
         })
      });
