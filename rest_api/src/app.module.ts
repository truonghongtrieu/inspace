import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorModule } from './actor/actor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    ActorModule,
    MovieModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "restApiDB",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
