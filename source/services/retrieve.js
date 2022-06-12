// Import connection
const connection = require('../database/conn')

module.exports = async(arr) => {
    try {
        const stmt = `SELECT ` + `${arr} ` + `FROM` + `users`
        const result = await connection(stmt)
        return result
    } catch (err) {
        return []
    }
}