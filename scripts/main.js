const canvas = document.getElementById("ufoCanves");
canvas.width = 900;
canvas.height = 600;


// Canvas automatic resizing
function resize() {
    // Our canvas must full height of screen regardless of the resolution
    const height = window.innerHeight - 20;

    //So we need to calculate the proper scaled width that should work well with every resolution
    const ratio = canvas.width / canvas.height;
    const width = height * ratio;


    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

}

window.addEventListener("load", resize, false)