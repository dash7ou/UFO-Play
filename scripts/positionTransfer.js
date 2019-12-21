class TransferPosition {
    constructor(level) {
        this.level = level;
        this.num = 1;
    }
    update(play) {
        this.num++;
        if (this.num > 120) { //2s 60 FPS -> 120 = 2
            play.goToPosition(new InGamePosition())
        }
    }
    draw(play) {
        ctx.clearRect(0, 0, play.width, play.height);
        ctx.font = "80px Comic Sans MS";
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(255,255,25,1)";
        ctx.fillText("Get Ready for level " + this.level, play.width / 2, play.height / 2);
    }
}