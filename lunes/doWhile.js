let array = [23,56,456, 380, 1,30,20]
let i=0;
let num=0;
do{
    num=array[i];
    i++
}
while(num !=1)

document.write("</br> El numero " + num + " está en la posicion de: " + i)

let array2 = ["Rojo", "Azul", "Verde","Naranjo","Amarillo"]
let x=0;
let color = array2[0]
document.write("</br></br> Ejercicio While : ")
while(color!="Naranjo"){
    document.write("</br> los colores son: " + color);
    x++
    color = array2[x];
}



x=0;
document.write("</br></br> Ejercicio Do While: ")
do{
    color=array2[x];
    document.write("</br> Los colores son: " + color)
    x++
}while(color!="Naranjo")