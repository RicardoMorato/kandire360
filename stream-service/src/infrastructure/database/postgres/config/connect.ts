import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    username: 'postgres',
    password: '123456',
    port: 5432,
    dialect: 'postgres',
    database: 'kandire360',
    host: 'vps44635.publiccloud.com.br'
})

export {
    sequelize
}