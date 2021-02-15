const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Rotas
app.get('/pagamento', function(req, res){
    res.render('pagamento');
});

app.get('/add-pagamento', function(req, res){
    res.render('add-pagamento');
});

app.listen(8080);