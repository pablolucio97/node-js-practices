import {Router} from 'express'

import OwnerController from '../src/controllers/OnwersController'

const routes = Router()

routes.post('/add-owner', OwnerController.create)
routes.get('/list-owners', OwnerController.list)

export default routes