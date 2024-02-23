//function for car size selection//
function applyCarImage(carSize) {
  
// Get all car images//
  const originalCarImages = document.getElementById("original-car").getElementsByTagName("img");
  
// Hide all car images first//
for (let i = 0; i < originalCarImages.length; i++) {
    originalCarImages[i].style.display = "none";
}

// Show the image for the selected car size//
  if (carSize === "small") {
    document.getElementById("small-car").style.display = "block";
  } else if (carSize === "medium") {
    document.getElementById("medium-car").style.display = "block";
  } else if (carSize === "large") {
    document.getElementById("large-car").style.display = "block";
  }
// Show the image for the selected car size
    document.getElementById(carSize + "-car").style.display = "block";
}


// Function for adding patterned image of car//
function applyPattern(pattern, carSize) {
  

// Get the image URL based on the selected pattern//
let imageUrl;
  
  //SMALL CAR//
if (carSize === "small"){
    if (pattern === "fish") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707484817/small_car_fish_hb9knl.png";
  } else if (pattern === "birds") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707485165/small_car_birds_qnzt69.png";
  } else if (pattern === "sunflower") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707485170/small_car_sunflower_txm81d.png";
  }

//MEDIUM CAR//
  } else if (carSize === "medium") {
    if (pattern === "fish") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707488508/medium_car_fish_sfhhtc.png";
  } else if (pattern === "birds") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707488497/medium_car_birds_u3gmsu.png";
  } else if (pattern === "sunflower") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707488513/medium_car_sunflower_x77gwx.png";
  }
  
//LARGE CAR//
  } else if (carSize === "large") {
    if (pattern === "fish") {
      imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707488523/large_car_fish_fvyre6.png";
  } else if (pattern === "birds") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707488520/large_car_birds_iqjeh6.png";
  } else if (pattern === "sunflower") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707488526/large_car_sunflower_duhoe9.png";
}
  }
  // Set the src attribute of the selected car image//
         document.getElementById(`${pattern} ${carSize} car`).src = imageUrl;
}