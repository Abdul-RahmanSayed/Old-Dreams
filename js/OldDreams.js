/* Future Suggestions: 
 *  - A simple way to add interaction is to make it so you have to walk next to the mob or character to have
 *    your character freeze (using the movement function) and interact with them 
 *    (this makes it so you don't have to add too much extra stuff to the event listeners)
 *  - To add a textbox I think there only needs to be one and that it can be toggled hidden or present depending 
 *    on whether or not we want it there using css and html (see the walking tag on the character div in the html).
 *    We can change css attribute 'hidden' within js (see lines 66, 90 and 91 for attribute/style changes) all we need is to 
 *    change the text that appears for dialogue and the character image next to the textbox.
 *  - Changing maps will be using the changing attribute css thing and detecting within the movement function if the
 *    character is next to an exit.
 */

// Retrieves html/css elements to interact with in the js to simulate movement.
var character = document.querySelector(".character");
var map = document.querySelector(".map");

var cases = ["10001", "00011", "00010", "10111", "01101"];
var room = cases[0];

let characterSize = 16;
//getting the character size directly from the css returns a string? that is in the number and "px" in the end
//getComputedStyle(document.querySelector(".character_spritesheet")).height
console.log(characterSize);

//movement constants
const directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
}

//key codes to use and match when doing keyboard events later on; uses directional constants above.
const keys = { 
    37: directions.left,
    38: directions.up,
    39: directions.right,
    40: directions.down,
}

//Beginning location and state of the character.
var x = 100;
var y = 200;
var held_directions = [];
var speed = 1;

//the function that allows the player to move and to hit walls (possibly objects if added)
const movement = () => {
    var pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size'));
    const held_direction = held_directions[0];
    if (held_direction) {
        if (held_direction === directions.right) {
            x += speed;
        }
        if (held_direction === directions.left) {
            x -= speed;
        }
        if (held_direction === directions.up) {
            y -= speed;
        }
        if (held_direction === directions.down) {
            y += speed;
        }
    }
    character.setAttribute("walking", held_direction ? "true" : "false");
    
    //Walls
    var topLimit = 12;
    var bottomLimit = 216;
    var leftLimit = 12;
    var rightLimit = 226;

    const rooms = (aRoom, x, y) => {
        if (aRoom == cases[0]) {
            if (y > 216 && (x > 100 && x < 125)) {
                return cases[2];
            } else {
                return cases[0];
            }
        } else if (aRoom == cases[2]) {
            if (y < 12 && (x > 100 && x < 125)) {
                return cases[0];
            } else {
                return cases[2];
            }
        }
    }
    
    if (room == "10001" && rooms(room, x, y) == "00010"){
        room = rooms(room, x, y);
        document.querySelector(".map").style.backgroundImage = "url(./images/backgrounds/Room-T.png)";
        console.log(x, y);
        x = 117;
        y = 14;
    } else if (room == "00010" && rooms(room, x, y) == "10001") {
        room = rooms(room, x, y);
        document.querySelector(".map").style.backgroundImage = "url(./images/backgrounds/Dark-Room-B.png)";
        console.log(x, y);
        x = 117;
        y = 215;
    } else if (x < leftLimit) {
        x = leftLimit; 
        console.log(x, y);
        teleport = false;
    } else if (x > rightLimit) { 
        x = rightLimit; 
        console.log(x, y);
        teleport = false;
    } else if (y < topLimit) { 
        y = topLimit;
        console.log(x, y);
        teleport = false;
    } else if (y > bottomLimit) {
        y = bottomLimit;
        console.log(x, y);
        teleport = false;
    }


    
    
    
    if (y > bottomLimit) {
        y = bottomLimit;
        console.log(x, y); 
    }

    //movement as from the camera
    var camera_left = pixelSize * 65;
    var camera_top = pixelSize * 40;


    map.style.transform = `translate3d(${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0)`;
    character.style.transform = `translate3d(${x*pixelSize}px, ${y*pixelSize}px, 0)`;  
}

//this is the main function of the game - it does everything
const main = () => {
    movement();
    window.requestAnimationFrame(() => {
        main();
    });
}
main();


// the event listeners that account for all keyboard inputs 
// if there is more to be added - lets say the "Enter" key 
// for interactions with characters and textboxes - that will have to be handled by these event listeners only.
document.addEventListener("keydown", (ke) => {
    var direction = keys[ke.which];
    if (direction && held_directions.indexOf(direction) === -1) {
        held_directions.unshift(direction);
    }
});

document.addEventListener("keyup", (ke) => {
    var direction = keys[ke.which];
    if (held_directions.indexOf(direction) > -1) {
        held_directions.splice(held_directions.indexOf(direction), 1);
    }
});
