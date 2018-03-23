const Koa = require('koa')
const logger = require('koa-logger')
const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const routing = require('./routes')

const app = new Koa()

app
    .use(cors({
        maxAge: 7 * 24 * 60 * 60,
        credentials: true,
        methods: 'GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE',
        headers: 'Content-Type, Accept, Authorization'
    }))
    .use(logger())
    .use(bodyParser())

routing(app)

app.listen(config.port, () => console.log(`✅  The server is running at http://localhost:${config.port}/`))
