import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SwapiModule } from './swapi/swapi.module';

@Module({
  imports: [AuthModule, SwapiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
