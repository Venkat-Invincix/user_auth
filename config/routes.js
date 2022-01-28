const express = require('express')
const userController = require('../app/controllers/userController')
const { authenticateUser } = require('../app/middlewares/authentication')
const routes = express.Router()

routes.post('/api/user/register', userController.register)
routes.get('/api/user/alluser', userController.allUser)
routes.post('/api/user/login', userController.login)
routes.get('/api/user/account', authenticateUser, userController.account)

module.exports = routes;