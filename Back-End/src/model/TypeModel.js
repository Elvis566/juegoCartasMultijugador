import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
export const TypesUser = sequelize.define(
  "typesuser",
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
  },
  {
    timestamps: false,
  }
);
