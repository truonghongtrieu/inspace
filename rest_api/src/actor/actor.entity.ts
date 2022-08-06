import { MovieEntity } from 'src/movie/movie.entity'
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class ActorEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @CreateDateColumn()
    createdAt: String

    @UpdateDateColumn()
    updtedAt: String

    @ManyToMany(() => MovieEntity)
    @JoinTable()
    movieIds: number[]
}
