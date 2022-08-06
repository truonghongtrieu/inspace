import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';;
import { MovieEntity } from './movie.entity'

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(MovieEntity)
        private movieRepository: Repository<MovieEntity>
    ) { }

    async findAll(): Promise<MovieEntity[]> {
        return await this.movieRepository.find();
    }

    async findById(id: number): Promise<MovieEntity[]> {
        return await this.movieRepository.findBy({ id: id });
    }

    async create(entity: MovieEntity): Promise<MovieEntity> {
        return await this.movieRepository.save(entity);
    }

    async update(id: number, entity: MovieEntity): Promise<UpdateResult> {
        return await this.movieRepository.update(id, entity);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.movieRepository.delete(id);
    }
}
