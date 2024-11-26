import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UtazasiIrodaService } from './utazasi-iroda.service';
import { CreateUtazasiIrodaDto } from './dto/create-utazasi-iroda.dto';
import { UpdateUtazasiIrodaDto } from './dto/update-utazasi-iroda.dto';

@Controller()
export class UtazasiIrodaController {
  constructor(private readonly utazasiIrodaService: UtazasiIrodaService) {}

  @Post('travels')
  create(@Body() createUtazasiIrodaDto: CreateUtazasiIrodaDto) {
    return this.utazasiIrodaService.create(createUtazasiIrodaDto);
  }

  @Get('travels')
  findAll() {
    return this.utazasiIrodaService.findAll();
  }

  @Get('travels/:id')
  findOne(@Param('id') id: string) {
    return this.utazasiIrodaService.findOne(+id);
  }

  @Patch('travels/:id')
  update(@Param('id') id: string, @Body() updateUtazasiIrodaDto: UpdateUtazasiIrodaDto) {
    return this.utazasiIrodaService.update(+id, updateUtazasiIrodaDto);
  }

  @Delete('travels/:id')
  remove(@Param('id') id: string) {
    return this.utazasiIrodaService.remove(+id);
  }
}
