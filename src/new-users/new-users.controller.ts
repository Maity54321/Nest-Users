import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Version,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { NewUsersService } from './new-users.service';
import { CreateNewUserDto } from './dto/create-new-user.dto';
import { UpdateNewUserDto } from './dto/update-new-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { NewUser } from './entities/new-user.entity';

// @Controller({ path: 'users', version: '1' }) // This will enable the version for all endPoints
@Controller({ version: '1' })
@ApiTags('Users')
export class NewUsersController {
  constructor(private readonly newUsersService: NewUsersService) {}

  @Version('1')
  @Post()
  async create(@Body() createNewUserDto: CreateNewUserDto) {
    try {
      const result = await this.newUsersService.create(createNewUserDto);
      return result;
    } catch (error) {
      error = await this.newUsersService.create(createNewUserDto);
      console.log('err', error);
    }
  }

  @Version('1')
  @Get()
  async findAll() {
    const users: NewUser[] = await this.newUsersService.findAll();
    // resp.status(HttpStatus.OK).send(users);
    return users;
  }

  @Version('1')
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.newUsersService.findOne(+id);
  }

  @Version('1')
  @Put(':id')
  update(@Param('id') id: string, @Body() updateNewUserDto: UpdateNewUserDto) {
    return this.newUsersService.update(+id, updateNewUserDto);
  }

  @Version('1')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newUsersService.remove(+id);
  }
}
