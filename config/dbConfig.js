module.exports = {
    host: 'localhost',
    user : 'root',
    password: '',
    db : 'cookiefy',
    dialect:'mysql',
    pool : {
        max: 5,
        min : 0,
        acquire : 30000,
        idle: 10000
    }}