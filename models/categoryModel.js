module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define("categoria", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imagen: {
            type: DataTypes.STRING,
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
    },{
        freezeTableName:true,
        tableName:'categorias'
    })

    return Categoria
}