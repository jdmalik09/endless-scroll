const imageContainer = document.getElementById("image-container");

async function fetchImages() {
  let api_key = "up-oPoy5TGOc-k9be1EcgCn_T17z-9hcq72DBkB1DxU";

  let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${api_key}&count=5`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    data.forEach((image) => {
      const img = document.createElement("img");
      img.src = image.urls.regular;
      imageContainer.appendChild(img);
    });
  } catch (error) {
    console.log("Error fetching images:", error);
  }
}

fetchImages();

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY + 40) >= document.body.offsetHeight) {
        fetchImages();
    }
});
