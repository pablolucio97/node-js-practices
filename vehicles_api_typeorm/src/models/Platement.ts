import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('platement')

export default class Platement{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    place: string

    @Column({type: "datetime", default: () => "CURRENT_TIMESTAMP"})
    done_at: Date

}