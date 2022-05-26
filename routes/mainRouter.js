const userController = require('../controllers/userController.js')
const recipeController = require('../controllers/recipeController.js')
const commentController = require('../controllers/commentController.js')
const newsController = require('../controllers/newsController.js')
const categoryController = require('../controllers/categoryController.js')
const favoriteController = require('../controllers/favoriteController.js')

const router = require('express').Router()


// Router de Usuarios
router.post('/login', userController.login)

router.post('/addUser', userController.addUser)

router.get('/getAllUsers', userController.getAllUsers)

router.get('/getOneUser/:id', userController.getOneUser)

router.put('/updateUser/:id', userController.updateUser)

router.delete('/deleteUser/:id', userController.deleteUser)

module.exports = router


//Router de Recetas

router.post('/addRecipe', recipeController.addRecipe)

router.get('/getAllRecipes', recipeController.getAllRecipes)

router.get('/getOneRecipe/:id', recipeController.getOneRecipe)

router.get('/getRecipeByName/:titulo', recipeController.getRecipeByName)

router.get('/getRecipeByUser/:id', recipeController.getRecipesByUser)

router.get('/getRecipeByCategory/:id', recipeController.getRecipesByCategory)

router.put('/updateRecipe/:id', recipeController.updateRecipe)

router.delete('/deleteRecipe/:id', recipeController.deleteRecipe)


//Router de comentarios

router.post('/addComment', commentController.addComment)

router.get('/getAllComments', commentController.getAllComments)

router.get('/getOneComment/:id', commentController.getOneCommet)

router.get('/getCommentByUser/:id', commentController.getCommentByUser)

router.get('/getCommentByRecipe/:id', commentController.getCommentByRecipe)

router.put('/updateComment/:id', commentController.updateComment)

router.delete('/deleteComment/:id', commentController.deleteComment)


//Router de noticias

router.post('/addNew', newsController.addNew)

router.get('/getAllNews',newsController.getAllNews)

router.get('/getOneNew/:id',newsController.getOneNew)

router.put('/updateNew/:id',newsController.updateNew)

router.delete('/deleteNew/:id',newsController.deleteNew)

router.get('/getNewsByUser/:id',newsController.getNewsByUser)


//Router de categorías

router.post('/addCategory', categoryController.addCategory)

router.get('/getAllCategories',categoryController.getAllCategories)

router.get('/getOneCategory/:id',categoryController.getOneCategory)

router.put('/updateCategory/:id',categoryController.updateCategory)

router.delete('/deleteCategory/:id',categoryController.deleteCategory)


//Router de favoritos


router.post('/addFavorite', favoriteController.addFavorite)

router.get('/getAllFavorites',favoriteController.getAllFavorites)

router.get('/getFavoritesByUser/:id',favoriteController.getFavoritesByUser)

router.delete('/deleteFavorite/:id',favoriteController.deleteFavorite)
