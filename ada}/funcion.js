var x = myFuncion(55,33);

document.getElementById("demostracion").innerHTML = x;

function myFuncion(a,b){
    return a*b;
}

myFuncion2()

function myFuncion2(){
    var arbol= "Quillay";
    document.getElementById("demostracion2").innerHTML= arbol;
}

function myFuncion3(){
    const d = new Date();//constante es un avariable sin cambio 
    document.getElementById("demostracion3").innerHTML = d.getFullYear();
}

myFuncion3();

function myFuncion4(){
    const d = new Date();//constante es un avariable sin cambio 
    let day = d.getDay();
    document.getElementById("demostracion4").innerHTML = day;
}

myFuncion4();