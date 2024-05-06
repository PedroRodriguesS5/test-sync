const knex = require("../connection/connection")

const getUser = async (req, res) => {
    try {
        const getUserData = await knex("users").where({ id: 1 })
        return res.status(200).json(getUserData)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = { getUser }