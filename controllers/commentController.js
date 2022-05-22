const db = require('../models')

//Modelo Principal

const User = db.usuarios
const Receta = db.recetas
const Comentario = db.comentarios
const Categoria  = db.categorias


//Definimos los métodos.

//1. Crear una receta
const addComment = async (req, res) => {
    let data = {
        idUsuario:req.body.idUsuario,
        idReceta:req.body.idReceta,
        contenido:req.body.contenido
    }

    const comment = await Comentario.create(data)
    res.status(200).send(comment)
    console.log(data)
}

//2. Obtener todas las recetas
const getAllComments = async (req, res )=>{
    
    let comment = await Comentario.findAll({})
    res.status(200).send(comment)
}

//3. Obtener 1 sola receta
const getOneCommet = async (req, res )=>{
    
    let id = req.params.id
    let comment = await Comentario.findOne({where: {idComentario : id}})
    res.status(200).send(comment)
}

//4. Actualizar una receta
const updateComment = async (req, res )=>{
    
    let id = req.params.id 
    let comment = await Comentario.update(req.body, {where: {idComentario : id}})
    res.status(200).send(`Se ha actualizado el comentario correctamente`)
}

//5. Borrar una receta
const deleteComment = async (req, res )=>{
    
    let id = req.params.id
    let comment = await Comentario.destroy({where: {idComentario : id}})
    res.status(200).send(`Se ha eliminado el comentario correctamente`)
}


//6. Obtener las recetas de un usuario
const getCommentByUser = async (req, res )=>{
    
    let id = req.params.id
    let comment = await Comentario.findAll({include: [{
        model: User
    }], 
    where: {idUsuario : id}})
    res.status(200).send(comment)
}

//7. Obtener comentarios de una receta 
const getCommentByRecipe = async (req, res )=>{
    
    let id = req.params.id
    let comment = await Comentario.findAll({include: [{
        model: Receta
    }],
    where: {idReceta : id}})
    res.status(200).send(comment)
}



module.exports = {
   addComment,
   getAllComments,
   getOneCommet,
   getCommentByUser,
   getCommentByRecipe,
   deleteComment,
   updateComment
}