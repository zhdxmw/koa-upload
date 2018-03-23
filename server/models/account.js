/* eslint-disable no-return-await */
const md5 = require('md5')
const query = require('../utils/query')

class Account {
    async getUser () {
        return await query(`select * from USER`)
    }
    async Register (email, name, password) {
        password = md5(password)
        console.log(`insert into USER VALUES(0, '${name}', '${password}', '${email}')`)
        return await query(`insert into USER VALUES(0, '${name}', '${password}', '${email}')`)
    }
    async Login (email, password) {
        password = md5(password)
        return await query(`select * from USER where email=${email} and password=${password}`)
    }
}

module.exports = new Account()
