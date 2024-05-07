const Area = require('./Figuras');

try{
    console.log("El area del circulo es; "+ Area.Circulo(2));
}
catch(err){
    console.log("Error: ", err.message);
}

try{
    console.log("El area del rectangulo es; "+ Area.Cubo(2,24));
}
catch(err){
    console.log("Error: ", err.message);
}

try{
    console.log("El area del triangulo es; "+ Area.Triangulo(2,12));
}
catch(err){
    console.log("Error: ", err.message);
}
