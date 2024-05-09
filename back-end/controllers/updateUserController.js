const knex = require("../connection/connection")

const updateUser = async (req, res) => {
    const { name, age, street, neighborhood, state, bio } = req.body;

    try {
        const getInfoUser = await knex("users").select().where({ id: 1 }).first();
        const updates = {
            name,
            age,
            street,
            neighborhood,
            state,
            bio
        };

        if (!name) updates.name = getInfoUser.name;
        if (!age) updates.age = getInfoUser.age;
        if (!street) updates.street = getInfoUser.street;
        if (!neighborhood) updates.neighborhood = getInfoUser.neighborhood;
        if (!state) updates.state = getInfoUser.state;
        if (!bio) updates.bio = getInfoUser.bio;

        await knex("users").update(updates).where({ id: 1 });

        return res.status(204).json({ message: "Usuário atualizado com sucesso" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { updateUser }