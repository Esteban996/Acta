import { Sequelize } from "sequelize";
import Conn from "../Config/config.js";

const {DataTypes} = Sequelize;

const User = Conn.define('User', {
    fecha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cedula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cargo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      cin: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      sede: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      centro_de_costo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      Sequelize,
      modelName: 'User',
      timestamps: false,
});

export default User;