import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ActorService } from './actor.service';

@Controller()
export class ActorController {
    constructor(private readonly actorService: ActorService) { }

    @Get('/actors')
    getAll() {
        return this.actorService.findAll();
    }

    @Get('/actors/:id')
    getById(@Param('id') actorId) {
        console.log('getById: ', actorId);
        return this.actorService.findById(actorId);
    }

    @Post('/actors')
    createActor(@Body() body) {
        console.log('createActor body ', body);
        return this.actorService.create(body, body.movieIds);
    }

    @Put('/actors/:id')
    updateActorById(@Param('id') actorId, @Body() body) {
        console.log('updateActorById body ', body);
        return this.actorService.update(actorId, body);
    }

    @Delete('/actors/:id')
    deleteActorById(@Param('id') actorId) {
        console.log('deleteActorById actorId ', actorId);
        return this.actorService.delete(actorId);
    }
}
