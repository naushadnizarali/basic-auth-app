import { Test, TestingModule } from '@nestjs/testing';
import { DbConnectService } from './db-connect.service';

describe('DbConnectService', () => {
  let service: DbConnectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbConnectService],
    }).compile();

    service = module.get<DbConnectService>(DbConnectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
