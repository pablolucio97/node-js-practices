import db from '../database/connection'
import {Request, Response} from 'express'

export default class UserController{
    async create(request: Request, response:Response){
            const {name, age } = request.body
            try{
            const insertedUser = await db('users').insert({name, age})

            const userId = insertedUser[0]

            return response.json({
                name,
                age,
                userId
            })
            } catch (error) {
                console.log(error)
            }
        }

        async index (request: Request, response: Response){
            try{
                const userList = await db('users').select('*')
                return response.json(userList)
            }catch(error){
                console.log(error)
            }
        }

        async alter(request: Request, response: Response){
            try{
                const {id} = request.params
                const {name} = request.body
                const newUser = await db('users').where('id', id).update({name})
                return response.json(newUser)
            }catch(error){
                console.log(error)
            }
        }

        async delete(request: Request, response: Response){
            try{
                const {id} = request.params
                const deletedUser = await db('users').where('id', id).delete()
                return response.json(deletedUser)
            }catch(error){
                console.log(error)
            }
        }
    }