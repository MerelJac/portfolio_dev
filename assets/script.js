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

//phr
document.querySelector("#phrHeader").addEventListener("mouseover", () => {
  //reusable for loop 
  const imgArray = Array.from(allPortfolioImg)
  imgArray.forEach((img) => {
    img.classList.add('hide');
  })
  // for each image
  document.querySelector("#phr").classList.remove('hide');
})
//database
document.querySelector("#database").addEventListener("mouseover", () => {
  //reusable for loop 
  const imgArray = Array.from(allPortfolioImg)
  imgArray.forEach((img) => {
    img.classList.add('hide');
  })
  // for each image
  document.querySelector("#databaseImg").classList.remove('hide');
})
//cloudinary
document.querySelector("#cloudinary").addEventListener("mouseover", () => {
  //reusable for loop 
  const imgArray = Array.from(allPortfolioImg)
  imgArray.forEach((img) => {
    img.classList.add('hide');
  })
  // for each image
  document.querySelector("#cloudinaryImg").classList.remove('hide');
})
//noteTaker
document.querySelector("#noteTaker").addEventListener("mouseover", () => {
  //reusable for loop 
  const imgArray = Array.from(allPortfolioImg)
  imgArray.forEach((img) => {
    img.classList.add('hide');
  })
  // for each image
  document.querySelector("#noteTakerImg").classList.remove('hide');
})
//passwordHase
document.querySelector("#passwordHash").addEventListener("mouseover", () => {
  //reusable for loop 
  const imgArray = Array.from(allPortfolioImg)
  imgArray.forEach((img) => {
    img.classList.add('hide');
  })
  // for each image
  document.querySelector("#passwordHashImg").classList.remove('hide');
})

//eCommerce
document.querySelector("#ecommerceBackend").addEventListener("mouseover", () => {
  //reusable for loop 
  const imgArray = Array.from(allPortfolioImg)
  imgArray.forEach((img) => {
    img.classList.add('hide');
  })
  // for each image
  document.querySelector("#eCommerceImg").classList.remove('hide');
})




let aboutMeText = document.getElementsByClassName("aboutMeText");
//violin icon
document.querySelector("#violin").addEventListener("mouseover", () => {
  //reusable for loop 
  const textArray = Array.from(aboutMeText)
  textArray.forEach((text) => {
    text.classList.add('hide');
  })
  // for each image
  document.querySelector("#voilinText").classList.remove('hide');
})

// entrepreneur fitenss Icon
document.querySelector("#trainer").addEventListener("mouseover", () => {
  //reusable for loop 
  const textArray = Array.from(aboutMeText)
  textArray.forEach((text) => {
    text.classList.add('hide');
  })
  // for each image
  document.querySelector("#trainerText").classList.remove('hide');
})

// dev icon
document.querySelector("#developer").addEventListener("mouseover", () => {
  //reusable for loop 
  const textArray = Array.from(aboutMeText)
  textArray.forEach((text) => {
    text.classList.add('hide');
  })
  // for each image
  document.querySelector("#devText").classList.remove('hide');
})