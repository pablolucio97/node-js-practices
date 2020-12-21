import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('clients')

export default class Client{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string
    
    @Column()
    age: number
}