import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
import { TypesUser} from '../model/TypeModel.js'
export const UserModel = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  apodo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar: {
    type: DataTypes.BLOB('long'),
    allowNull: false
  },
},
{
    timestamps :false
});

TypesUser.hasMany(UserModel, { foreignKey: "typeusers_id" });
UserModel.belongsTo(TypesUser, { foreignKey: "typeusers_id" });