import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAuthors() {
    return this.usersService.getAuthors();
  }

  @Get(':id')
  getOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.usersService.getOne(id);
  }
}
