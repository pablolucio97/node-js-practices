import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('vehicles')
export default class Vehicle{
    
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    brand: string

    @Column()
    model: string

    @Column()
    year: string

    @Column()
    engine: string
}




