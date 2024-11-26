import { Module } from '@nestjs/common';
import { UtazasiIrodaService } from './utazasi-iroda.service';
import { UtazasiIrodaController } from './utazasi-iroda.controller';

@Module({
  controllers: [UtazasiIrodaController],
  providers: [UtazasiIrodaService],
})
export class UtazasiIrodaModule {}
