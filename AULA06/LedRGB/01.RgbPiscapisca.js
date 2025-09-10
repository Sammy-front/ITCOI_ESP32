const LEDV = 27;
const LEDG = 33;
const LEDB = 32;

let cor = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
    [255, 69, 0],
    [255, 214, 0],
    [0, 255, 255],
    [255, 0, 255],
    [255, 255, 255],
    [143, 0, 255],
];

let r = 0;
let g = 0;
let b = 0;

let i = 0;

setInterval(function () {

    r = cor[i][0]
    g = cor[i][1]
    b = cor[i][2]

    analogWrite(LEDV, r)
    analogWrite(LEDB, b)
    analogWrite(LEDG, g)
    // analogWrite(LEDG, Math.random())

    // i = (i + 1) % 9
    i = (i + 1) % cor.length
}, 100)


// setInterval(function () {

//     let RAND = Math.floor(Math.random() * 9)

//     let r = cor[RAND][0];
//     let b = cor[RAND][1];
//     let g = cor[RAND][2];
    
//     analogWrite(LEDV, r)
//     analogWrite(LEDB, b)
//     analogWrite(LEDG, g)

// }, 100)