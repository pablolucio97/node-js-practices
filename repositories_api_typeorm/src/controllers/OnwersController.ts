import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import Owner from '../models/Owner'

export default {
    async create(req: Request, res: Response){
        const {
            name,
            email
        } = req.body

        const data = {
            name,
            email
        }

        try {
            const newOwner = await getRepository(Owner)

            const addOwner = await newOwner.create(data)

            const addedOwner = await newOwner.save(addOwner)

            return res.json({"Success:" : "Owner added."})

        } catch (error) {
            console.log(error)
        }

    },
    async list(req: Request, res: Response){
        try {
            const listOwners = await getRepository(Owner).find()
            return res.json(listOwners)
        } catch (error) {
            console.log(error)
        }
    }
}
