import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from 'typeorm'

import Owner from './Owner'
import PullRequest from './PullRequest'

@Entity('repositories')

export default class Repository{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    link: string

    @Column()
    commits: number

    @Column()
    pull_requests: number

    @OneToOne( () => Owner) 
    @JoinColumn({name: 'owner_id'})
    owner_id: Owner
    
    @OneToMany( () => PullRequest, pullrequest => pullrequest.repository)
    prs: PullRequest[]

}