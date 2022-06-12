// Import connection
const connection = require('../database/conn')

module.exports = async(id) => {
    try {
        const stmt = `DELETE FROM` + `users` + `WHERE` + ` id = ${id}`
        await connection(stmt)
        return true
    } catch (err) {
        return false
    }
}