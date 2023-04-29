import { Sequelize } from "sequelize";


const dbConn = new Sequelize('mysql://root:1234@localhost:3306/usuarios')

export default dbConn; 