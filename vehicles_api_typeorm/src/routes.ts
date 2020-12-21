import {Router} from 'express'

import VehiclesController from './controllers/VehiclesController'
import ClientsController from './controllers/ClientsController'
import PlatementsController from './controllers/PlatementsController'


const routes = Router()

//VEHICLES METHODS
routes.post('/add', VehiclesController.create)
routes.get('/list', VehiclesController.list)
routes.get('/find/:id', VehiclesController.findOne)
routes.patch('/patch/:id', VehiclesController.updateData)
routes.put('/update/:id', VehiclesController.updateVehicle)
routes.delete('/delete/:id', VehiclesController.delete)

//CLIENTS METHODS
routes.post('/add-client', ClientsController.create)
routes.get('/list-clients', ClientsController.list)
routes.get('/find-client/:id', ClientsController.findOne)

//PLATEMENTS METHODS
routes.post('/add-platement', PlatementsController.create)

export default routes