function displayNextImage() {
      x = (x === images.length - 1) ? 0 : x + 1;
      document.getElementById("toggleRecipePhotos").src = images[x];
  }

  function displayPreviousImage() {
      x = (x <= 0) ? images.length - 1 : x - 1;
      document.getElementById("toggleRecipePhotos").src = images[x];
  }

  function startTimer() {
      setInterval(displayNextImage, 3000);
  }
  function goToSpecificImage(index){
    document.getElementById("toggleRecipePhotos").src = images[index];
  }

  var images = [], x = -1;
  images[0] = "images/SpinachRavioli.jpg";
  images[1] = "images/LemonSquares.jpg";
