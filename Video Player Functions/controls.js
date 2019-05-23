class Views{
    constructor(viewsDomElement){
        this.viewsDomElement = viewsDomElement;
    }

    updateViewsValue(value){
        this.viewsDomElement.innerText = value;
    }
}

class CurrentTime{
    constructor(currentTimeDomElement){
        this.currentTimeDomElement = currentTimeDomElement;
    }

    renderCurrentTime(currentTimeInSeconds){
        let minutes = Math.floor(currentTimeInSeconds / 60);
        let seconds = Math.floor(currentTimeInSeconds % 60); // Get rid of minutes and milliseconds
    
        if(seconds > 9){
            this.currentTimeDomElement.innerText =  minutes + ":" + seconds;
        }
        // If seconds < 10, a zero needs to be added in order to show two digits to the right of the colon
        else{
            this.currentTimeDomElement.innerText =  minutes + ":0" + seconds;
        }
    }
}