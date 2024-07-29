import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
import { UserModel} from '../model/UserModel.js'
import { GameModel} from '../model/GameModel.js'
export const PlayersModel = sequelize.define("players", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
    timestamps :false
});

UserModel.hasMany(PlayersModel, { foreignKey: "user_id" });
PlayersModel.belongsTo(UserModel, { foreignKey: "user_id" });

GameModel.hasMany(PlayersModel, { foreignKey: "game_id" });
PlayersModel.belongsTo(GameModel, { foreignKey: "game_id" });