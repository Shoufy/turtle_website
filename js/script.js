// Je veux créer ca :
// <div class="overlay">
//     <img src="images-galerie/nomDeLimage.png" alt=""> </img>
//     <a href="#" class="close">X</a>
// </div>

let imagesGallery = document.querySelectorAll("img");
// console.log("images galeries : ", imagesGallery);

imagesGallery.forEach((image) => {
  image.addEventListener("click", function () {
    let imageName = image.dataset.pic;
    let dataAlt = image.alt;
    // console.log(`image au click : `, image);
    // console.log(`imageName au click : `, imageName);
    // console.log(`dataAlt au click : `, dataAlt);

    // Creation <div class="overlay">
    let divOverlayImage = document.createElement("div");
    divOverlayImage.classList.add("overlay");
    document.querySelector("body").append(divOverlayImage);

    // Creation <img src="images/1.jpg" alt="">
    let imgOverlayImage = document.createElement("img");
    divOverlayImage.prepend(imgOverlayImage);
    imgOverlayImage.setAttribute("src", `../images-galerie/${imageName}`);
    imgOverlayImage.setAttribute("alt", `${dataAlt}`);

    // // Création <a href="#" class="close"> X </a>
    // let aOverlayImage = document.createElement("a");
    // divOverlayImage.append(aOverlayImage);
    // aOverlayImage.setAttribute("href", "#");
    // aOverlayImage.classList.add("close");
    // aOverlayImage.textContent = "X";

    // // Selection de la classe close
    // // document.addEventListener("DOMContentLoaded", function () {
    // let closeTag = document.querySelector(".close");
    // closeTag.addEventListener("click", function (e) {
    //   e.preventDefault();
    //   divOverlayImage.remove();
    // });

    // avec "window" cela supprime lorsque l'on clique sur la fenetre EN DEHORS de l'image
    // let overlay = document.querySelector(".overlay");
    // window.addEventListener("click", function (e) {
    //   if (e.target === overlay) {
    //     // e.preventDefault();
    //     divOverlayImage.remove();
    //   }
    // });

    // Au clic sur la page, que cela soit sur l'image ou sur la fenetre de la page, l'image overlay se ferme
    let overlay = document.querySelector(".overlay");
    divOverlayImage.addEventListener("click", function (e) {
      if (e.target === overlay || e.target === imgOverlayImage) {
        // e.preventDefault();
        divOverlayImage.remove();
      }
    });
  });
});
