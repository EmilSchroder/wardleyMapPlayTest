document.addEventListener('click', addCircle);
function addCircle(evt) {
    document.getElementById('map').innerHTML = makeCircle(evt.clientX, evt.clientY);
}
function makeCircle(x, y) {
    return ("<svg width=" + window.innerWidth + " height=" + window.innerHeight + "><circle cx = " + x + " cy=" + y + " r=10 fill='red'/></svg>");
}
