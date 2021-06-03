class APP{
    constructor(){
        this.appState = 0;
        this.homeSCREEN;
        this.parentFORM;
        this.studentSCREEN;
        this.taskFORM;
        this.allTASKS;
        this.backButton = new BackButton();
        //this.studentB = createButton('Student');
        //this.parentB = createButton('Parent');
    }
    display(){
        if (this.appState = 0) {
            this.homeSCREEN = new homeScreen();
            this.studentB = createButton('Student');
            this.parentB = createButton('Parent');
            this.studentB.position(windowWidth*3.75/8, windowHeight/3, 100, 50);
            this.parentB.position(windowWidth*3.75/8, windowHeight*2/3);
            this.studentB.style('backgroundColor', '#aa00ff');
            this.parentB.style('backgroundColor', '#ff0000')
            this.studentB.mousePressed(()=>{
                appState = 1.1;
                this.studentB.hide();
                this.parentB.hide();
                studentPage = new StudentScreen();
                studentPage.display();
            })
            
            //generation of parent sign in form when parent button is pressed.
            //this form is yet to be worked on.
            this.parentB.mousePressed(()=>{
                appState = 1.2;
                this.studentB.hide();
                this.parentB.hide();
                parentForm = new ParentSigninForm();
                parentForm.display();
            })
        }
        if (this.appState = 1.1) {
            this.parentFORM = new ParentSigninForm();
        }
        if (this.appState = 1.2) {
            this.studentSCREEN = new StudentScreen();
            this.studentB = createButton('Student');
            this.parentB = createButton('Parent');
            this.scheduleTask.mousePressed(()=>{
                appState = 2.1;
                taskForm = new TaskForm();
                taskForm.display();
                this.scheduleTask.hide();
                this.ALLTasks.hide();
            });
            this.ALLTasks.mousePressed(()=>{
                appState = 2.2;
                tasks = new allTasks;
                tasks.displayEveryTask();
                this.scheduleTask.hide();
                this.ALLTasks.hide();
            })
            this.backButton.forStudentScreen();
        }
        if (this.appState = 2.1) {
            this.allTASKS = new allTasks();
        }
        if (this.appState = 2.2) {
            this.taskForm = new TaskForm();
        }
    }
}