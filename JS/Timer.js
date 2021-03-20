class timer {
    constructor(time){
        this.min = time;
        this.sec = 0;
        this.state = "paused";
        this.startTimer = createButton('START');
        this.scAngle = 0;
        this.mnAngle = 0;
    }
    dislay(){
        this.startTimer.position(windowWidth*3.75/8, windowHeight/2);
        this.startTimer.mousePressed(()=>{
            this.sec += 1/30
            this.min += 1/1800

            this.scAngle = this.sec * 6;
            this.mnAngle = 360/this.min
            this.state = "started";
            this.startTimer.hide();
            /*if (frameCount % 30 === 0){
                this.sec = this.sec + 1;
            }
            if(this.sec % 60 === 0){
                this.min = min + 1;
            }*/
            strokeWeight(7);
            stroke("green");
            noFill();
            arc(windowWidth/2, windowHeight/2, 250, 250, 270, this.scAngle-90);
            stroke("red");
            if (min !== 0){
                arc(windowWidth/2, windowHeight/2, 230, 230, 270, this.mnAngle-90);
            }
        })
    }

}