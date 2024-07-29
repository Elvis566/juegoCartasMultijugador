import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
import { UserModel} from './UserModel.js'
export const SugerenciaModel = sequelize.define("sugerencias", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
},
{
    timestamps :false
});

UserModel.hasMany(SugerenciaModel, { foreignKey: "user_id" });
SugerenciaModel.belongsTo(UserModel, { foreignKey: "user_id" });