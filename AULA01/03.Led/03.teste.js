let LED = 4;
let LED2 = 16;
let LED3 = 17;
let LED4 = 18;
let ledstatus = 0;
let ledstatus2 = 1;
let ledstatus3 = 0;
let ledstatus4 = 1;

pinMode(LED, "output")
pinMode(LED2, "output")
pinMode(LED3, "output")
pinMode(LED4, "output")


setInterval(function(){ 
    ledstatus = !ledstatus;
    ledstatus2 = !ledstatus2;
    ledstatus3 = !ledstatus3;
    ledstatus4 = !ledstatus4;
    digitalWrite(LED, ledstatus);
    digitalWrite(LED2, ledstatus2);
    digitalWrite(LED3, ledstatus3);
    digitalWrite(LED4, ledstatus4);
}, 1000);

