class TransferPosition {
    constructor(level) {
        this.leve = level;
    }
    draw(play) {
        ctx.clearRect(0, 0, play.width, play.height);
        ctx.font = "80px Comic Sans MS";
        ctx.textAlign = "center";
        ctx.fillStyle = "yellow";
        ctx.fillText("We are in transfar position", play.width / 2, play.height / 2);
    }
}