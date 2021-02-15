var http = require('http')

http.createServer(function (req,res) {
  res.end("Gerenciador financeiro");
}).listen(8080)