class OpeningPosition {
    constructor() {}
    draw(play) {
        // UFO Hunter
        ctx.clearRect(0, 0, play.width, play.height);
        ctx.font = "80px Comic Sans MS";
        ctx.textAlign = "center";
        //! first two the start point x and y the last two is the finish point
        const gradient = ctx.createLinearGradient((play.width / 2 - 180), (play.height / 2), (play.width / 2 + 180), (play.height / 2));
        gradient.addColorStop("0", 'yellow'); //first half
        gradient.addColorStop("0.5", "red"); // in the middle
        gradient.addColorStop("1.0", "yellow"); // last
        ctx.fillStyle = gradient;
        ctx.fillText("UFO HUNTER PLAY", play.width / 2, play.height / 2 - 70);

        // Press "space" to start
        ctx.font = "40px Comic Sans MS";
        ctx.fillStyle = "#D7DF01";
        ctx.fillText("Press 'space' to start. :)", play.width / 2, play.height / 2);

        // Game Controles
        ctx.fillStyle = '#2e2f00';
        ctx.fillText("Game Controls:-", play.width / 2, play.height / 2 + 180);
        ctx.fillText("Left Arrow: Move Left", play.width / 2, play.height / 2 + 220);
        ctx.fillText("Right Arrow: Move Right", play.width / 2, play.height / 2 + 260);
        ctx.fillText("Space: Fire", play.width / 2, play.height / 2 + 300);

        ctx.fillStyle = 'red';
        ctx.font = "20px Comic Sans MS";
        ctx.fillText("Created By: DASHZOU", play.width / 3, play.height / 2 + 360)
        ctx.fillText("Github: @dash7ou", play.width / 1.5, play.height / 2 + 360)
    }

    keyDown(play, keyboardKey) {
        if (keyboardKey === 32) {
            play.level = 1;
            play.score = 0;
            play.shields = 2;

            play.goToPosition(new TransferPosition(play.level));
        }
    }
}