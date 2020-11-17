export default class Player {
    constructor(imageSrc, xPosition, yPosition) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.position = {
            x: xPosition,
            y: yPosition
        }
    }

    draw(gameContent) {
        this.image.addEventListener("load", () => {
            console.log("The hero image has been loaded");
            gameContent.drawImage(this.image, this.position.x, this.position.y);
        }, false);
    }
}