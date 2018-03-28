const Router = require('koa-router')
const config = require('../config')
const AccountController = require('../controllers/account')
const verify = require('../middlewares/verify')

const api = 'account'

const router = new Router()

router.prefix(`/${config.baseApi}/${api}`)

router.post('/register', AccountController.register)
router.get('/login', AccountController.login)
router.get('/getuser', verify, AccountController.getUser)

module.exports = router
