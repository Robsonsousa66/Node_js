const db = require('./bd')

const Pagamento = db.sequilize.define('pagamentos',{
  nome:{
    type: db.Sequelize.STRING
  },
  valor: {
    type: db.Sequelize.DOUBLE
  }
})
/*Cria a tabela
Pagamento.sync({force: true})
*/

module.exports = Pagamento