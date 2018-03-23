
const Account = require('../models/account')

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
        result.data = res
        result.success = true
        ctx.body = result
    }
    async login (ctx) {
        const {
            email,
            password
        } = ctx.request.body
        let result = {
            success: false,
            message: '',
            data: null,
            code: ''
        }
        const res = await Account.Login(email, password)
        result.data = res
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
