
//Inicializaciones

const express  = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

const whitelist = ['https://cookiefy.vercel.app', 'https://cookiefy-back.herokuapp.com']

const corsOpts = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  
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
