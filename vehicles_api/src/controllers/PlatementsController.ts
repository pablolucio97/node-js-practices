import {Request, Response} from 'express'
import {getRepository} from 'typeorm'

import Platement from '../models/Platement'

export default{
    async create(req: Request, res:Response){
        try {
            const {
                place
            } = req.body

            const data ={
                place
            }

            const newPlatement = getRepository(Platement)

            const addPlatement = await newPlatement.create(data)

            const addedPlatement = await  newPlatement.save(addPlatement)

            return res.json(addedPlatement)

        } catch (error) {
            console.log(error)
        }
    }
}