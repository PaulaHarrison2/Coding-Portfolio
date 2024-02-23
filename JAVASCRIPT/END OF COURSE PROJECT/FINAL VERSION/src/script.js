let selectedCarSize; //This line declares a variable named selectedCarSize which will be used to store the size of the selected car and needs to be accessible throughout the entire code, not just within a specific function. Using 'let' at the top level, it becomes a global variable, meaning it can be accessed and modified from anywhere within the script. //

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
  if (carSize === "small") { //This condition determines whether the user has selected a small car size.//
    selectedCarSize = "small"; // If the condition above is met (i.e., the user selected a small car size), this line sets the selectedCarSize variable to the string "small". //
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
  // Set the src attribute of the selected car image. Basically it changes the displayed image on the webpage to the one referenced by the URL.//
  document.getElementById(selectedCarSize + "-car").src = imageUrl;
}


// Function for popup message after submit button has been clicked)

function showPopup() {
    const firstName = document.getElementById('first_name').value;
    const carSize = document.getElementById('car-size').value;

// Get the template content
    const template = document.getElementById('popup-template').innerHTML;

// Replace placeholders with actual values
    const popupMessage = template
        .replace('<span id="first_name_placeholder"></span>', firstName)
        .replace('<span id="car_size_placeholder"></span>', carSize);

    document.getElementById('popup-message').innerHTML = popupMessage; //replaces the existing HTML content of the element with the new content that is provided //
    document.getElementById('popup').style.display = 'block';
    return false; // Prevents form submission to ensure that the user stays on the same page after clicking the submit button.//
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}