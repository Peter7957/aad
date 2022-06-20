let array3 = ["Rojo", "Azul", "Verde","Naranjo","Amarillo"]

document.write("</br></br> Ejericios de switch case")
for (let i = 0; i < array3.length; i++) {
    switch(array3[i]){
        case "Rojo":
            document.write("</br> <span style='color:red'>El Color es: " + array3[i] + "</span>");
            break;
        case "Azul":
            document.write("</br> <span style='color:blue'>El Color es: " + array3[i] + "</span>");
            break;
        case "Verde":
            document.write("</br> <span style='color:green'>El Color es: " + array3[i] + "</span>");
            break;
        case "Naranjo":
            document.write("</br> <span style='color:orange'>El Color es: " + array3[i] + "</span>");
            break;
        case "Amarillo":
            document.write("</br> <span style='color:yellow'>El Color es: " + array3[i] + "</span>");
            break;
    }
}

let day =""
switch(new Date().getDay()){
    case 0:
        day = "domingo";
    break;
    case 1:
        day = "Lunes";
    break;
    case 2:
        day = "Martes";
    break;
    case 3:
        day = "Miercoles";
    break;
    case 4:
        day = "Jueves";
    break;
    case 5:
        day = "Viernes";
    break;
    case 6:
        day = "Sabado";
    break;
}

document.write("</br></br> El dia de hoy es: " + day)

function myFunction(){
    var text;
    var fruits = document.getElementById("myInput").value;
    if (fruits !="") {
        switch(fruits){
            case "Platano":
                text = "El Platano es regular!";
                break;
            case "Naranja":
                text = "Yo no soy fanatico d ela Naranja";
                break;
            case "Manzana":
                text = "te gustan las manzanas?";
                break;
            default:
                text = "Nunca he oido hablar de esa fruta..."
        }
        document.getElementById("demo").innerHTML = text;
    }
    
}

myFunction();