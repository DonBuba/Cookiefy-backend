module.exports = (sequelize, DataTypes) => {
    const Favorito = sequelize.define("favorito", {
        idFavorito: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        idUsuario: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        idReceta: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    return Favorito
}