const canvas = document.getElementById("ufoCanves");
canvas.width = 900;
canvas.height = 750;
const ctx = canvas.getContext('2d');



// Canvas automatic resizing
function resize() {
    // Our canvas must full height of screen regardless of the resolution
    const height = window.innerHeight - 20;

    //So we need to calculate the proper scaled width that should work well with every resolution
    const ratio = canvas.width / canvas.height;
    const width = height * ratio;


    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

}

window.addEventListener("load", resize, false)


class GameBasics {
    constructor(canvas) {
        this.canvas = canvas;
        this.height = canvas.height;
        this.width = canvas.width;

        // active playing feild
        this.playBoundaries = {
            top: 150, //from top of canvas
            bottom: 650, //from top of canvas
            left: 100, //from top of left
            right: 800 //from top of left
        };

        // initial value
        this.level = 1;
        this.score = 0;
        this.shields = 2; //chance to end the game

        this.setting = {
            //FBS: 60 frame per 1 second, this mean 1 frame in every 0.0166667 seconds
            updateSeconds: (1 / 60),
            spaceshipSpeed: 300
        }

        // we collect here the different position, states of the game
        /**
         * we have in this stack..
         * 1. positionOpening
         * 2. positionTransfer
         * 3. positionInGame
         * 4. positionPause
         * 5. positionGameOver
         */
        this.positionContainer = []

        // pressed keys storing
        this.pressedKeys = {};

    }

    // Return current game position, status. Always returns the top element of positionContainer.
    presentPosition() {
        return this.positionContainer.length > 0 ? this.positionContainer[this.positionContainer.length - 1] : null
    }
    // Move the desired position
    goToPosition(position) {
        // If we're already in a position clear the positionContainer.
        if (this.presentPosition()) {
            this.positionContainer.length = 0
        }

        // If we finds an "entry" in a given position, we call it 
        if (position.entry) {
            position.entry(play)
        }

        // Setting the current game position in the positionContainer
        this.positionContainer.push(position);
    }

    // Push our new position into the positionContainer => this is a stack data type
    pushPosition(position) {
        this.positionContainer.push(position)
    }

    // Pop the position from the positionContainer
    popPosition() {
        this.positionContainer.pop()
    }


    start() {
        setInterval(() => {
            gameLoop(play)
        }, this.setting.updateSeconds * 1000);
        // go into opening position
        this.goToPosition(new OpeningPosition());
    }

    // Notified a game when the key pressed
    keyDown(keyboardCode) {
        // store the pressed key in "pressedKey"
        this.pressedKeys[keyboardCode] = true;

        // it calls the present positions keyDown function
        if (this.presentPosition() && this.presentPosition().keyDown) {
            this.presentPosition().keyDown(this, keyboardCode);
        }

    }

    // Notified a game when a key is released
    keyUp(keyboardCode) {
        // delete
        delete this.pressedKeys[keyboardCode]
    }
}



function gameLoop(play) {
    // last item in the positionContainer
    let presentPosition = play.presentPosition();

    if (presentPosition) {
        //update
        if (presentPosition.update) {
            presentPosition.update(play)
        }


        //draw
        if (presentPosition.draw) {
            presentPosition.draw(play)
        }
    }
}


// keyboard event listening
window.addEventListener("keydown", function (e) {
    const keyboardCode = e.which || event.keyCode; // Use either which or keyCode, depending on browser 
    if (keyboardCode === 37 || keyboardCode === 39 || keyboardCode === 32) { // space / left / right
        e.preventDefault();
    }

    play.keyDown(keyboardCode);
})


window.addEventListener("keyup", function (e) {
    const keyboardCode = e.which || event.keyCode; // Use either which or keyCode, depending on browser
    play.keyUp(keyboardCode);
})


const play = new GameBasics(canvas);
play.start()