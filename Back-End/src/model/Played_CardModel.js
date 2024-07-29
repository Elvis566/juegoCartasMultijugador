import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
import { CardModel} from './CardModel.js'
import { GameModel } from './GameModel.js'
export const PlayerGameModel = sequelize.define("playergames", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
},
{
    timestamps :false
});

CardModel.hasMany(PlayerGameModel, { foreignKey: "card_id" });
PlayerGameModel.belongsTo(CardModel, { foreignKey: "card_id" });

GameModel.hasMany(PlayerGameModel, { foreignKey: "game_id" });
PlayerGameModel.belongsTo(GameModel, { foreignKey: "game_id" });