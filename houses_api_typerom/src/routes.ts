import {Router} from 'express'

import HousesController from './controllers/HousesController'
import DeedsController from './controllers/DeedsController'

const routes = Router()

routes.post('/add-house', HousesController.listHouses)
routes.post('/add-deed', DeedsController.listDeeds)
routes.get('/list-houses', HousesController.list)
routes.get('/list-deeds', DeedsController.list)

export default routes