const {DataTypes} = require("sequelize");

module.exports = (sequelize)=>{
    sequelize.define('activity',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty:{
            type: DataTypes.INTEGER,
            validate:{
                min:1,
                max:5,
            },
        },
        duration:{
            type: DataTypes.INTEGER,
            validate:{
                min:1,
            }
        },
        season:{
            type: DataTypes.STRING,
            validate:{
                isIn:[['SUMMER','FALL','WINTER','SPRING']]
            }
        }
    })
}