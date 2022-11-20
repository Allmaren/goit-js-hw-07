import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryList = createGalleryCard(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryList);

/*
{
  <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>; 
}
*/

function createGalleryCard(cardItems) {
  return cardItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item"
        href="${original}">
        <img class="gallery__image"
            src="${preview}" 
            alt=${description}" />
        </a>
        `;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
