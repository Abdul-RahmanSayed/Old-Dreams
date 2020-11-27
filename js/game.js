/*
import Player from '/js/player.js';

//Creation of canvas with default 600x800 size
let game = document.getElementById("camera");
let gameContent = game.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//Initializes all the images for the game (the player/the enemies/the many game screens)
let gameStart = new Image();
let firstBgImage = new Image();
let monsters = [new Image(), new Image(), new Image(), new Image(), new Image()];
let startWalls = [];
let firstLevelWalls = [];
let boss = new Image();
gameStart.src = "images/backgrounds/start_screen_example.jpg";
firstBgImage.src = "images/backgrounds/background_test.png";
monsters[0].src = "images/units/monster_test.png";
monsters[1].src = "";
monsters[2].src = "";
monsters[3].src = "";
monsters[4].src = "";
boss.src = "";

let player = new Player("images/units/hero_test.png", 0, 0);
player.setyPosition(player.size() * 4);
//NOTE: setyPosition does not always work; i.e the hero image often loads before the position is updated.
firstBgImage.onload = () => gameContent.drawImage(firstBgImage, 0, 0, 800, 600);
player.draw(gameContent);
*/