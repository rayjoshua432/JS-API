// Connection to database
const mySql = require('mysql')
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'js-db1',
}
const conn = mySql.createPool(dbConfig)

// Export Connection Function
module.exports = (dbQuery) => {
    return new Promise((resolve, reject) => {
        conn.getConnection((error, connection) => {
            if (error) {
                console.log(`An erroror occurred: ${error}`)
            } else {
                connection.query(dbQuery, (error, result) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(result)
                    }
                    connection.release()
                })
            }
        })
    })
}