module.exports = {
    host: 'i54jns50s3z6gbjt.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    user : 'fa8n87rbj0icolqz',
    password: 'phc1oz5e133xkw3j',
    db : 'ob0j6ish1t5z58b0',
    port:'3306',
    dialect:'mysql',
    pool : {
        max: 5,
        min : 0,
        acquire : 30000,
        idle: 10000
    }
    // host: 'localhost',
    // user : 'root',
    // password: '',
    // db : 'cookiefy',
    // port:'8080',
    // dialect:'mysql',
    // pool : {
    //     max: 5,
    //     min : 0,
    //     acquire : 30000,
    //     idle: 10000
    // }
}