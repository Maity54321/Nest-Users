import { Test, TestingModule } from '@nestjs/testing';
import { NewUsersService } from './new-users.service';

describe('NewUsersService', () => {
  let service: NewUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewUsersService],
    }).compile();

    service = module.get<NewUsersService>(NewUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
