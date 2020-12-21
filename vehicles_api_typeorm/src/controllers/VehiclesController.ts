import {Request, Response} from 'express'
import {getRepository, UpdateDateColumn} from 'typeorm'

import Vehicles from '../models/Vehicles'

export default{
    async create(req: Request, res: Response){
        try {
            const {
                brand,
                model,
                year,
                engine
            } = req.body
    
            const data = {
                brand,
                model,
                year,
                engine
            }
    
            const vehicleRepository = getRepository(Vehicles)

            const newVehicle = vehicleRepository.create(data)

            const addedVehicle = await vehicleRepository.save(newVehicle)

            return res.status(201).json(addedVehicle)
        } catch (error) {
            console.log(error)
            return res.json({'Error:' : "Can not add new vehicle."})
        }
        
    },
    async list(req: Request, res: Response) {
        try {
            const returnedCars = await getRepository(Vehicles).find()
            return res.status(201).json(returnedCars)
        } catch (error) {
            console.log(error)
            return res.json({'Error:' : "Can not list vehicles."})
        }
    },
    async findOne(req: Request, res:Response){
        try {
            const {id} = req.params

            const returnedCar = await getRepository(Vehicles).findOne(id)
            return res.status(200).json(returnedCar)
        } catch (error) {
            console.log(error)
            return res.json({"Error" : "Vehicle not found."})
        }
    },
    async updateData(req: Request, res:Response){
        try {
            const {id} = req.params

            const {
                year,
                engine
            } = req.body

            const data = {
                year,
                engine
            }

            const updateData = await getRepository(Vehicles).update(id, data)
       
            return res.json({"Success:" : "Data has updated."})
        } catch (error) {
            console.log(error)
            return res.json({"Error:" : "Error to update data."})
        }
    },
    async updateVehicle(req: Request, res:Response){
        try {
            const {id} = req.params

            const{
                brand,
                model,
                year,
                engine
            } = req.body

            const data = {
                brand,
                model,
                year,
                engine
            }

            const updateVehicle = await getRepository(Vehicles).update(id, data)

            return res.json({"Success:" : "Data has updated."})
            
        } catch (error) {
            console.log(error)
            return res.json({"Error: " : "Can not update vehicle."})
        }
    },
    async delete(req: Request, res:Response){
        try {
            const {id} = req.params

            const deletedVehicle = await getRepository(Vehicles).delete(id)
            return [res.json({"Success" : "Vehicle has deleted."}), res.json(deletedVehicle)]
            
        } catch (error) {
            console.log(error)
            return res.json({"Error: " : "Can not delete the vehicle"})
        }
    }

}