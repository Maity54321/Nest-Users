import { Test, TestingModule } from '@nestjs/testing';
import { NewUsersController } from './new-users.controller';
import { NewUsersService } from './new-users.service';

describe('NewUsersController', () => {
  let controller: NewUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewUsersController],
      providers: [NewUsersService],
    }).compile();

    controller = module.get<NewUsersController>(NewUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
