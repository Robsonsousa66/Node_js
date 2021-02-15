const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser')
const moment = require('moment')
const Pagamento = require('./models/Pagamento')

app.engine('handlebars', handlebars({defaultLayout: 'main',helpers: {
  formatDate: (date) =>{
    return moment(date).format('DD/MM/YYYY')
  }
}}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

//Rotas
app.get('/pagamento', function(req, res){
    Pagamento.findAll({
      order: [
        ['id', 'ASC']
      ]
    }).then(function(pagamentos){
      res.render('pagamento', {pagamentos: pagamentos});
    })
    
});

app.get('/cad-pagamento', function(req, res){
    res.render('cad-pagamento');
});

app.post('/add-pagamento', function(req,res){
  /*res.send("Nome: "+ req.body.nome + "</br> Valor: "+ req.body.valor + "<br>")*/
  Pagamento.create({
    nome: req.body.nome,
    valor: req.body.valor
  }).then(function(){
    //res.send("Pagamento cadastrado com Sucesso")
    res.redirect('/pagamento')
  }).catch(function(err){
    res.send("Erro ao cadastrar pagamento : " + err)
  })
})

app.get('/del-pagamento/:id', function(req, res){
  Pagamento.destroy({
    where: {'id': req.params.id}
  }).then(function(){
    res.send("Pagamento Apagado com Sucesso")
  }).catch(function(err){
    res.send("ERRO ao apagar : " + err)
  })
});

app.listen(8080);