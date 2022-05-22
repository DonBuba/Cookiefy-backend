

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("usuario", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        contrasenia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rol: {
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

    return Usuario
}

 