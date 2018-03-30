const Router = require('koa-router')
const config = require('../config')
const verify = require('../middlewares/verify')
const UploadController = require('../controllers/upload')

const api = 'upload'
const router = new Router()

router.prefix(`/${config.baseApi}/${api}`)

router.post('/blob', verify, UploadController.blob)
router.post('/img', verify, UploadController.upload)

module.exports = router
