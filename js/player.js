export default class Player {
    constructor(imageSrc, xPosition, yPosition) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.position = {
            x: xPosition,
            y: yPosition
        }
        this.speed = 256;
    }

    speed() {
        return this.speed;
    }

    size() {
        return this.image.height;
    }

    position() {
        return this.position;
    }
    
    setxPosition(xPos) {
        this.position.x = xPos;
    }

    setyPosition(yPos) {
        this.position.y = yPos;
    }

    draw(gameContent) {
        this.image.addEventListener("load", () => {
            console.log("The hero image has been loaded");
            gameContent.drawImage(this.image, this.position.x, this.position.y);
        }, false);
    }
}