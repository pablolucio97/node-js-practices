import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'


@Entity('owners')

export default class Owner{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    email: string
}
