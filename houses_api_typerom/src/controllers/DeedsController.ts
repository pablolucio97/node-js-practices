import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import Deed from '../models/Deed'

export default {
    async listDeeds(req: Request, res: Response){

        const {
            deed_code
        } = req.body

        const data = {
            deed_code
        }


        try {
            const newHouse = await getRepository(Deed)
            const addHouse = await newHouse.create(data)
            const addedHouse = await newHouse.save(addHouse)

            return res.json({"Message" : "House added with success"})
        } catch (error) {
            console.log(error)
        }
    },
    async list(req: Request, res: Response){
        try {
            const list = await getRepository(Deed).find()
            return res.json(list)
        } catch (error) {
            console.log(error)
        }
}
}
