var sueldo = parseInt(document.getElementById('txtSueldo').value);
var antiguedad = parseInt(document.getElementById('txtAntiguedad').value);
/*function calcular(suel, anti){
    if (suel < 500 && anti >= 10) {
        document.getElementById("respuesta").innerHTML = "yes"; 
    }
}

calcular();
*/




function Calcular(sueldo, antiguedad){
    if (sueldo<500){
        if (antiguedad>=10) {
        return document.getElementById("respuesta").innerHTML = "yes";     
        }else{
        return document.getElementById("respuesta").innerHTML = "no";     
        }
    }   
}
Calcular(sueldo, antiguedad);