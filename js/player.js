export default class Player {
    constructor(gameWidth, gameHeight) {
        this.position = {
            x: gameWidth / 2,
            y: gameHeight / 2
        }
    }

    draw(gameContent, img) {
        img.onLoad = () => gameContent.drawImage(img, this.position.x, this.position.y);
    }
}