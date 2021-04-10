class TaskForm {
    constructor(){
        this.taskTitle = createInput('', 'String');
        this.taskDuration = createInput('', 'Number');
        this.taskDeadline = createInput('', 'Date'); 
        this.submitB = createButton('Submit');
        this.taskTitleVal;
        this.taskDurationVal;
        this.taskDeadlineVal;
    }
    display(){
        this.taskTitle.position(windowWidth*3.75/8, windowHeight/4);
        this.taskDuration.position(windowWidth*3.75/8, windowHeight/2);
        this.taskDeadline.position(windowWidth*3.75/8, windowHeight*3/4);
        this.submitB.position(windowWidth*3.75/8, windowHeight*13/16);
        fill("Black");
        textSize(20);
        text("Enter task Title:", windowWidth*3.75/8 - 170, windowHeight/4 + 20);
        text('Enter task duration in minutes:', windowWidth*3.75/8 - 310, windowHeight/2 + 20);
        text('Enter task deadline:', windowWidth*3.75/8 - 200, windowHeight*3/4 + 20);
        this.submitB.style('backgroundColor', '#019320')
        this.submitB.mousePressed(()=>{
            this.getValue();
            this.isVisible = false;
            //this.logValue();
            //this.validate();
        });      
    }
    getValue(){
        console.log(this.taskTitle.value()+", "+ this.taskDuration.value()+" minutes, "+this.taskDeadline.value());
        taskTitleVal = this.taskTitle.value();
        taskDurationVal = this.taskDuration.value();
        taskDurationVal = this.taskDuration.value();
        new Task(taskTitleVal, taskDurationVal, taskDeadlineVal);
    }
    /*logValue(){
        tasks.push([this.taskTitleVal, this.taskDurationVal, this.taskDeadlineVal]);
        console.log(tasks);
    }*/
    validate(){
        if (this.taskTitle.value() === ""){
            window.alert("Please input an appropriate task title.");
        }
    }
}