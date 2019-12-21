class InGamePosition {
    constructor(settings, level) {
        this.settings = settings;
        this.level = level;
    }


    draw(play) {
        ctx.clearRect(0, 0, play.width, play.height);
        ctx.font = "80px Comic Sans MS";
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(255,255,25,1)";
        ctx.fillText("we are in fucken game ", play.width / 2, play.height / 2);

    }
}