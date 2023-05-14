import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}

//176.105.194.209 - My IP Address - connection to mongoDB
