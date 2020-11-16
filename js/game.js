import Player from '/js/player.js';

//Creation of canvas with default 600x800 size
let game = document.getElementById("gameScreen");
let gameContent = game.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let bgImage = new Image();
bgImage.src = "images/background_test.png";

bgImage.onload = () => gameContent.drawImage(bgImage, 0, 0, 800, 600);
let heroImage = new Image();
heroImage.src = "images/hero_test.png";

heroImage.onload = () => gameContent.drawImage(heroImage, GAME_WIDTH / 2, GAME_HEIGHT / 2)


