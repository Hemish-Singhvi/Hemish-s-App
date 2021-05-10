class BackButton {
    constructor(){
        this.backButton = createButton('<=');
    }
    position(){
        this.backButton.position(windowWidth/32, windowHeight/16);
    }
    forStudentScreen(){
        this.backButton.mousePressed(()=>{
            this.SS = new homeScreen();
            this.SS.display();
            image(bgImg, windowWidth, windowHeight, windowWidth/2, windowHeight/2)
            appState = 1;
            //studentPage.hide();
        })
    }
    forParentForm(){
        this.backButton.mousePressed(()=>{
            this.PF = new homeScreen();
            this.PF.display();
            image(bgImg, windowWidth, windowHeight, windowWidth/2, windowHeight/2)
            appState = 1;
            //parentForm.hide();
        })
    }
    forTaskForm(){
        this.backButton.mousePressed(()=>{
            this.TF = new StudentScreen();
            this.TF.display();
            image(bgImg, windowWidth, windowHeight, windowWidth/2, windowHeight/2)
            appState = 1.1;
            //taskForm.hide();
        })
    }
    forAllTasks(){
        this.backButton.mousePressed(()=>{
            this.AT = new StudentScreen();
            this.AT.display();
            image(bgImg, windowWidth, windowHeight, windowWidth/2, windowHeight/2)
            appState = 1.1;
            //tasks.hide();
        })
    }
}