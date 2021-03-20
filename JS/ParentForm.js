class ParentSigninForm {
    constructor(){
        this.userID = createInput('User Email');
        this.pwd = createInput('Password');
    }
    display(){
        this.userID.position(windowWidth*3.75/8, windowHeight/3);
        this.pwd.position(windowWidth*3.75/8, windowHeight*2/3);
        this.userID.style('color', pink);
    }
}