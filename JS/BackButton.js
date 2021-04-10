class BackButton {
    constructor(){
        this.backButton = createButton('<=');
    }
    position(){
        this.backButton.position(windowWidth/32, windowHeight/16);
    }
    forStudentScreen(){
        this.SS = new homeScreen();
    }
    forParentForm(){
        this.PF = new homeScreen();
    }
    forTaskForm(){
        this.TF = new StudentScreen();
    }
    forAllTasks(){
        this.AT = new StudentScreen();
    }
}