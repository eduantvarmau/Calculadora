/*AUMENTAR LA SUMA */

let resultado = document.getElementById("resultado")
let fristNum;
let secondNum;
let operacion;

function uno(){
    resultado.textContent = resultado.textContent + "1";
}
function dos(){
    resultado.textContent = resultado.textContent + "2";
}
function tres(){
    resultado.textContent = resultado.textContent + "3";
}
function cuatro(){
    resultado.textContent = resultado.textContent + "4";
}
function cinco(){
    resultado.textContent = resultado.textContent + "5";
}
function seis(){
    resultado.textContent = resultado.textContent + "6";
}
function siete(){
    resultado.textContent = resultado.textContent + "7";
}
function ocho(){
    resultado.textContent = resultado.textContent + "8";
}
function nueve(){
    resultado.textContent = resultado.textContent + "9";
}
function cero(){
    resultado.textContent = resultado.textContent + "0";
}
function punto(){
    resultado.textContent = resultado.textContent + ".";
}
function suma(){
    fristNum = resultado.textContent;
    operacion = "+"
    limpiar();
}
function resta(){
    fristNum = resultado.textContent;
    operacion = "-"
    limpiar();
}
function dividir(){
    fristNum = resultado.textContent;
    operacion = "÷"
    limpiar();
}
function multiplicar(){
    fristNum = resultado.textContent;
    operacion = "x"
    limpiar();
}
function igual(){
    secondNum = resultado.textContent;
    resolver();
}
function limpiar(){
    resultado.textContent = "";
    
}
function reset(){
    resultado.textContent = "";
    fristNum = 0
    secondNum= 0
    operacion=""
}
function residuo(){
    fristNum = resultado.textContent;
    operacion = "%"
    limpiar();
}
function raiz(){
    fristNum = resultado.textContent;
    limpiar();
    raizResultado();
 
}
function raizResultado(){
    r = Math.sqrt(parseFloat(fristNum))
    resultado.textContent = r;
}
function potencia(){
    fristNum = resultado.textContent;
    operacion = "^"
    limpiar();
}

function undo(){
    resultado.textContent = resultado.textContent.slice(0,-1);
}
function negativo(){
    resultado.textContent = resultado.textContent + "-";
}
function pi(){
    fristNum = resultado.textContent;
    limpiar();
    piResultado();
}
function piResultado(){
    z = Math.PI * parseFloat(fristNum)
    resultado.textContent = z;
}





function resolver() {
    let res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(fristNum) + parseFloat(secondNum);
            break;
        case "-":
            res = parseFloat(fristNum) - parseFloat(secondNum);
            break;
        case "÷":
            res = parseFloat(fristNum) / parseFloat(secondNum);
            break;
        case "x":
            res = parseFloat(fristNum) * parseFloat(secondNum); 
            break;
        case "%":
            res = parseFloat(fristNum) % parseFloat(secondNum); 
            break;
        case "^":
            res = Math.pow(fristNum, secondNum); 
            break;
    }
    reset();
    resultado.textContent = res;
}