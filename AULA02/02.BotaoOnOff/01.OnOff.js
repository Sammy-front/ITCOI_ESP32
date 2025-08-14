let RGBVermelho = 4;
let RGBVerde = 17;
let RGBAzul = 21;
let Button = 18;

pinMode(RGBVermelho, "output");
pinMode(RGBVerde, "output");
pinMode(RGBAzul, "output");
pinMode(Button, "input_pullup");


analogWrite(RGBVermelho, 0);
analogWrite(RGBVerde, 0);
analogWrite(RGB3, 0);

setInterval(function RGBcolor() {

    let statusButton = digitalRead(Button);
    console.log("Button Status: " + statusButton);
   
    if (statusButton == 0) {
        analogWrite(RGBVermelho, 0.5);
        analogWrite(RGBVerde, 0);
        analogWrite(RGBAzul, 1);
    } else {
        analogWrite(RGBVermelho, 0);
        analogWrite(RGBVerde, 0);
        analogWrite(RGBAzul, 0);
    };

}, 10);


RGBcolor();