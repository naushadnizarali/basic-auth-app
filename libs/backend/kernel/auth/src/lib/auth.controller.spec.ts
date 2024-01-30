import { Test } from '@nestjs/testing';
import { BackendKernelAuthController } from './auth.controller';
import { BackendKernelAuthService } from './auth.service';

describe('BackendKernelAuthController', () => {
  let controller: BackendKernelAuthController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BackendKernelAuthService],
      controllers: [BackendKernelAuthController],
    }).compile();

    controller = module.get(BackendKernelAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
