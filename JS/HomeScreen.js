class homeScreen {
    constructor(){
        this.studentB = createButton('Student');
        this.parentB = createButton('Parent');
    }
    //Function to hide buttons when clicked
    hide(){
        this.parentB.hide();
        this.studentB.hide();
    }
    display() {
        //Setting the positions of the primary buttons
        this.studentB.position(windowWidth*3.75/8, windowHeight/3, 100, 50);
        this.parentB.position(windowWidth*3.75/8, windowHeight*2/3);
        //The callback function when the student Button is pressed
        //document.getElementById('this.studentB').style.backgroundColor = "red";
        //console.log(this.studentB);
        this.studentB.mousePressed(()=>{
            this.studentB.hide();
            this.parentB.hide();
            this.studentPage = new StudentScreen;
            this.studentPage.display();
        })
        
        //generation of parent Sign in form when parent button is pressed.
        //this form is yet to be worked on.
        this.parentB.mousePressed(()=>{
            this.studentB.hide();
            this.parentB.hide();
            this.parentForm = new ParentSigninForm;
            this.parentForm.display();
        })
    }
}