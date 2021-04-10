class BackButton {
    constructor(){
        this.backButton = createButton('<=');
    }
    position(){
        this.backButton.position(windowWidth/32, windowHeight/16);
    }
}