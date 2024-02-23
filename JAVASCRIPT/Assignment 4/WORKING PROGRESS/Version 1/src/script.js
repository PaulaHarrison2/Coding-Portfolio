const wallColorElement = document.getElementById("wall-color");
const wallElement = document.getElementById("wall");

function applyWallColor() {
    wallElement.style.backgroundColor = wallColorElement.value;
}

if (wallColorElement && wallElement) {
    wallColorElement.addEventListener("change", applyWallColor);
}
