import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
import { UserModel} from './UserModel.js';
import { GameModel } from "./GameModel.js";
export const ChatModel = sequelize.define("chats", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  },
},
{
    timestamps :false
});

UserModel.hasMany(ChatModel, { foreignKey: "user_id" });
ChatModel.belongsTo(UserModel, { foreignKey: "user_id" });

GameModel.hasMany(ChatModel, { foreignKey: "game_id" });
ChatModel.belongsTo(GameModel, { foreignKey: "game_id" });