// document.addEventListener('click', addCircle )

document.addEventListener('keydown', prepCircle)
document.addEventListener('keyup', endCircle)

function prepCircle(evt){
    if(evt.shiftKey){
        document.addEventListener('click', addCircle )
    }
}

function endCircle(){
        document.removeEventListener('click', addCircle )
    }


function addCircle(evt){
    document.getElementById('map').innerHTML += makeCircle(evt.clientX, evt.clientY);
}

function makeCircle(x: number, y: number){
    return (
        `<circle cx = ${x} cy=${y} r=10 />`
    )
}


