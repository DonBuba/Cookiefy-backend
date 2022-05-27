
//Inicializaciones

const express  = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

// const whitelist = ['https://cookiefy.vercel.app', 'https://cookiefy-back.herokuapp.com', 'https://heroku.com','https://vercel.com']

const corsOpts = {
  origin: '*',
  
  methods: [
      'GET',
      'POST',
  ],
  
  allowedHeaders: [
      'Content-Type',
  ],
};

//Middlewares 


app.use(bodyParser.json())

app.use(bodyParser.urlencoded( {extended : true}))


app.use(cors(corsOpts))
//routers

const router = require('../routes/mainRouter.js')

app.use('',router);

//tersting api 

app.get('/', (req, res ) => {
    res.json({message:'hello from api'})
})

//port 

const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})


//routers
