
const Account = require('../models/account')
const jwt = require('jsonwebtoken')
const config = require('../config')

class AccountController {
    async getUser (ctx) {
        // let formData = ctx.request.body
        let result = {
            success: false,
            message: '',
            data: null,
            code: ''
        }
        const res = await Account.getUser()
        // console.log(ctx.state.decoded)
        result.data = res
        result.success = true
        ctx.body = result.data
    }
    async login (ctx) {
        const {
            email,
            password
        } = ctx.request.query
        let result = {
            success: false,
            message: '',
            data: null,
            code: ''
        }
        let token = jwt.sign({email, password}, config.secret, {
            expiresIn: 60 * 60 * 24
        })
        const res = await Account.Login(email, password)
        result.data = {
            id: res[0].id,
            email: res[0].email,
            user: res[0].user,
            token: token
        }
        result.success = true
        ctx.body = result
    }
    async register (ctx) {
        const {
            email,
            name,
            password
        } = ctx.request.body
        let result = {
            success: false,
            message: '',
            data: null,
            code: ''
        }
        const res = await Account.Register(email, name, password)
        console.log(res)
        result.data = res
        result.success = true
        ctx.body = result
    }
}

module.exports = new AccountController()
