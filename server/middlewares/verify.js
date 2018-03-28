const jwt = require('jsonwebtoken')
const config = require('../config')

const verify = async function (ctx, next) {
    const auth = ctx.get('Authorization')
    try {
        await jwt.verify(auth, config.secret, (err, decoded) => {
            if (err) {
                ctx.body = ({ success: false, message: '无效的token.' })
            } else {
                // 如果验证通过，在req中写入解密结果
                ctx.state.decoded = decoded
            }
        })
    } catch (err) {
        ctx.throw(401, err)
    }
    await next()
}

module.exports = verify
