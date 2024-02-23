let selectedCarSize;

//function for car size selection//
function applyCarImage(carSize) {

// Hide the background image
document.getElementById("backgroundImage").style.display = "none";
  
// Get all car images//
  const originalCarImages = document.getElementById("original-car").getElementsByTagName("img");
  
// Hide all car images first//
for (let i = 0; i < originalCarImages.length; i++) {
    originalCarImages[i].style.display = "none";
}

// Show the image for the selected car size//
  if (carSize === "small") {
    selectedCarSize = "small";
    document.getElementById("small-car").style.display = "block";
    
  } else if (carSize === "medium") {
    selectedCarSize = "medium";
    document.getElementById("medium-car").style.display = "block";
    
  } else if (carSize === "large") {
    selectedCarSize = "large";
    document.getElementById("large-car").style.display = "block";
  }
}

// Function for adding patterned image of car//
function applyPattern(pattern) {
  //console.log(selectedCarSize);//
  
// Get the image URL based on the selected pattern//
let imageUrl;
  
  //SMALL CAR//
if (selectedCarSize === "small") {
    if (pattern === "fish") {
        imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707484817/small_car_fish_hb9knl.png"; // Show the image        
      
  } else if (pattern === "birds") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707485165/small_car_birds_qnzt69.png";  // Show the image
      
  } else if (pattern === "sunflower") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707485170/small_car_sunflower_txm81d.png"; // Show the image
  }

//MEDIUM CAR//
  } else if (selectedCarSize === "medium") {
    if (pattern === "fish") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707488508/medium_car_fish_sfhhtc.png"; // Show the image
           
  } else if (pattern === "birds") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707488497/medium_car_birds_u3gmsu.png"; // Show the image
    
  } else if (pattern === "sunflower") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707488513/medium_car_sunflower_x77gwx.png"; // Show the image
  }
  
//LARGE CAR//
  } else if (selectedCarSize === "large") {
    if (pattern === "fish") {
      imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707488523/large_car_fish_fvyre6.png"; // Show the image
            
  } else if (pattern === "birds") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707488520/large_car_birds_iqjeh6.png"; // Show the image  
    
  } else if (pattern === "sunflower") {
    imageUrl = "https://res.cloudinary.com/dq03n8sze/image/upload/v1707488526/large_car_sunflower_duhoe9.png"; // Show the image
}
  
  }
  // Set the src attribute of the selected car image
  document.getElementById(selectedCarSize + "-car").src = imageUrl;
}


function showPopup() {
    const firstName = document.getElementById('first_name').value;
    const carSize = document.getElementById('car-size').value;

    // Get the template content
    const template = document.getElementById('popup-template').innerHTML;

    // Replace placeholders with actual values
    const popupMessage = template
        .replace('<span id="first_name_placeholder"></span>', firstName)
        .replace('<span id="car_size_placeholder"></span>', carSize);

    document.getElementById('popup-message').innerHTML = popupMessage;
    document.getElementById('popup').style.display = 'block';
    return false; // Prevent form submission
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}