window.onload = init;

function init(){
    const videoFile = document.getElementById("video");
    const playButton = document.getElementById("playPause");
    const thumbsUpButton = document.getElementById("thumbsUp");
    const thumbsDownButton = document.getElementById("thumbsDown");
    const currentTimeDomElement = document.getElementById("currentTime");
    const viewsDomElement = document.getElementById("views");
    
    const myPlayButton = new PlayButton(playButton);
    const myThumbsUpButton = new ThumbsButton(thumbsUpButton, "thumbsUp");
    const myThumbsDownButton = new ThumbsButton(thumbsDownButton, "thumbsDown"); 
    const currentTimeControl = new CurrentTime(currentTimeDomElement);
    const myVideo = new Video(videoFile, currentTimeControl);
    const myViews = new Views(viewsDomElement);
    myPlayButton.registerClickEvent(myVideo.playOrPause.bind(myVideo)); // Sending the PlayButton class a reference to playOrPause function, and binding it to myVideo object
    // can also be done by using lambda: myPlayButton.registerClickEvent(() => { myVideo.playOrPause(); });
    // or myPlayButton.registerClickEvent(function() { myVideo.playOrPause(); })
    const myDataBase = new Firebase();
    myThumbsUpButton.registerClickEvent(myDataBase.addThumbsUp.bind(myDataBase)); // Sending the buttons class a reference to addThumbsUp function, and binding it to myDataBase object, to this instance
    myThumbsDownButton.registerClickEvent(myDataBase.addThumbsDown.bind(myDataBase)); // Sending the buttons class a reference to addThumbsDown function, and binding it to myDataBase object, to this instance
    myDataBase.registerThumbsUpValueChange(myThumbsUpButton.updateButtonText.bind(myThumbsUpButton)); // Sending the Firebase class a reference to updateButtonText function, and binding it to myThumbsUpButton object, to this instance
    myDataBase.registerThumbsDownValueChange(myThumbsDownButton.updateButtonText.bind(myThumbsDownButton)); // Sending the Firebase class a reference to updateButtonText function, and binding it to myThumbsDownButton object, to this instance
    myDataBase.registerViewsValueChange(myViews.updateViewsValue.bind(myViews)); // Sending the Firebase class a reference to updateViewsValue function, and binding it to myViews object, to this instance
    myDataBase.addViews(); // Add 1 to views
}