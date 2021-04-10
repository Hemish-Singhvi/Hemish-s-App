class BackButton {
    constructor(){
        backButton = createButton('<=');
    }
    display(){
        this.backButton.position(windowWidth/8, windowHeight/8);
    }
}