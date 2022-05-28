module.exports = {
    host: 'i54jns50s3z6gbjt.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    user : 'hrfvzzwrrnzbzei8',
    password: 'wo21imi8jcd59ldr',
    db : 'dtezvlvxmrjqk796',
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