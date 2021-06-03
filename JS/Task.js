
class Task {
    constructor(title, duration, deadline){
        this.TITLE  = title;
        this.DURATION = duration;
        this.DEADLINE = deadline;
        console.log(this.TITLE, this.DURATION, this.DEADLINE);
        //task = []
    }

    issueTask(){
        task.push(this.TITLE, this.DURATION, this.DEADLINE);
    }

    sendToAllTasks(){
        taskS.push(task);
        task.splice(0, task.keys());
    }
}