$(document).ready(function(){

	$("#cssmenu").menumaker({
		title: '<img src="assets/images/logo.png" style="width:90px;">',
		breakpoint:1075,
		format: "multitoggle"
	});
});


  $('.pdt-slide').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });

//   $('.test-slider').slick({
//   rtl: true
// });

$('.test-slider').slick();