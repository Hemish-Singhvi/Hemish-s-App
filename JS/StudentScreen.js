
class StudentScreen {
    constructor(){
        if (appState === 1.1) {
            this.scheduleTask = createButton('Schedule Task');
            this.ALLTasks = createButton('All Tasks');
            this.backButton = new BackButton();
            //this.screen = new Group();
        }
    }
    display(){
        if (appState === 1.1) {
            //this.screen.add(this.scheduleTask);
            //this.screen.add(this.ALLTasks);
            //this.screen.add(this.backButton);
            this.scheduleTask.position(windowWidth*3.64/8, windowHeight/2);
            this.ALLTasks.position(windowWidth*3.75/8, windowHeight*0.75/2);
            this.backButton.position();
            //generating a form for creation of a task scheduling form when scheduletask is pressed
            this.scheduleTask.style('backgroundColor', '#00aaff');
            this.ALLTasks.style('', '#00ccee');
            /*this.scheduleTask.mousePressed(()=>{
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
            /*this.backButton.mousePressed(()=>{
                //varhomescreen = new homeScreen();
                FORM.show();
            })*/
            //console.log('Home Screen')
        }
        else{
            this.scheduleTask.hide();
            this.ALLTasks.hide();
            this.backButton.hide();
        }
        

    }
}