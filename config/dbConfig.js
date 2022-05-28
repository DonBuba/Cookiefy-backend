module.exports = {
    host: 'i54jns50s3z6gbjt.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    user : 'gy8orda7c56b5osx',
    password: 'uvood6aceqe3bbv8',
    db : 'i56yl7ay23w8rl8n',
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