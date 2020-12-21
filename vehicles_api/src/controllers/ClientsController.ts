import {Request, Response} from 'express'
import { List } from 'material-ui'
import { getRepository } from 'typeorm'
import Client from '../models/Clients'

export default{
    async create(req: Request, res: Response){
        try {
            const {
                name,
                age
            } = req.body

            const data = {
                name,
                age
            }

            const addClient = getRepository(Client)

            const newClient = await addClient.create(data)

            const adddedClient = addClient.save(newClient)

            return res.status(201).json({"Success:" : "The client has added."})

        } catch (error) {
            console.log(error)
        }
    },
    async list(req: Request, res:Response){
        try {
            const listClients = await getRepository(Client).find()
            return res.json(listClients)

        } catch (error) {
            console.log(error)
        }
    },
    async findOne(req: Request, res:Response){
        try {
            const {id} = req.params

            const listClients = await getRepository(Client).findOne(id)
            if(listClients){
                return res.json(listClients)
            }else{
                return res.status(404).json({"Error:" : "The client do not exists."})
            }

        } catch (error) {
            console.log(error)
        }
    }
}
