import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SwapiService } from './swapi.service';

@Controller('swapi')
export class SwapiController {
  constructor(private readonly swapiService: SwapiService) {}

  @Get('characters')
  @UseGuards(AuthGuard('jwt'))
  getCharacters(@Query('pageNumber') pageNumber: string) {
    return this.swapiService.getCharacters(pageNumber);
  }
}
