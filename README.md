# Old School RuneScape Dragon Items List

Link to webpage: <https://peaceful-goodall-79d01f.netlify.app/>

## Goal

Dynamically generate the cards with the information being pulled from collection.

## My journey: how I did it

I first creat a header with all the static information. A title, a footer, an intro with an image (which shows the full size when clicked on it) and some text with headings. This is hardcoded in HTML file. The whole page is <i>responsive</i>. When the screen gets smaller the image (guy with full dragon equipment) gets under the intro text. The cards are split in 2 columns in tablet screensize and 1 column (all cards in 1 column) in mobile screensize. That is easy to implement thanks to CSS framework Bootstrap.

> Source of the texts and images: <https://oldschool.runescape.wiki/w/Dragon_equipment>

When I was done with the static information it was time for the cards. I use Bootstrap v5.1.3 and Sass for the styling. I create the design and layout first in HTML. Hardcode everything in HTML until I have the general design and layout. After I was satisfied with the cards I start implementing them in JavaScript. That is easier because I know how my end result looks and I know exactly which classes I need.

### Cards

The cards have an image (which gets pulled from online source) and a body with the name of the item, a description, a button that takes user to the item page (on OSRS Wiki) and 'tags' in different colors. These are dynamic: if the item is Weapon it gets the color yellow (bg-warning class) and if it's an Armour it gets a red background color (bg-danger class). I achieve that with an if-else block.

I create every element from top to bottom. What that means is I create the most outer div block first with all of its classes. Then, I create the first child of that element. For example: cardContainer -> card -> card-image -> img. After I finish that child (and children of child) I continue with the next sibling.
I find this an easy solution because it's more readable for me. I don't have to return back and implement the children of siblings (I hope that makes sense? ^^').

### Hovering cards

I use a function "hoverEffects" to zoom in on the card. In JavaScript there is an event called 'onmouseover'. What this does is when you place your mouse on the element the function is executed. The opposite of that event is 'onmouseout' which is executed when the mouse exits the element's border. So, when I place mouse on the card I scale it by 1.05 (%5 bigger on x and y axis) and on exit I scale it back to it's original size (1). This gives the effect that the card is zoomed on. Pretty good, right?

### Focus on card and give dark background on every other element

This was a bit confusing for me. I found out that there is a CSS property called box-shadow which puts an overlay on elements. So I use a veeery big overlay so it covers the whole page (0 0 0 9999px) with a very dark color (black with 0.9 opacity). The problem was that when I hovered on cards all cards were lit up and I only wanted just the one I select/hover. The solution to that is another CSS property: z-index. With that you can place elements on the third dimension. So, if I place the card that I want to keep lit on the foreground and all the others on the background (smaller z-index than the selected card) it gives me the correct result.

### Searchbar: search while typing like Google!



## Conclusion

I find this a nice and fun project because once you finish it you feel the power of JavaScript. Now, if I want to add new items to my page I just need to add them in my collection and it will automatically have a card generated and will be presented just like the other cards without me writing a single HTML code for it. How awesome is that!?
