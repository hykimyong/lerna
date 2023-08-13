import { userInfo } from "os";
import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const User = sequelize.define('user',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    userName : DataTypes.STRING,
    thumbnameImageUrl : {
        type: DataTypes.STRING,
        allowNull : true
    }
});

export default User;