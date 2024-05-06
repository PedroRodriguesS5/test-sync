const express = require("express")
const { getUser } = require("../controllers/getUserController")
const { updateUser } = require("../controllers/updateUserController")

const routes = express()

routes.get("/user", getUser)

routes.patch("/user/update", updateUser)

module.exports = routes