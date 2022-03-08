import {Sequelize} from 'sequelize'

const db = new Sequelize('curdatp', 'root', '',{
    host:'localhost',
    dialect:'mysql'  
})

export default db