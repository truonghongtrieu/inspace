import { ActorEntity } from 'src/actor/actor.entity'
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, JoinColumn, ManyToMany } from 'typeorm'

@Entity()
export class MovieEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @CreateDateColumn()
    createdAt: String

    @UpdateDateColumn()
    updtedAt: String
}
