import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import PullRequest from '../models/PullRequest'

export default {
    async show(req: Request, res:Response){
      
            const {
                name,
                link,
                commits,
                pull_requests,
                owner_id
            } = req.body
    
            const data = {
                name,
                link,
                commits,
                pull_requests,
                owner_id
            }
    
        try{
            const newRepository = await getRepository(PullRequest)
    
            const addRepository = await newRepository.create(data)
    
            const addedRepository = await newRepository.save(addRepository)

            return res.json({"Success:" : "Data created"})

        } catch (error) {
            console.log(error)
        }

    }
}