const db = require('../models')

//Modelo Principal

const User = db.usuarios
const Receta = db.recetas
const Comentario = db.comentarios
const Noticia = db.noticias
const Categoria  = db.categorias
const Favorito = db.favoritos

//Definimos los métodos.

//1. Crear una receta
const addFavorite = async (req, res) => {
    let data = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
       //imagen: req.file.path,
    }

    const favorito = await Favorito.create(data)
    res.status(200).send(favorito)
    console.log(data)
}

//2. Obtener todas las recetas
const getAllFavorites = async (req, res )=>{
    
    let favorito = await Favorito.findAll({})
    console.log(noticias);
    res.status(200).send(favorito)
}

//3. Borrar una receta
const deleteFavorite = async (req, res )=>{
    
    let id = req.params.id
    let favorito = await Favorito.destroy({where: {id : id}})
    res.status(200).send(`Se ha eliminado el favorito correctamente`)
}

//4. Obtener favoritos por Usuario
const getFavoritesByUser = async (req, res )=>{
    
    let id = req.params.id
    let favorito = await Comentario.findAll({include: [{
        model: User
    }], 
    where: {idUsuario : id}})
    res.status(200).send(favorito)
}



module.exports = {
    addFavorite,
    getAllFavorites,
    deleteFavorite,
    getFavoritesByUser
}