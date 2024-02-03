/* Qs. Create a new button element. Give it a text “click me”, background color of red & text color
of white.
 Insert the button as the first element inside the body tag. */

let but = document.createElement("button");

but.innerText = "Click me !!";

but.style.backgroundColor = "red";

but.style.color = "white";

document.querySelector("body").prepend(but);