class Objects {
    constructor() {}
    spaceship(x, y, spaceship_image) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 35
        this.spaceship_image = spaceship_image
        this.spaceship_image.src = "../images/ship.png";
        return this;
    }
}