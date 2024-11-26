import { Injectable } from '@nestjs/common';
import { CreateUtazasiIrodaDto } from './dto/create-utazasi-iroda.dto';
import { UpdateUtazasiIrodaDto } from './dto/update-utazasi-iroda.dto';
import { Travels } from 'travels';

@Injectable()
export class UtazasiIrodaService {
  travel : Travels = new Travels();

  create(createUtazasiIrodaDto: CreateUtazasiIrodaDto) {
      return this.travel.add(createUtazasiIrodaDto);
  }

  findAll() {
    return this.travel.getAll();
  }

  findOne(id: number) {
    return this.travel.getById(id);
  }

  update(id: number, updateUtazasiIrodaDto: UpdateUtazasiIrodaDto) {
    return this.travel.replace(id,updateUtazasiIrodaDto);
  }

  remove(id: number) {
    return this.travel.remove(id);
  }
}
