import { Test, TestingModule } from '@nestjs/testing';
import { BasicsController } from './basics.controller';
import { BasicsService } from './basics.service';

describe('BasicsController', () => {
  let controller: BasicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasicsController],
      providers: [BasicsService],
    }).compile();

    controller = module.get<BasicsController>(BasicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
