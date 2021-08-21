(function ($) {
	'use strict';

	/*------------------------------------
		Dropdown Opens On Hover
	--------------------------------------*/
	document.addEventListener("DOMContentLoaded", function(){
		if (window.innerWidth > 992) {
			document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
				everyitem.addEventListener('mouseover', function(e){
					let el_link = this.querySelector('a[data-bs-toggle]');
					if(el_link != null){
						let nextEl = el_link.nextElementSibling;
						el_link.classList.add('show');
						nextEl.classList.add('show');
					}
				});
				everyitem.addEventListener('mouseleave', function(e){
					let el_link = this.querySelector('a[data-bs-toggle]');
					if(el_link != null){
						let nextEl = el_link.nextElementSibling;
						el_link.classList.remove('show');
						nextEl.classList.remove('show');
					}
				})
			});
		}
	});
	/*------------------------------------
		Dropdown Opens On Hover
	--------------------------------------*/




	/*------------------------------------
		Fix Header
	--------------------------------------*/
	// window.onscroll = function() {myFunction()};

	// var header = document.getElementById("header-stickey");
	// var sticky = header.offsetTop;

	// function myFunction() {
	//   if (window.pageYOffset > sticky) {
	//     header.classList.add("sticky");
	//   } else {
	//     header.classList.remove("sticky");
	//   }
	// }
	/*------------------------------------
		Fix Header
	--------------------------------------*/


	/*-----------------------------------------
		Career Coaching Page Testimonial Slider
	-------------------------------------------*/
    if ($(".testimony--swiper .swiper-container").length > 0) {
		let offerSwiper = new Swiper('.testimony--swiper .swiper-container', {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 30,
			autoplay: {
				delay: 1800,
			},
			pagination: {
	          el: ".testimony--pagination",
	          clickable: true,
	        },
			a11y: false
		})
	}
	if ($(".testimony-v2-swiper .swiper-container").length > 0) {
		let offerSwiper = new Swiper('.testimony-v2-swiper .swiper-container', {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 30,
			autoplay: {
				delay: 1800,
			},
			pagination: {
	          el: ".testimony-v2--pagination",
	          clickable: true,
	        },
	        navigation: {
				nextEl: '.testv2-right',
				prevEl: '.testv2-left',
			},
			a11y: false
		})
	}
    /*-----------------------------------------
		Career Coaching Page Testimonial Slider
	-------------------------------------------*/



})(jQuery);
