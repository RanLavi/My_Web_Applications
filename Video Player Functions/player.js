window.addEventListener("load", init);

function init(){
    const myPlayButton = new PlayButton(document.getElementById("playPause"));
    const myThumbsUpButton = new ThumbsButton(document.getElementById("thumbsUp"), "thumbsUp");
    const myThumbsDownButton = new ThumbsButton(document.getElementById("thumbsDown"), "thumbsDown"); 
    const currentTimeControl = new CurrentTime(document.getElementById("currentTime"));
    const myVideo = new Video(document.getElementById("video"), currentTimeControl);
    const myViews = new Views(document.getElementById("views"));
    const myDataBase = new Firebase(firebaseConfig);
    myPlayButton.registerClickEvent(myVideo.playOrPause.bind(myVideo)); // Sending the PlayButton class a reference to playOrPause function, and binding it to myVideo object
    myThumbsUpButton.registerClickEvent(myDataBase.addThumbsUp.bind(myDataBase)); // Sending the buttons class a reference to addThumbsUp function, and binding it to myDataBase object, to this instance
    myThumbsDownButton.registerClickEvent(myDataBase.addThumbsDown.bind(myDataBase)); // Sending the buttons class a reference to addThumbsDown function, and binding it to myDataBase object, to this instance
    myDataBase.registerThumbsUpValueChange(myThumbsUpButton.updateButtonText.bind(myThumbsUpButton)); // Sending the Firebase class a reference to updateButtonText function, and binding it to myThumbsUpButton object, to this instance
    myDataBase.registerThumbsDownValueChange(myThumbsDownButton.updateButtonText.bind(myThumbsDownButton)); // Sending the Firebase class a reference to updateButtonText function, and binding it to myThumbsDownButton object, to this instance
    myDataBase.registerViewsValueChange(myViews.updateViewsValue.bind(myViews)); // Sending the Firebase class a reference to updateViewsValue function, and binding it to myViews object, to this instance
    myDataBase.addViews(); // Add 1 to views
}