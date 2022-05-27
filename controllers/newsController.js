const db = require('../models')

//Modelo Principal

const User = db.usuarios
const Receta = db.recetas
const Comentario = db.comentarios
const Noticia = db.noticias
const Categoria  = db.categorias


//Definimos los métodos.

//1. Crear una receta
const addNew = async (req, res) => {
    let data = {
        titulo: req.body.titulo,
        cuerpo: req.body.cuerpo,
        link: req.body.link,
        idCreador: req.body.idCreador ? req.body.idCreador : 1
    }

    const noticia = await Noticia.create(data)
    res.status(200).send(noticia)
    console.log(data)
}

//2. Obtener todas las recetas
const getAllNews = async (req, res )=>{
    
    let noticias = await Noticia.findAll({})
    console.log(noticias);
    res.status(200).send(noticias)
}

//3. Obtener 1 sola receta
const getOneNew = async (req, res )=>{
    
    let id = req.params.id
    let noticia = await Noticia.findOne({where: {id : id}})
    res.status(200).send(noticia)
}

//4. Actualizar una receta
const updateNew = async (req, res )=>{
    
    let id = req.params.id 
    let noticiaAntigua = await Noticia.findOne({where: {id:id}})
    let noticia = await Noticia.update(req.body, {where: {id : id}})
    res.status(200).json(`Se ha acutalizado la noticia "${noticiaAntigua.titulo}" correctamente`)
}

//5. Borrar una receta
const deleteNew = async (req, res )=>{
    
    let id = req.params.id
    let noticiaAntigua = await Noticia.findOne({where: {id:id}})
    let noticia = await Noticia.destroy({where: {id : id}})
    res.status(200).json(`Se ha eliminado la noticia "${noticiaAntigua.titulo}" correctamente`)
}


//6. Obtener las recetas de un usuario
const getNewsByUser = async (req, res )=>{
    
    let id = req.params.id
    let noticia = await Noticia.findAll({include: [{
        model: User
    }],
    where: {idCreador : id}})
    res.status(200).send(noticia)
}

module.exports = {
    addNew,
    getAllNews,
    getOneNew,
    updateNew,
    deleteNew,
    getNewsByUser
}