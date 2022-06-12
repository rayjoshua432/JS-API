// Connection to database
const mySql = require('mysql')
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'js-db1',
}
const conn = mySql.createConnection(dbConfig)

// Export Connection Function
module.exports = (dbQuery) => {
    return new Promise((resolve, reject) => {
        conn.connect(error => {
            if (error) {
                console.log(`An error occurred`)
            } else {
                conn.query(dbQuery, (error, result) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(result)
                    }
                })
            }
        })
    })
}