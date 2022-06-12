// Import connection
const connection = require('../database/conn')

module.exports = async(usersInfo) => {
    try {
        const stmt = `SELECT ${usersInfo} FROM users`
        const result = await connection(stmt)
        return result
    } catch (err) {
        return []
    }
}