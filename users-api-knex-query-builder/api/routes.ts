import express from 'express'
import UserController from './src/controllers/UserController'

const routes = express.Router()

const usingUserController = new UserController()

routes.post('/create-users', usingUserController.create)

routes.get('/list-users', usingUserController.index)

routes.put('/alter-users/:id', usingUserController.alter)

routes.delete('/delete-users/:id', usingUserController.delete)

export default routes