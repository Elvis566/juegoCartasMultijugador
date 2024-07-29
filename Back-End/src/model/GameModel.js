import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
import { UserModel} from '../model/UserModel.js'
import { TypeGameModel } from '../model/TypeGameModel.js'
export const GameModel = sequelize.define("games", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  invite_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
  },
  
},
{
    timestamps :false
});

UserModel.hasMany(GameModel, { foreignKey: "user_create_id" });
GameModel.belongsTo(UserModel, { foreignKey: "user_create_id" });

TypeGameModel.hasMany(GameModel, { foreignKey: "type_game_id" });
GameModel.belongsTo(TypeGameModel, { foreignKey: "type_game_id" });