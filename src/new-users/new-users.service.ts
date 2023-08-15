import { Injectable } from '@nestjs/common';
import { CreateNewUserDto } from './dto/create-new-user.dto';
import { UpdateNewUserDto } from './dto/update-new-user.dto';
import { UserRepository } from './repo/user.repository';
import { NewUser } from './entities/new-user.entity';
import { error } from 'console';

@Injectable()
export class NewUsersService {
  constructor(private readonly userRepository: UserRepository) {}
  async create(createNewUserDto: CreateNewUserDto): Promise<NewUser | string> {
    let user: NewUser = new NewUser();

    const keys = Object.keys(createNewUserDto);
    keys.map((item) => {
      user[item] = createNewUserDto[item];
    });
    const existingEmail = await this.userRepository.find({
      where: { email: createNewUserDto.email },
    });
    if (existingEmail.length > 0) return Promise.reject('User Already Exists');
    return Promise.resolve(this.userRepository.save(user));
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateNewUserDto: UpdateNewUserDto) {
    let user: NewUser = new NewUser();
    const keys = Object.keys(UpdateNewUserDto);
    keys.map((item) => {
      user[item] = updateNewUserDto[item];
    });

    // const emailCheck = await this.userRepository.find({
    //   where: { email: updateNewUserDto.email },
    // });
    //   if (emailCheck.length > 0) return 'Email Already Exists';
    user.id = id;
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
