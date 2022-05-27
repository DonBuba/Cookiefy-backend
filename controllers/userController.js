const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.js')
//Modelo Principal

const User = db.usuarios
const Comentario = db.comentarios
const Receta = db.recetas


//Definimos los métodos.

//1. Crear un usuario --Sign-Up-Registro
const addUser = async (req, res) => {
    let contrasenia = bcrypt.hashSync(req.body.contrasenia,authConfig.rounds)
    let data = {
        username: req.body.username,
        email: req.body.email,
        contrasenia: contrasenia,
        rol: req.body.rol ? req.body.rol : 'ROLE_USER'
    }

     await User.create(data).then( user => {
        let token = jwt.sign({user : user},authConfig.secret,{
            expiresIn: authConfig.expires
        } )
        res.status(200).json({
            user:user,
            token:token
        })

    }).catch(err => {
        res.status(500).send(err)
    })
    
}

//2. Obtener todos los usuarios
const getAllUsers = async (req, res )=>{
    
    let users = await User.findAll({})
    res.status(200).send(users)
}

//3. Obtener 1 solo usuario
const getOneUser = async (req, res )=>{
    
    let id = req.params.id
    let user = await User.findOne({where: {id : id}})
    console.log("user")
    res.status(200).send(user)
}

//4. Actualizar un usuario
const updateUser = async (req, res )=>{
    console.log(req)
    let id = req.params.id 
    let userAntiguo = await User.findOne({where: {id:id}})
    let user = await User.update(req.body, {where: {id : id}})
    res.status(200).send(`Se ha acutalizado el usuario ${userAntiguo.username} correctamente`)
}

//5. Borrar un usuario
const deleteUser = async (req, res )=>{
    
    let id = req.params.id
    let userAntiguo = await User.findOne({where: {id:id}})
    let user = await User.destroy({where: {id : id}})
    res.status(200).send(`Se ha eliminado el usuario ${userAntiguo.username} correctamente`)
}

//6. Login
const login = async ( req, res ) => {
    let {email, contrasenia} = req.body

    User.findOne({
        where:{email:email}
    }).then( user => {
        if(!user){
            res.stauts(404).send('El usuario introducido no se ha encontrado')
        }else{
            if(bcrypt.compareSync(contrasenia, user.contrasenia)){
                //devolvemos el tokken
                let token = jwt.sign({user : user},authConfig.secret,{
                    expiresIn: authConfig.expires
                } )
                res.status(200).send({
                    user:user,
                    token: token,
                    msg:"Has iniciado sesión correctamente!!"
                })
            }else{
                res.status(401).send('Contraseña interrecta')
            }
        }
    }).catch( err => {
        res.status(500).json(err)
    })
}

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    login
}