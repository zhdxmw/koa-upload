const Koa = require('koa')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body')
const config = require('./config')
const routing = require('./routes')

const app = new Koa()

app
    // .use(cors({    // koa-cors   1  kao v3 将不支持其 写法
    //     maxAge: 7 * 24 * 60 * 60,
    //     credentials: true,
    //     methods: 'GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE',
    //     headers: 'Content-Type, Accept, Authorization'
    // }))
    .use(cors({
        origin: function (ctx) {
            if (ctx.url === '/test') {
                return false
            }
            return '*'
        },
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'DELETE'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept']
    }))
    .use(logger())
    .use(koaBody({multipart: true}))
    .use(bodyParser())
routing(app)

app.listen(config.port, () => console.log(`✅  The server is running at http://localhost:${config.port}/`))
