import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import House from '../models/House'

export default {
    async listHouses(req: Request, res: Response){

        const {
            number,
            location,
            deed_id
        } = req.body

        const data = {
            number,
            location,
            deed_id
        }


        try {
            const newHouse = await getRepository(House)
            const addHouse = await newHouse.create(data)
            const addedHouse = await newHouse.save(addHouse)

            return res.json({"Message" : "House added with success"})
        } catch (error) {
            console.log(error)
        }
    },
    async list(req: Request, res: Response){
        try {
            const list = await getRepository(House).find({
                relations: ['deed_id']
            })
            return res.json(list)
        } catch (error) {
            console.log(error)
        }
}
}
