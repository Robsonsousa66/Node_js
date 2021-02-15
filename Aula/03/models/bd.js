const { Sequelize } = require('sequelize')
const Sequilize = require('sequelize')

const sequilize = new Sequelize('node', 'root' , '',{
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = {
  Sequelize: Sequelize,
  sequilize: sequilize
}