class InGamePosition {
    constructor(settings, level) {
        this.settings = settings;
        this.level = level;
        this.object = null;
        this.spaceship = null;
    }


    draw(play) {
        ctx.clearRect(0, 0, play.width, play.height);
        ctx.drawImage(this.spaceship_image, this.spaceship.x - (this.spaceship.width / 2), this.spaceship.y - (this.spaceship.height / 2));
    }
    update(play) {}
    entry(play) {
        this.spaceship_image = new Image();
        this.object = new Objects();
        this.spaceship = this.object.spaceship((play.width / 2), play.playBoundaries.bottom, this.spaceship_image);
    }
    keyDown(play) {}
}