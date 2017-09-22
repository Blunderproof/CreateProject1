function displayNextImage() {
      x = (x === images.length - 1) ? 0 : x + 1;
      document.getElementById("mainImage").src = images[x];
      updateActiveButton(x);
  }

  function displayPreviousImage() {
      x = (x <= 0) ? images.length - 1 : x - 1;
      document.getElementById("mainImage").src = images[x];
      updateActiveButton(x);
  }

  function startTimer() {
      setInterval(displayNextImage, 3000);
      updateActiveButton(0);
  }
  function goToSpecificImage(index){
    document.getElementById("mainImage").src = images[index];
    updateActiveButton(index);
  }
  function updateActiveButton(index){
    document.getElementById(index).style.background = "#365b28";
  }

  var images = [], x = -1;
  images[0] = "images/Spaghetti.jpg";
  images[1] = "images/LemonSquares.jpg";
  images[2] = "images/chocolate_chip.jpg";
  images[3] = "images/chickenNoodle.jpg";
