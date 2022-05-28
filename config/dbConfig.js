module.exports = {
    host: 'i54jns50s3z6gbjt.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    user : 'ffc8m086g9xv9i8e',
    password: 't1yl0va575k51ypw',
    db : 'igu5z5s1dfw931vv',
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