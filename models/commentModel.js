module.exports = (sequelize, DataTypes) => {
    const Comentario = sequelize.define("comentario", {
        idComentario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idReceta: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        contenido: {
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
    })

    return Comentario
}