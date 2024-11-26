import { Test, TestingModule } from '@nestjs/testing';
import { UtazasiIrodaController } from './utazasi-iroda.controller';
import { UtazasiIrodaService } from './utazasi-iroda.service';

describe('UtazasiIrodaController', () => {
  let controller: UtazasiIrodaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UtazasiIrodaController],
      providers: [UtazasiIrodaService],
    }).compile();

    controller = module.get<UtazasiIrodaController>(UtazasiIrodaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
