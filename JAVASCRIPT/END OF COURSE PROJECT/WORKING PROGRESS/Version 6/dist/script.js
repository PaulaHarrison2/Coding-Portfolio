//function for car size selection//
function applyCarImage() {
  
// Get the selected car size
  const selectCarSize = document.getElementById("car-size").value;
  
// Get all car images//
  const originalCarImages = document.getElementById("original-car").getElementsByTagName("img");
  
// Hide all car images first//
for (let i = 0; i < originalCarImages.length; i++) {
    originalCarImages[i].style.display = "none";
}

// Show the image for the selected car size//
  if (selectCarSize === "small") {
    document.getElementById("small-car").style.display = "block";
  } else if (selectCarSize === "medium") {
    document.getElementById("medium-car").style.display = "block";
  } else if (selectCarSize === "large") {
    document.getElementById("large-car").style.display = "block";
  }
}

// Function for adding painted car//