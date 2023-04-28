import { Sequelize } from "sequelize";


const dbConn = new Sequelize('mysql://root:24Miller@localhost:3306/usuarios')

export default dbConn; 