// $(function){
//  $(.slider).slick();
// });
$(document).ready(function(){
	console.log('ready')
$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: false,
   autoplay: true,
  autoplaySpeed: 20000,
  cssEase: 'linear'
 
});
})