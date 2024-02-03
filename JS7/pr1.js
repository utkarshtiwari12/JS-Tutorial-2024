/* Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-modewhen clicked again. */

const body = document.querySelector("body");

const btn = document.querySelector(".btn");

let light = true;

btn.addEventListener("click", () => {
    if(light)
    {
        body.classList.remove("light");
        body.classList.add("dark");

        light = false;
    }
    else {
        body.classList.add("light");
        body.classList.remove("dark");
        
        light = true;
    }
});