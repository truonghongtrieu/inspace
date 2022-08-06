import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { ActorService } from './actor/actor.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
