
// My web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAw-ay23Cg-s5xHEGDhHl4Qfr8tvWinq8s",
    authDomain: "thelongnight-4a509.firebaseapp.com",
    databaseURL: "https://thelongnight-4a509.firebaseio.com",
    projectId: "thelongnight-4a509",
    storageBucket: "thelongnight-4a509.appspot.com",
    messagingSenderId: "199584278294",
    appId: "1:199584278294:web:ce2efe83493733ee"
};

/* Created the views and thumbs objects directly on Firebase since there's no need to create additional objects after the first time the program loads
The values for these objects were initialized to zero */

class Firebase{
    constructor(firebaseConfig){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Database references
    const database = firebase.database();
    this.viewsRef = database.ref("viewsCount");
    this.thumbsUpRef = database.ref("thumbsUpCount");
    this.thumbsDownRef = database.ref("thumbsDownCount");
    }

    // When a value is updated on the DB, we send that value to the callback function
    registerThumbsUpValueChange(callback){
        this.thumbsUpRef.on("value", function(snap) {callback(snap.val())});
    }

    registerThumbsDownValueChange(callback){
        this.thumbsDownRef.on("value", function(snap) {callback(snap.val())});
    }

    registerViewsValueChange(callback){
        this.viewsRef.on("value", function(snap) {callback(snap.val())});
    }

    // Update functions which are used to transform the current value on the DB into a new value. If another client writes to the location before the new value is successfully written, the update function will be called again with the new current value, and the write will be retried. This will happen repeatedly
    addThumbsUp(){
        this.thumbsUpRef.transaction(function(currentThumbsUpCount) {
            return currentThumbsUpCount + 1;
        });
    }

    addThumbsDown(){
        this.thumbsDownRef.transaction(function(currentThumbsDownCount) {
            return currentThumbsDownCount + 1;
        });
    }

    addViews(){
        this.viewsRef.transaction(function(currentViews){
            return currentViews + 1;
        });
    }
}