class temperature{
    C;
    constructor(C){
        this.C=C;
    }
    CtoF(){
        let F= this.C*1.8+32;
        return F;
    }
    CtoK(){
        let K = this.C+273.15;
        return K;
    }

}
let sat = new temperature(25);
document.write("Độ F = "+sat.CtoF()+"<br/>");
document.write("Độ K = "+sat.CtoK());
