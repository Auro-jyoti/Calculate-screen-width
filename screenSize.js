window.onresize = screen;
window.onload = screen;

function screen() {
    myWidth = window.innerWidth;
    document.getElementById("size").innerText = "Width : " + myWidth + "px";
}


/**
 * window.onresize = screen;
 * window.onload = screen
 * 
 * function screen() {
 *      mywidth: window.innerWidth;
 *      documnet.getElementbyId("size").innerText = "Width: " + myWidth + "px";
 * }
 */