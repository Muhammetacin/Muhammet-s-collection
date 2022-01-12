// TODO: import ITEMS_LIST from collection.js
import { ITEMS_LIST } from "./collection.js";

// ITEMS_LIST.forEach((dragonItem) => {
//     console.log(dragonItem);
// })

// console.log(ITEMS_LIST);

// TODO: select section to append new children (cards)
const section = document.querySelector("section");

// TODO: create h3 heading title "Items" and add it to the top of section (as a first child)
let headingH3Items = document.createElement("h3")
headingH3Items.appendChild(document.createTextNode("Items"));
section.appendChild(headingH3Items);
// console.log(headingH3Items);

// TODO: create div with classes (container div for cards) and add to section
let containerDiv = document.createElement("div");
containerDiv.classList.add("row", "d-flex", "flex-column", "flex-md-row", "flex-lg-row", "row-cols-md-2", "row-cols-lg-4", "m-auto", "g-3");
section.appendChild(containerDiv);
// console.log(containerDiv);