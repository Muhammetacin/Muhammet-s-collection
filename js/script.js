// TODO: import ITEMS_LIST from collection.js
import { ITEMS_LIST } from "./collection.js";

// ITEMS_LIST.forEach((dragonItem) => {
//     console.log(dragonItem.name);
// });

// console.log(ITEMS_LIST);

// TODO: select section to append new children (cards)
const section = document.querySelector("section");

// TODO: create h3 heading title "Items" and add it to the top of section (as a first child), only one is needed for the page
let headingH3Items = document.createElement("h3")
headingH3Items.appendChild(document.createTextNode("Items"));
section.appendChild(headingH3Items);
// console.log(headingH3Items);

// TODO: create div with classes (container div for cards) and add to section, only one is needed for the page
let containerDiv = document.createElement("div");
containerDiv.classList.add("row", "d-flex", "flex-column", "flex-md-row", "flex-lg-row", "row-cols-md-2", "row-cols-lg-4", "m-auto", "g-3");
section.appendChild(containerDiv);
// console.log(containerDiv);

// TODO: create cardContainer with classes (necessary for layout of the card elements) and add to containerDiv, for every card needed
let cardContainer = document.createElement("div");
cardContainer.classList.add("col", "d-flex", "align-items-stretch");
containerDiv.appendChild(cardContainer);
// console.log(cardContainer);

// TODO: create the card itself and append to cardContainer, for every card needed
let card = document.createElement("div");
card.classList.add("card");
cardContainer.appendChild(card);
// console.log(card);

// TODO: create imageContainer and append to card
let cardImageContainer = document.createElement("div");
cardImageContainer.classList.add("img-wrapper");
card.appendChild(cardImageContainer);
// console.log(cardImageContainer);

// TODO: create cardImage in cardImageContainer with src, alt and class
let cardImage = document.createElement("img");
cardImage.src = ITEMS_LIST[2].image;
cardImage.alt = ITEMS_LIST[2].examine;
cardImage.classList.add("card-img-top");
cardImageContainer.appendChild(cardImage);
// console.log(cardImage);

// TODO: create cardBody inside card with class
let cardBody = document.createElement("div");
cardBody.classList.add("card-body");
card.appendChild(cardBody);
console.log(cardBody);