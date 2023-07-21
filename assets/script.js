
// var $carousel = $('.carousel').flickity({
//     imagesLoaded: true,
//     percentPosition: false,
//   });
  
//   var $imgs = $carousel.find('.carousel-cell img');
//   // get transform property
//   var docStyle = document.documentElement.style;
//   var transformProp = typeof docStyle.transform == 'string' ?
//     'transform' : 'WebkitTransform';
//   // get Flickity instance
//   var flkty = $carousel.data('flickity');
  
//   $carousel.on( 'scroll.flickity', function() {
//     flkty.slides.forEach( function( slide, i ) {
//       var img = $imgs[i];
//       var x = ( slide.target + flkty.x ) * -1/3;
//       img.style[ transformProp ] = 'translateX(' + x  + 'px)';
//     });
//   });
  
  
let allPortfolioImg = document.getElementsByClassName("portfolioIcon");

//exercise API 
document.querySelector("#fitAppHeader").addEventListener("mouseover", () => {
  //reusable for loop 
  const imgArray = Array.from(allPortfolioImg)
  imgArray.forEach((img) => {
    img.classList.add('hide');
  })
  // for each image
  document.querySelector("#api").classList.remove('hide');
})

//fitness App
document.querySelector("#apiHeader").addEventListener("mouseover", () => {
  //reusable for loop 
  const imgArray = Array.from(allPortfolioImg)
  imgArray.forEach((img) => {
    img.classList.add('hide');
  })
  // for each image
  document.querySelector("#fitapp").classList.remove('hide');
})
