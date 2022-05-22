const db = require('../models')


//Para la subida de imágenes
const multer = require('multer')
const path = require('path')

//Modelo Principal

const User = db.usuarios
const Receta = db.recetas
const Comentario = db.comentarios
const Noticia = db.noticias
const Categoria  = db.categorias

//Definimos los métodos.

//1. Crear una receta
const addCategory = async (req, res) => {
    let data = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.file.path,
    }

    const categoria = await Categoria.create(data)
    res.status(200).send(categoria)
    console.log(data)
}

//2. Obtener todas las recetas
const getAllCategories = async (req, res )=>{
    
    let categorias = await Categoria.findAll({})
    res.status(200).send(categorias)
}

//3. Obtener 1 sola receta
const getOneCategory = async (req, res )=>{
    
    let id = req.params.id
    let categoria = await Categoria.findOne({where: {id : id}})
    res.status(200).send(categoria)
}

//4. Actualizar una receta
const updateCategory = async (req, res )=>{
    
    let id = req.params.id 
    let categoriaAntigua = await Categoria.findOne({where: {id:id}})
    let categoria = await Categoria.update(req.body, {where: {id : id}})
    res.status(200).send(`Se ha acutalizado la categoria "${categoriaAntigua.nombre}" correctamente`)
}

//5. Borrar una receta
const deleteCategory = async (req, res )=>{
    
    let id = req.params.id
    let categoriaAntigua = await Categoria.findOne({where: {id:id}})
    let categoria = await Categoria.destroy({where: {id : id}})
    res.status(200).send(`Se ha eliminado la categoria "${categoriaAntigua.nombre}" correctamente`)
}



//7. Controlador de subida de imagen
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../Images/recipes/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.toISOString() + path.extname(file.originalname))
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
}).single('imagen')



module.exports = {
    addCategory,
    getAllCategories,
    deleteCategory,
    getOneCategory,
    updateCategory,
    upload,
    storage
}