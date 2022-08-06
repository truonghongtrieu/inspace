import { Body, Controller, Delete, Get, Param, Post, Put, Request } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller()
export class MovieController {
    constructor(private readonly movieService: MovieService) { }

    @Get('/movies')
    getAll() {
        return this.movieService.findAll();
    }

    @Get('/movies/:id')
    getById(@Param('id') movieId) {
        console.log('getById movieId ', movieId);
        return this.movieService.findById(movieId);
    }

    @Post('/movies')
    createMovie(@Request() req, @Body() body) {
        console.log('createMovie body ', body);
        return this.movieService.create(body);
    }

    @Put('/movies/:id')
    updateMovie(@Param('id') movieId, @Body() body) {
        console.log('updateMovie body ', body);
        return this.movieService.update(movieId, body);
    }

    @Delete('/movies/:id')
    deleteMovie(@Param('id') movieId) {
        console.log('deleteMovie movieId ', movieId);
        return this.movieService.delete(movieId);
    }
}
