const express = require("express")

const app = express();

//Conexao BD Mysql

const mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node'
})

connection.connect(function(err) {
  if(err){
    console.error('Erro ao Realizar a conexão: '+ err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})

connection.query("DELETE FROM users WHERE id = 13", function(err,result){
  if(!err){
    console.log("Usuario Excluido com Sucesso")
  }else{
    console.log("Erro ao Excluir!")
  }
})



app.get("/", function (req,res) {
  res.sendFile(__dirname + "/src/index.html")

})

app.get("/empresa", function (req,res) {
  res.sendFile(__dirname + "/src/empresa.html")
})

app.get("/blog", function (req,res) {
  res.send("Pagina Blog")
})

app.get("/contato", function (req,res) {
  res.send("Pagina de Contato")
})

app.listen(8080)

/*const Sequelize = require('sequelize')

const sequelize = new Sequelize('node', 'root', '',{
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate().then(function(){
  console.log("Conexão Realizada com Sucesso")
}).catch(function(err){
  console.log("Erro ao conectar ao BD: " + err)
})

const Pagamento = sequelize.define('pagamentos',{
  nome: {
    type: Sequelize.STRING,
  },
  valor: {
    type: Sequelize.DOUBLE
  }
})
//Criar tabela no Sequelize
//User.sync({force: true})

/*Pagamento.create({
  nome: "Energia",
  valor: 220
}) */