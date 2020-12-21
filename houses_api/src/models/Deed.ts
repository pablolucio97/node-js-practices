import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('deeds')

export default class Deed{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    deed_code: string
}