import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
import { UserModel} from '../model/UserModel.js'
export const FriendModel = sequelize.define("friends", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

},
{
    timestamps :false
});

UserModel.hasMany(FriendModel, {as: 'createFriends', foreignKey: "user_id" });
FriendModel.belongsTo(UserModel, {as: 'createFriends', foreignKey: "user_id" });
UserModel.hasMany(FriendModel, {as: 'userFriends', foreignKey: "friend_id" });
FriendModel.belongsTo(UserModel, {as: 'userFriends', foreignKey: "friend_id" });