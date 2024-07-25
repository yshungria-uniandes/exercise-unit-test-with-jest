let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// function fromEuroToDollar(euro) {
//     let dollar = euro * oneEuroIs.USD

//     return dollar
// }

// Función para convertir de dólares a yenes
function fromDollarToYen(dollar) {
    let euro = dollar / oneEuroIs.USD;
    let yen = euro * oneEuroIs.JPY;
    return yen;
}

// Función para convertir de euros a dólares
function fromEuroToDollar(euro) {
    let dollar = euro * oneEuroIs.USD;
    return dollar;
}

// Función para convertir de yenes a libras
function fromYenToPound(yen) {
    let euro = yen / oneEuroIs.JPY;
    let pound = euro * oneEuroIs.GBP;
    return pound;
}

// Exportar las funciones para las pruebas
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound, oneEuroIs };