
//Inicializaciones

const express  = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

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
app.use(function (req, res, next) {

  var allowedDomains = ['https://cookiefy.vercel.app'];
  var origin = req.headers.origin;
  if(allowedDomains.indexOf(origin) > -1){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
})

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
