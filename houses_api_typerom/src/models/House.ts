import {Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn} from 'typeorm'
import Deed from './Deed'

@Entity('houses')

export default class House{
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column()
    number: number

    @Column()
    location: string

    @OneToOne(() => Deed)

    @JoinColumn({name: 'deed_id'})
    deed_id: Deed
}