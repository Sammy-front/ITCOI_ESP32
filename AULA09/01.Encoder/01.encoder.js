const CLK = 4; 
const DT = 16;
const SW = 17;

let pulsos = 0;
let pulsos2 = 0;
let etapa = 0;
let senha = [ 2, -4, 2, -5, 10, -6, 8, -7 ];
let tentativa = [];

pinMode(SW, "input_pullup")

require("Encoder").connect(DT, CLK, function(d){
    pulsos = pulsos + d
    pulsos2 = Math.round(pulsos/2)
    console.log(pulsos2)
    
});

setWatch(function() {
  tentativa.push(pulsos2);
  console.log("Valor registrado: " + pulsos2);
  pulsos2 = 0;
  etapa++;

  if (etapa === senha.length) {
   
    let correto = senha.every((v, i) => v === tentativa[i]);
    if (correto) {
      console.log("Cofre aberto!");
    } else {
      console.log("Senha incorreta!");
    }
    etapa = 0;
    tentativa = [];
    pulsos2 = 0;
  }
}, SW, { repeat: true, edge: "falling", debounce: 50 });