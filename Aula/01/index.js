console.log("Gerenciador financeiro !")

var client = "Robson de Sousa"

console.log("Cliente " + client)

var valProduct = 100
var valDiscount = 37

var discountFunc = require("./modules/callDiscount");

var finalValue = discountFunc(valProduct, valDiscount)

console.log("Valor Final do Produto " + finalValue)
