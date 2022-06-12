// Import connection
const connection = require('../database/conn')

module.exports = async(user, pass) => {
    try {
        const stmt = `INSERT INTO ` + `users` + `VALUES ` + `(null, '${user}', md5('${pass}))`
        await connection(stmt)
        return true
    } catch (err) {
        return false
    }
}