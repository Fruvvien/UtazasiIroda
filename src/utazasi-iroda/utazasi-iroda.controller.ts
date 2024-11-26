import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UtazasiIrodaService } from './utazasi-iroda.service';
import { CreateUtazasiIrodaDto } from './dto/create-utazasi-iroda.dto';
import { UpdateUtazasiIrodaDto } from './dto/update-utazasi-iroda.dto';

@Controller('utazasi-iroda')
export class UtazasiIrodaController {
  constructor(private readonly utazasiIrodaService: UtazasiIrodaService) {}

  @Post('post')
  create(@Body() createUtazasiIrodaDto: CreateUtazasiIrodaDto) {
    return this.utazasiIrodaService.create(createUtazasiIrodaDto);
  }

  @Get('get')
  findAll() {
    return this.utazasiIrodaService.findAll();
  }

  @Get('getById/:id')
  findOne(@Param('id') id: string) {
    return this.utazasiIrodaService.findOne(+id);
  }

  @Patch('patch/:id')
  update(@Param('id') id: string, @Body() updateUtazasiIrodaDto: UpdateUtazasiIrodaDto) {
    return this.utazasiIrodaService.update(+id, updateUtazasiIrodaDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.utazasiIrodaService.remove(+id);
  }
}
