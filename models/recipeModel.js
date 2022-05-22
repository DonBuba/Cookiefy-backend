

module.exports = (sequelize, DataTypes) => {
    const Receta = sequelize.define("receta", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cuerpo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        categoria: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idCreador: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ingredientes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dificultad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tiempo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comensales: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at : {
            type: "TIMESTAMP",
            defaultValue: sequelize.literal(
              "CURRENT_TIMESTAMP"
            ),
            allowNull: false,
        },
        updated_at: {
            type: "TIMESTAMP",
            defaultValue: sequelize.literal(
              "CURRENT_TIMESTAMP"
            ),
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        freezeTableName:true,
        tableName:'recetas'
    })
    
    return Receta
}