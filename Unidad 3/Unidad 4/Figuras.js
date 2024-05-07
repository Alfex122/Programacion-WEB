function Circulo(X1){
    return (3.1416 * (X1**2))
}

function Cubo(X1, X2){
    return X1 * X2
}

function Triangulo(X1, X2){
    return (X1*X2) / 2
}

module.exports = {
    Circulo,
    Cubo,
    Triangulo
};