import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
import { CardModel } from "./CardModel.js";
export const PenitenciaModel = sequelize.define(
  "penitencias",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    penitencia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

CardModel.hasMany(PenitenciaModel, { foreignKey: "card_id" });
PenitenciaModel.belongsTo(CardModel, { foreignKey: "card_id" });
