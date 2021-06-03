//
class BackButton {
    constructor(){
        this.backButton = createButton('<=');
    }
    position(){
        this.backButton.position(windowWidth/32, windowHeight/16);
    }
    forStudentScreen(){
        this.backButton.mousePressed(()=>{
            this.StSc = new homeScreen();
            this.StSc.display();
            image(bgImg, windowWidth, windowHeight, windowWidth/2, windowHeight/2)
            appState = 1;
            studentPage.tint(255, 126);
        })
    }
    forParentForm(){
        this.backButton.mousePressed(()=>{
            this.PaFo = new homeScreen();
            this.PaFo.display();
            background(bgImg);
            appState = 1;
            //parentForm.hide();
        })
    }
    forTaskForm(){
        this.backButton.mousePressed(()=>{
            this.TaFo = new StudentScreen();
            this.TaFo.display();
            background(bgImg);
            appState = 1.1;
            //taskForm.hide();
        })
    }
    forAllTasks(){
        this.backButton.mousePressed(()=>{
            this.AlTa = new StudentScreen();
            this.AlTa.display();
            image(bgImg, windowWidth, windowHeight, windowWidth/2, windowHeight/2)
            appState = 1.1;
            //tasks.hide();
        })
    }
}