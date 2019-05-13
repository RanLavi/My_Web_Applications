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

function PlayButton(playButton){

    // Public Methods
    this.registerClickEvent = registerClickEvent;
    playButton.addEventListener("click", click.bind(this)); // Binding this PlayButton object 
}

function updateButtonText(value){
    this.thumbsButton.innerText = this.buttonDescription + ": " + value;
}

function ThumbsButton(thumbsButton, buttonDescription){
    this.thumbsButton = thumbsButton;
    this.buttonDescription = buttonDescription;

    // Public Methods
    this.registerClickEvent = registerClickEvent;
    this.updateButtonText = updateButtonText;
    this.thumbsButton.addEventListener("click", click.bind(this)); // Binding this ThumbsButton objects
}
