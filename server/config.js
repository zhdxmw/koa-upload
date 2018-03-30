
const config = {
    db: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'sql123',
        database: 'koa_file',
        multipleStatements: true
    },
    port: 3033,
    baseApi: 'api/up',
    secret: 'token'
}

module.exports = config
