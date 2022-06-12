// Import connection
const connection = require('../database/conn')

module.exports = async(id, user, pass) => {
    try {
        // const stmt = `UPDATE ` + `users` + `SET` + `username = '${user}', ` + `password = '${pass}'` + `WHERE ` + `id = ${id}`
        const stmt = `UPDATE users SET username = '${user}', password = '${pass}' WHERE id = ${id}`
        await connection(stmt)
        return true
    } catch (err) {
        return false
    }
}