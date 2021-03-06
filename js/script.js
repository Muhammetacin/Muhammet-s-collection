/**
 * Script file for generating card items from collection.js
 * Most classes are from Bootstrap v5.1.3
 */

// TODO: import ITEMS_LIST from collection.js
import { ITEMS_LIST as item } from "./collection.js";

// Shuffle the order of the list to show cards randomly
item.sort((a, b) => 0.5 - Math.random());

// TODO: select section to append new children (cards)
const section = document.querySelector("section");

// TODO: create h3 heading title "Items" and add it to the top of section (as a first child), only one is needed for the page
let headingH3Items = document.createElement("h3");
headingH3Items.appendChild(document.createTextNode("Items"));
section.appendChild(headingH3Items);

// TODO: add searchbar to filter item cards
let searchBar = document.createElement("input");
searchBar.id = "searchBar";
searchBar.type = "text";
searchBar.name = "search";
searchBar.placeholder = "Search items";
searchBar.classList.add("form-control", "w-25", "text-center");
searchBar.onkeyup = function () {
  let input = document.getElementById("searchBar").value.toLowerCase();
  let cardTitles = document.querySelectorAll("div.col");

  // console.log(cardTitles);
  cardTitles.forEach((el) => {
    let elementItemTitle = el.children[0].children[1].children[0].innerHTML;
    let elementItemType = el.children[0].children[1].children[2].children[0].innerHTML;

    if (elementItemTitle.toLowerCase().includes(input) || elementItemType.toLowerCase().includes(input)) {
      el.style.display = "block";
      el.classList.add("d-flex");
    } else {
      el.style.display = "none";
      el.classList.remove("d-flex");
    }
  });
};
section.appendChild(searchBar);

// TODO: create div with classes (container div for cards) and add to section, only one is needed for the page
let containerDiv = document.createElement("div");
containerDiv.classList.add(
  "row",
  "d-flex",
  "flex-column",
  "flex-md-row",
  "flex-lg-row",
  "row-cols-md-2",
  "row-cols-lg-4",
  "m-auto",
  "g-3"
);
section.appendChild(containerDiv);

// ALL THE CODE BELOW IS NECESSARY FOR EVERY CARD SO
// PUT THESE IN A FOR LOOP TO CREATE A CARD FOR EVERY ITEM IN THE COLLECTION DYNAMICALLY

item.forEach((item) => {
  // TODO: create cardContainer with classes (necessary for layout of the card elements) and add to containerDiv, for every card needed
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col", "d-flex", "align-items-stretch");
  containerDiv.appendChild(cardContainer);

  // TODO: create the card itself and append to cardContainer, for every card needed
  let card = document.createElement("div");
  card.classList.add("card");
  cardContainer.appendChild(card);

  function hoverEffects(cardSelected) {
    cardSelected.onmouseover = function () {
      cardSelected.style.transform = "scale(1.03, 1.03)";
      cardSelected.style.zIndex = 100;
      cardSelected.style.transition = "0.15s";
      cardSelected.style.boxShadow = "0 0 0 9999px #000000b0";
    };
    cardSelected.onmouseout = function () {
      cardSelected.style.transform = "scale(1, 1)";
      cardSelected.style.zIndex = 0;
      cardSelected.style.boxShadow = "0 0 0 9999px #00000000";
    };
  }

  hoverEffects(card);

  // TODO: create imageContainer and append to card, for every card needed
  let cardImageContainer = document.createElement("div");
  cardImageContainer.classList.add("img-wrapper");
  card.appendChild(cardImageContainer);

  // TODO: create cardImage in cardImageContainer with src, alt and class, for every card needed
  let cardImage = document.createElement("img");
  cardImage.src = item.image;
  cardImage.alt = item.examine;
  cardImage.classList.add("card-img-top");
  cardImageContainer.appendChild(cardImage);

  // TODO: create cardBody inside card with class, for every card needed
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "d-flex", "flex-column");
  card.appendChild(cardBody);

  // TODO: create h5 heading, span badges in spanContainer, spanContainer in cardBody with classes, for every card needed
  let cardHeadingH5 = document.createElement("h5");
  cardHeadingH5.classList.add("card-title");
  cardHeadingH5.appendChild(document.createTextNode(item.name));
  cardBody.appendChild(cardHeadingH5);

  let cardHeadingH6 = document.createElement("h6");
  cardHeadingH6.classList.add("card-subtitle", "mb-2", "text-muted");
  cardHeadingH6.appendChild(document.createTextNode(item.examine));
  cardBody.appendChild(cardHeadingH6);

  let spanContainer = document.createElement("div");
  cardBody.appendChild(spanContainer);

  let cardSpanFirst = document.createElement("span");
  cardSpanFirst.classList.add("badge", "mb-3");
  if (item.type == "Weapon") {
    cardSpanFirst.classList.add("bg-warning");
  } else {
    cardSpanFirst.classList.add("bg-danger");
  }
  cardSpanFirst.appendChild(document.createTextNode(item.type));
  spanContainer.appendChild(cardSpanFirst);

  let cardSpanSecond = document.createElement("span");
  cardSpanSecond.classList.add("badge", "mb-3", "ms-1", "bg-success");
  if (item.tradeable) {
    cardSpanSecond.appendChild(document.createTextNode("Tradeable"));
  }
  spanContainer.appendChild(cardSpanSecond);

  // TODO: create paragraph p and button with classes, for every card needed
  let cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.appendChild(document.createTextNode(item.description));
  cardBody.appendChild(cardText);

  let cardButtonContainer = document.createElement("div");
  cardButtonContainer.classList.add("text-center", "mt-auto");
  cardBody.appendChild(cardButtonContainer);

  let cardButton = document.createElement("a");
  cardButton.classList.add("btn", "btn-dark");
  cardButton.appendChild(document.createTextNode("Buy " + item.name));
  cardButton.href = item.link;
  cardButton.target = "_blank";
  cardButtonContainer.appendChild(cardButton);
});

// EXTRA: adding favicon to page
const link = document.createElement("link");
link.rel = "icon";
link.href = item[0].image;
document.getElementsByTagName("head")[0].appendChild(link);
