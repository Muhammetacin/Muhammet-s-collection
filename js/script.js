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

