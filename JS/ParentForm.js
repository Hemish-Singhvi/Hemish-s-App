
class ParentSigninForm {
    constructor(){
        this.userID = createInput('', 'email');
        this.pwd = createInput('', 'password');
        this.backButton = new BackButton();
    }
    display(){
        this.userID.position(windowWidth*3.75/8, windowHeight/3);
        this.pwd.position(windowWidth*3.75/8, windowHeight*2/3);
        this.backButton.position();
        fill("Black");
        textSize(20);
        text('Email ID:', this.userID.position.x - 80, this.userID.position.y + 20);
        text('Password:', this.pwd.position.x - 80, this.pwd.position.y + 20);
        //this.backButton.mousePressed(()=>{
            this.backButton.forParentForm();
        //})
    }
}