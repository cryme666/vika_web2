  

const imageGallery = document.querySelector(".image-gallery");


const images = [
  {
    url: "naruto.png",
      description: "Naruto Uzumaki"
      
    },

    {
      url: "tanjiro.png",
      description: "Tanjiro Kamado"
    },
    {
      url: "MightGuy.webp",
      description: "Might Guy"
    },
    {
      url: "itadori.webp",
      description: "Yuji Itadori "
    },
    
    {
      url: "Hisoka.png",
      description: "Hisoka"
      
    },
    {
      url: "gojo.png",
      description: "Satoru Gojo"
    },

    {
      url: "sarada.png",
      description: "Uciha Sarada"
      
    },
    
  ];

  
  for (let i = 0; i < 4; i++) {
    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");
    
    const image = document.createElement("img");
    image.src = images[i].url;
    
    const imageDescription = document.createElement("div");
    imageDescription.classList.add("image-description");
    imageDescription.textContent = images[i].description;
    
    imageCard.appendChild(image);
    imageCard.appendChild(imageDescription);
    imageGallery.appendChild(imageCard);
  }
  
  function loadMore() {
    
    document.querySelector(".load-buttons button").style.display = "none";
    
    for (let i = 4; i <= 7; i++) {
      const imageCard = document.createElement("div");
      imageCard.classList.add("image-card");
      
      const image = document.createElement("img");
      image.src = images[i].url;
      
      const imageDescription = document.createElement("div");
      imageDescription.classList.add("image-description");
      imageDescription.textContent = images[i].description;
      
      imageCard.appendChild(image);
      imageCard.appendChild(imageDescription);
      imageGallery.appendChild(imageCard);
    }
    
  }
  
