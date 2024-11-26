import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtazasiIrodaModule } from './utazasi-iroda/utazasi-iroda.module';

@Module({
  imports: [UtazasiIrodaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
