const db = require('../models')

//Para la subida de imágenes
const multer = require('multer')
const path = require('path')

//Modelo Principal

const User = db.usuarios
const Receta = db.recetas
const Comentario = db.comentarios
const Categoria  = db.categorias



//Definimos los métodos.

//1. Crear una receta
const addRecipe =  async (req, res) => {
    console.log(req.body)
    let data = {
        titulo: req.body.titulo,
        cuerpo: req.body.cuerpo,
        link: req.body.link,
        categoria: req.body.categoria,
        idCreador: req.body.idCreador ? req.body.idCreador : 1,
        descripcion: req.body.descripcion,
        dificultad: req.body.dificultad,
        tiempo: req.body.tiempo,
        comensales: req.body.comensales,
        imagen: req.body.file.path,
    }
    console.log(req.file)
    const receta = await Receta.create(data)
    res.status(200).send(receta)
    console.log(data)
}

//2. Obtener todas las recetas
const getAllRecipes = async (req, res )=>{
    
    let recetas = await Receta.findAll({})
    console.log(recetas);
    res.status(200).send(recetas)
}

//3. Obtener 1 sola receta
const getOneRecipe = async (req, res )=>{
    
    let id = req.params.id
    let receta = await Receta.findOne({where: {id : id}})
    res.status(200).send(receta)
}

//4. Actualizar una receta
const updateRecipe = async (req, res )=>{
    
    let id = req.params.id 
    let recetaAntigua = await Receta.findOne({where: {id:id}})
    let receta = await Receta.update(req.body, {where: {id : id}})
    res.status(200).send(`Se ha acutalizado la receta "${recetaAntigua.titulo}" correctamente`)
}

//5. Borrar una receta
const deleteRecipe = async (req, res )=>{
    
    let id = req.params.id
    let recetaAntigua = await Receta.findOne({where: {id:id}})
    let receta = await Receta.destroy({where: {id : id}})
    res.status(200).send(`Se ha eliminado la receta "${recetaAntigua.titulo}" correctamente`)
}


//6. Obtener las recetas de un usuario
const getRecipesByUser = async (req, res )=>{
    
    let id = req.params.id
    let receta = await Receta.findAll({include: [{
        model: User
    }],
    where: {idCreador : id}})
    res.status(200).send(receta)
}

//8. Ubtener las recetas por categoría

const getRecipesByCategory = async (req, res )=>{
    
    let id = req.params.id
    let receta = await Receta.findAll({include: [{
        model: Categoria
    }],
    where: {categoria : id}})
    res.status(200).send(receta)
}

//7. Controlador de subida de imagen
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../Images/recipes/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
})


module.exports = {
    addRecipe,
    getAllRecipes,
    getOneRecipe,
    updateRecipe,
    deleteRecipe,
    upload,
    storage,
    getRecipesByUser,
    getRecipesByCategory
}