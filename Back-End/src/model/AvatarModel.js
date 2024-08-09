import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
export const AvatarModel = sequelize.define(
  "avatars",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url:{
      type: DataTypes.STRING,
      allowNull:false
    }
  },
  {
    timestamps: false,
  }
);

