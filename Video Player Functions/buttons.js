class PlayButton{
    constructor(playButton){
        this.playButton = playButton;
        this.registerClickEvent = registerClickEvent.bind(this);
        this.click = click.bind(this);
        this.playButton.addEventListener("click", this.click); // Binding this PlayButton object 
    }
}

class ThumbsButton{
    constructor(thumbsButton, buttonDescription){
        this.thumbsButton = thumbsButton;
        this.buttonDescription = buttonDescription;
        this.registerClickEvent = registerClickEvent.bind(this);
        this.click = click.bind(this);
        this.thumbsButton.addEventListener("click", this.click); // Binding this ThumbsButton objects
    }

    updateButtonText(value){
        this.thumbsButton.innerText = this.buttonDescription + ": " + value;
    }
}

// Getting a reference to the playOrPause function from VideoPlayer, and addThumbsUp and addThumbsDown functions from Firebase
function registerClickEvent(callback){
    this.callback = callback;
}

// Call the callback function of this particular instance
function click(){
    if(this.callback){
        this.callback();
    }
}
