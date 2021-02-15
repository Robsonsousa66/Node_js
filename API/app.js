const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require("./models/Artigo")
const Artigo = mongoose.model('artigo')


const app = express()

app.use((req,res,next)=>{
  app.use(cors())
  next()
})



app.use(express.json())

mongoose.connect('mongodb://localhost/node',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("Conexão Com o Mongo Com Sucesso")
}).catch((err)=>{
  console.log("ERRO ao conectar ao MongoDB :"+ err)
})
//Listar
app.get("/", (req,res)=>{
  Artigo.find({}).then((artigo)=>{
    return res.json(artigo)
  }).catch((err)=>{
    return res.status(400).json({
      error: true,
      message: "Nenhum artigo encontrado"
    })
  })
})
//Buscar usuario
app.get('/artigo/:id',(req,res)=>{
  console.log(req.params.id)
  Artigo.findOne({_id:req.params.id}).then((artigo)=>{
    return res.json(artigo)
  }).catch((err)=>{
    return res.status(400).json({
      error: true,
      message: "Nenhum artigo encontrado"
    })
  })
})

//Cadastrar
app.post('/artigo', (req,res)=>{
  const artigo = Artigo.create(req.body, (err)=>{
    if(err){
      return res.status(400).json({
        error: true,
        message: "ERROR : Artigo não foi cadastrado"
      })
    }
    return res.status(400).json({
      error: false,
      message: "Artigo cadastrado"
    })
  })
})
//editar
app.put('/artigo/:id', (req,res)=>{
  const artigo = Artigo.updateOne({_id: req.params.id},req.body, (erro)=>{
    if(erro){
      return res.status(400).json({
        error: true,
        message: "Error: Artigo não foi editado"
      })
    }
    return res.status(400).json({
      error: false,
      message: "Artigo foi editado"
    })
  })
})

app.delete('/artigo/:id',(req,res)=>{
  const artigo = Artigo.deleteOne({_id: req.params.id},(err)=>{
    if(err){
      return res.status(400).json({
        error: true,
        message: "ERRO: Falha ao excluir"
      })
    }
    return res.status(400).json({
      error: false,
      message: "Excluir com sucesso"
    })
  })
})

app.listen(8080, ()=>{
  console.log("Servidor Iniciado na porta 8080: http://localhost:8080/")
})