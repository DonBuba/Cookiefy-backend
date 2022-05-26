module.exports = (sequelize, DataTypes) => {
    const Noticia = sequelize.define("noticia", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        cuerpo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idCreador: {
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
        }
    }, {
        freezeTableName:true,
        tableName:'noticias'
    })

    return Noticia
}

 