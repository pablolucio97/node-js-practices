import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'

import Repository from './Repository'

@Entity('pull_requests')

export default class Owner{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    pr_code: string

    @ManyToOne( () => Repository, repository => repository.prs)
    @JoinColumn({name: 'repository_id'})
    repository: Repository
}
