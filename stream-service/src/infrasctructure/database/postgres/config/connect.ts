import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    username: '',
    password: '',
    port: 5432,
    dialect: 'postgres',
    database: '',
    host: ''
})

export {
    sequelize
}