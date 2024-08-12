import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
import { TypeGameModel } from "./TypeGameModel.js";
export const CardModel = sequelize.define(
  "cards",
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

TypeGameModel.hasMany(CardModel, { foreignKey: "type_game_id" });
CardModel.belongsTo(TypeGameModel, { foreignKey: "type_game_id" });
