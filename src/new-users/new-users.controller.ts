import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { NewUsersService } from './new-users.service';
import { CreateNewUserDto } from './dto/create-new-user.dto';
import { UpdateNewUserDto } from './dto/update-new-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { NewUser } from './entities/new-user.entity';

@Controller('api/v1')
@ApiTags('Users')
export class NewUsersController {
  constructor(private readonly newUsersService: NewUsersService) {}

  @Post()
  create(@Body() createNewUserDto: CreateNewUserDto) {
    return this.newUsersService.create(createNewUserDto);
  }

  @Get()
  async findAll() {
    const users: NewUser[] = await this.newUsersService.findAll();
    // resp.status(HttpStatus.OK).send(users);
    return users;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.newUsersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateNewUserDto: UpdateNewUserDto) {
    return this.newUsersService.update(+id, updateNewUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newUsersService.remove(+id);
  }
}
