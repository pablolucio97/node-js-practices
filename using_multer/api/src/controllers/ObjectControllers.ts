import express, {Request, Response} from 'express'
import db from '../database/connection'

export default class ObjectController{
    //LIST OBJECTS
    async list (req: Request, res: Response){
        try{
            const result = await db('objects')
            return res.json(result)
        }catch(error){
            console.log(error)
        }
    }

    async create (req: Request, res: Response){
        try{
        const {object} = req.body
        const img = req.file.filename
        const result = await db('objects').insert({object, img})
        const objectId = result[0]
        return res.status(200).json({
            object,
             img,
             objectId
        })
        }catch(error){
            console.log(error)
        }
    }
}