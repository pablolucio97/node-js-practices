import express from 'express'
import multer from 'multer'

import multerConfig from './src/config/multer'

import ObjectController from './src/controllers/ObjectControllers'

const routes = express.Router()

const upload = multer(multerConfig)

const usingObjectController = new ObjectController()


//LIST OBJECTS
routes.get('/list-objects', usingObjectController.list)

//CREATE NEW OBJECT
routes.post('/create-object',  upload.single('img'), usingObjectController.create)
export default routes