const mysql = require('mysql')
const config = require('../config')

const query = function (sql, values) {
    return new Promise((resolve, reject) => {
        let pool = mysql.createPool(config.db)
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = query
