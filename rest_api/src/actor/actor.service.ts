import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { MovieEntity } from 'src/movie/movie.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';;
import { ActorEntity } from './actor.entity'

@Injectable()
export class ActorService {
    constructor(
        @InjectRepository(ActorEntity)
        private actorRepository: Repository<ActorEntity>
    ) { }

    async findAll(): Promise<ActorEntity[]> {
        return await this.actorRepository.find();
    }

    async findById(actorId: number): Promise<ActorEntity[]> {
        return await this.actorRepository.findBy({ id: actorId });
    }

    async create(entity: ActorEntity, movieIds?: number[]): Promise<ActorEntity> {
        const actor = new ActorEntity();
        actor.firstName = entity.firstName;
        actor.lastName = entity.lastName;
        if (movieIds) {
            actor.movieIds = movieIds;
        }

        return await this.actorRepository.save(actor);
    }

    async update(id: number, entity: ActorEntity): Promise<UpdateResult> {
        return await this.actorRepository.update(id, entity);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.actorRepository.delete(id);
    }
}
