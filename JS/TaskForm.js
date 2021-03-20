class TaskForm {
    constructor(){
        this.taskTitle = createInput('');
        this.taskDuration = createInput('');
        this.taskDeadline = createInput('');
    }
    display(){
        this.taskTitle.position(windowWidth*3.75/8, windowHeight/4);
        this.taskDuration.position(windowWidth*3.75/8, windowHeight/2);
        this.taskDeadline.position(windowWidth*3.75/8, windowHeight*3/4);
        fill("Black");
        textSize(20);
        text("Enter task Title:", windowWidth*3.75/8 - 170, windowHeight/4 + 20);
        text('Enter task duration in minutes:', windowWidth*3.75/8 - 310, windowHeight/2 + 20);
        text('Enter task deadline:', windowWidth*3.75/8 - 200, windowHeight*3/4 + 20);
    }
}