import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
import { UserModel} from '../model/UserModel.js'
export const FriendModel = sequelize.define("friends", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
//   user_ID: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   friend_Id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
  
},
{
    timestamps :false
});

UserModel.hasMany(FriendModel, { foreignKey: "user_id" });
FriendModel.belongsTo(UserModel, { foreignKey: "user_id" });
UserModel.hasMany(FriendModel, { foreignKey: "friend_id" });
FriendModel.belongsTo(UserModel, { foreignKey: "friend_id" });