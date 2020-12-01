var character = document.getElementsByClassName("character").namedItem("character");
var map = document.getElementsByClassName("map").namedItem("map");
console.log(character);
//movement constants
const directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
}

const keys = { 
    37: directions.left,
    38: directions.up,
    39: directions.right,
    40: directions.down,
}

//Beginning of character
var x = 128;
var y = 0;
var held_directions = [];
var speed = 1;

const movement = () => {
    var pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--pixel-size"));
    const held_direction = held_directions[0];
    if (held_direction) {
        if (held_direction === directions.right) {
            x += speed;
        }
        if (held_direction === directions.left) {
            x -= speed;
        }
        if (held_direction === directions.up) {
            y += speed;
        }
        if (held_direction === directions.down) {
            y -= speed;
        }
    }
    character.setAttribute("walking", held_direction ? "true" : "false");
    
    //Walls
    var leftLimit = 0;
    var rightLimit = (16 * 11)+8;
    var topLimit = 50;
    var bottomLimit = (16 * 7);
    if (x < leftLimit) { 
        x = leftLimit; 
    }
    if (x > rightLimit) { 
        x = rightLimit; 
    }
    if (y < topLimit) { 
        y = topLimit;
    }
    if (y > bottomLimit) {
        y = bottomLimit;
    }

    map.style.transform = "translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0)";
    character.style.transform = "translate3d(${x*pixelSize}px, ${y * pixelSize}px, 0)";
}

const main = () => {
    movement();
    window.requestAnimationFrame(() => main())
}
main();

document.addEventListener("keydown", (ke) => {
    var direction = keys[ke.which];
    if (direction && held_directions.indexOf(direction) === -1) {
        held_directions.unshift(direction);
    }
})

document.addEventListener("keyup", (ke) => {
    var direction = keys[ke.which];
    if (held_directions.indexOf(direction) > -1) {
        held_directions.splice(held_directions.indexOf(direction), 1);
    }
});