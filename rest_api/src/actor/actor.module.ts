import { Module } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorEntity } from './actor.entity'

@Module({
    imports: [
        TypeOrmModule.forFeature([ActorEntity]),
    ],
    providers: [ActorService],
    controllers: [ActorController]
})
export class ActorModule { }
