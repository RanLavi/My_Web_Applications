function updateViewsValue(value){
    this.viewsDomElement.innerText = value;
}

function Views(viewsDomElement){
    this.viewsDomElement = viewsDomElement;

    // Public Methods
    this.updateViewsValue = updateViewsValue;
}

// Private Method
function getTimeAsString(minutes, seconds){
    if(seconds > 9){
        return minutes + ":" + seconds;
    }
    // If seconds < 10, a zero needs to be added in order to show two digits to the right of the colon
    else{
        return minutes + ":0" + seconds;
    }
}

function renderCurrentTime(currentTimeInSeconds){
    let minutes = Math.floor(currentTimeInSeconds / 60);
    let seconds = Math.floor(currentTimeInSeconds % 60); // Get rid of minutes and milliseconds

    this.currentTimeDomElement.innerText = getTimeAsString(minutes, seconds);
}

function CurrentTime(currentTimeDomElement){
    this.currentTimeDomElement = currentTimeDomElement;

    // Public Methods
    this.renderCurrentTime = renderCurrentTime;
}