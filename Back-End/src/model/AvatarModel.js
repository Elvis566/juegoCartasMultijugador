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
    avatar: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

