const dbConfig = require('../config/dbConfig.js')
const  {Sequelize, DataTypes} = require('sequelize')


const sequelize = new Sequelize (
    dbConfig.db,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect:dbConfig.dialect,
        operatorAliases: false,
        define: {
            timestamps: false
        },
        pool: {
            max : dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle : dbConfig.pool.idle
        }
    }
)

sequelize.authenticate().then( () => {
    console.log('connected...')
}).catch( err => {
    console.log('Error'+err)
})

const db = {}

db.Sequelize = Sequelize

db.sequelize = sequelize

db.sequelize.sync({ force : false}).then( () => {
    console.log('yes re-sync done!')
})

db.usuarios  = require('./userModel.js')(sequelize,DataTypes)
db.recetas  = require('./recipeModel.js')(sequelize,DataTypes)
db.comentarios = require('./commentModel.js')(sequelize,DataTypes)
db.noticias = require('./newsModel.js')(sequelize,DataTypes);
db.categorias = require('./categoryModel.js')(sequelize,DataTypes)
db.favoritos = require('./favoriteModel.js')(sequelize,DataTypes)

// RELACIONES

//Uusario a Recetas

db.usuarios.hasMany(db.recetas,{
    foreignKey:'id'
})
db.recetas.belongsTo(db.usuarios,{
    foreignKey:'idCreador'
})

//Usuarios y Recetas con Comentarios

// db.usuarios.hasMany(db.comentarios,{
//     foreignKey:'id'
    
// })

db.comentarios.belongsTo(db.usuarios,{
    foreignKey:'idUsuario',
})

// db.recetas.hasMany(db.comentarios,{
//     foreignKey:'id'
    
// })

db.comentarios.belongsTo(db.recetas,{
    foreignKey:'idReceta',
})

//Relación de noticas con usuarios

db.noticias.belongsTo(db.usuarios,{
    foreignKey:'idCreador'
})

//Reclación recetas con categorías

db.categorias.hasOne(db.recetas,{
    foreignKey:'id'
})

db.recetas.belongsTo(db.categorias,{
    foreignKey:'id'
})

//Relación de favoritos con Usuario y Recetas

db.favoritos.belongsTo(db.usuarios,{
    foreignKey:'idUsuario'
})

db.favoritos.belongsTo(db.recetas,{
    foreignKey:'idReceta'
})


module.exports = db