interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  {name: 'main', src: 'assets/js/main.js'},
  {name: 'carousel', src: 'assets/carousel/carousel.js'},
  {name: 'carouselSlick', src: 'assets/carousel/slick-1.8.1/slick/slick.js'},
  {name: 'JQuery', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'},
  {name: 'JQuery1', src: 'assets/jsVendor/jquery-3.4.1.min.js'},
  {name: 'bootstrap', src: 'assets/jsVendor/bootstrap.min.js'},
  {name: 'swiper', src: 'assets/jsVendor/swiper-bundle.min.js'},
  {name: 'wow', src: 'assets/jsVendor/wow.min.js'},
  {name: 'script', src: 'assets/jsVendor/script.js'}
];
