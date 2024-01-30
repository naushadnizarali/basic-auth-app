import { Test } from '@nestjs/testing';
import { BackendKernelAuthService } from './auth.service';

describe('BackendKernelAuthService', () => {
  let service: BackendKernelAuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendKernelAuthService],
    }).compile();

    service = module.get(BackendKernelAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
