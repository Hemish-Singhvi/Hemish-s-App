class allTasks {
    constructor(){
        this.title;
        this.submitB = createButton('Submit');
        this.submitB.hide();
    }
    displayEveryTask(){
        fill('black')
        textSize(72);
        this.title = text('All Tasks', windowWidth*7/16, windowHeight/8);
        //this.title.bold();
        this.viewTasks();
        backButton.show();
    }
   
    displayIndividualTasks(TaskIndex){
        TaskIndex = TaskIndex - 1;
        this.title = text(tasks[TaskIndex[1]], windowWidth*7/16, windowHeight/8);
        text('Duration   '+tasks[TaskIndex[1]], windowWidth*3.75/8 - 90, windowHeight/4 + 20);
        text('Deadline   '+tasks[TaskIndex[2]], windowWidth*3.75/8 - 90, windowHeight/2 + 20);
        text('Status:    ', windowWidth*3.75/8 - 70, windowHeight*3/4 + 20);
        this.submitB.show();
        this.submitB.mousePressed(() =>{
            this.submitB.hide();
        })
        backButton.show();
    }

    viewTasks(){
        if (tasks.keys() === 1) {
            text('1.'+ tasks[0]);
        }
        if (tasks.keys() === 2) {
            text('2.'+ tasks[1]);
        }
        if (tasks.keys() === 3) {
            text('3.'+ tasks[2]);
        }
        if (tasks.keys() === 4) {
            text('4.'+ tasks[3]);
        }
        if (tasks.keys() === 5) {
            text('5.'+ tasks[4]);
        }
        if (tasks.keys() === 6) {
            text('6.'+ tasks[5]);
        }
        if (tasks.keys() === 7) {
            text('7.'+ tasks[6]);
        }
        if (tasks.keys() === 8) {
            text('8.'+ tasks[7]);
        }
        if (tasks.keys() === 9) {
            text('9.'+ tasks[8]);
        }
        if (tasks.keys() === 10) {
            text('10.'+ tasks[9]);
        }
    }

    pleaseCompleteTasks(){
        if (tasks.keys() === 10) {
            fill('red');
            text('Tasks are piling up! Please complete some tasks and then schedule more.')
        }
    }
}