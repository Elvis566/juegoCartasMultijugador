import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
export const TypeGameModel = sequelize.define(
  "typemodels",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
