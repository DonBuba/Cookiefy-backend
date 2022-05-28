module.exports = {
    host: 'i54jns50s3z6gbjt.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    user : 'j99d7h4zdx6bqqgw',
    password: 'iib35tmlq8jn9nxt',
    db : 'q5rbp8gjbvm9t0ew',
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