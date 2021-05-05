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
            studentPage.hide();
        })
    }
    forParentForm(){
        this.backButton.mousePressed(()=>{
            this.PF = new homeScreen();
            this.PF.display();
            parentForm.hide();
        })
    }
    forTaskForm(){
        this.backButton.mousePressed(()=>{
            this.TF = new StudentScreen();
            this.TF.display();
            taskForm.hide();
        })
    }
    forAllTasks(){
        this.backButton.mousePressed(()=>{
            this.AT = new StudentScreen();
            this.AT.display();
            tasks.hide();
        })
    }
}