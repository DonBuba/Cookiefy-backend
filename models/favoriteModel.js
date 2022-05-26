module.exports = (sequelize, DataTypes) => {
    const Favorito = sequelize.define("favorito", {
        idFavorito: {
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
        }
    })

    return Favorito
}