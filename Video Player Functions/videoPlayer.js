function playOrPause(){ 
    if(this.videoPlayerElement.paused){
        this.videoPlayerElement.play();
        this.updateCurrentTime();
    }
    else{
        this.videoPlayerElement.pause();

        if(this.updateCurrentTimeLoopToken){
            clearTimeout(this.updateCurrentTimeLoopToken);
            this.updateCurrentTimeLoopToken = undefined;
        }
    }
}

function updateCurrentTime(){
    // CurrentTime object calling a Currenttime method
    this.currentTimeControl.renderCurrentTime(this.videoPlayerElement.currentTime);

    const remainMillisecondsTillNextSecond = 1000 - this.videoPlayerElement.currentTime % 1 * 1000;
    this.updateCurrentTimeLoopToken = setTimeout(this.updateCurrentTime.bind(this), remainMillisecondsTillNextSecond); // Binding this video object to the next run
}

function Video(videoPlayerElement, currentTimeControl){
    this.videoPlayerElement = videoPlayerElement;
    this.currentTimeControl = currentTimeControl;

    // Public Methods
    this.playOrPause = playOrPause;
    this.updateCurrentTime = updateCurrentTime;
}