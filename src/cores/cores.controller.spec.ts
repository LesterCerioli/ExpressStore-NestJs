import { Test, TestingModule } from '@nestjs/testing';
import { CoresController } from './cores.controller';
import { CoresService } from './cores.service';

describe('CoresController', () => {
  let controller: CoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoresController],
      providers: [CoresService],
    }).compile();

    controller = module.get<CoresController>(CoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
