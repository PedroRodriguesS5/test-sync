const knex = require("../connection/connection")

const updateUser = async (req, res) => {
    const { name, age, street, neighborhood, state, bio } = req.body

    try {
        if (!name && !age && !street && !neighborhood && !state && !bio) {
            return res.status(400).json({ message: "Pelo menos um dado deve ser atualizado" })
        }
        if (name && name.length > 30) {
            return res.status(400).json({ message: "Limite máximo de caracteres atingido! (30)" })
        }
        if (street && street.length > 50) {
            return res.status(400).json({ message: "Limite máximo de caracteres atingido! (50)" })
        }
        if (state && state.length > 2) {
            return res.status(400).json({ message: "Por favor insira no formato UF, (XX)" })
        }
        if (bio && bio.length > 200) {
            return res.status(400).json({ message: "Limite máximo de caracteres atingido! (200)" })
        }

        const updateUserRequest = await knex("users").update({
            name,
            age,
            street,
            neighborhood,
            state,
            bio
        }).where({ id: 1 })

        return res.status(200).json({ message: "Usuário atualizado com sucesso" })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = { updateUser }