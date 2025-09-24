const TRIGGER = 33;
const ECHO = 32;

pinMode(TRIGGER, "output");
pinMode(ECHO, "input");

setInterval(()=> {
    
    //configuração do ECHO
    
    setWatch(function(i)
    {
        let tempo = i.time - i.lastTime;
        
        // Calculando distancia em cm
        let distancia = 17000 *tempo;
        console.log("distancia: " + distancia + "cm")
    }, ECHO, {edge:"falling"});
    
    // disparando trigger
    digitalPulse(TRIGGER, 1, 1);
},500);



