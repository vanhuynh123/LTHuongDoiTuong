class Battery{
        constructor(){
            this.energy=0;
        }
        setEnergy(energy){
            this.energy=energy;
        };
        getEnergy(){
            this.energy;
        }
        decreaseEnergy(){
            if(this.energy>0)
            {
                this.energy--;
            }
        }
}
class FlashLamp{
constructor(){

}
setBattery(battery){
this.battery=battery;
}
getBatteryInfo(){
    return this.battery.getEnergy();
}
light(){
    if(this.status){
        alert("lighting");
    }
    else
    {
        alert("Not lighting");
    }
}
turnOn(){
this.status=true;
}
turnOff(){
    this.status=false;
}
}
let pin3a = new Battery();
pin3a.setEnergy(10);
let dentrungthu = new FlashLamp();
dentrungthu.setBattery(pin3a);
document.write("Battery info:" + dentrungthu.getBatteryInfo() + "<br/>");
dentrungthu.light();

document.write("Turn on<br/>")
dentrungthu.turnOn();
dentrungthu.light();
document.write("Battery info:" + dentrungthu.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>")
dentrungthu.turnOff();
dentrungthu.light();