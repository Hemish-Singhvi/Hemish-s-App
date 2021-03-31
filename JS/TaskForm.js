class TaskForm {
    constructor(){
        this.taskTitle = createInput('', 'String');
        this.taskDuration = createInput('', 'Number');
        this.taskDeadline = createInput('', 'Date'); 
        this.submitB = createButton('Submit');
        this.taskTitleVal = [];
        this.taskDurationVal = [];
        this.taskDeadlineVal = [];
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
        this.submitB.mousePressed(()=>{
            this.getValue();
            this.logValue();
            //this.validate();
        })
        
    }
    getValue(){
        console.log(this.taskTitle.value()+", "+ this.taskDuration.value()+" minutes, "+this.taskDeadline.value());
        this.taskTitleVal.push(this.taskTitle.value());
        this.taskDurationVal.push(this.taskDuration.value());
        this.taskDeadlineVal.push(this.taskDeadline.value());
        new Task(this.taskTitleVal, this.taskDurationVal, this.taskDeadlineVal);
    }
    /*logValue(){
        tasks.push([this.taskTitleVal, this.taskDurationVal, this.taskDeadlineVal]);
        console.log(tasks);
    }*/
    /*Marked For Debugging
    validate(){
        if (this.taskTitle.value() = ""){
            text("Please input an appropriate task title.");
        }
    }*/
}