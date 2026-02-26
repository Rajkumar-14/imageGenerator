const button = document.getElementById("colgen");
const box = document.getElementById("color-box");

const fetchDogImage = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    box.style.backgroundImage = `url(${data.message})`;
    box.style.backgroundSize = "cover";
    box.style.backgroundPosition = "center";
  } catch (error) {
    console.log("Error fetching dog image:", error);
  }
};

// Show one image when page loads
window.addEventListener("DOMContentLoaded", fetchDogImage);

// Change image when button is clicked
button.addEventListener("click", fetchDogImage);