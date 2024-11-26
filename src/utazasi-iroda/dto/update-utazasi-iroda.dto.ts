import { PartialType } from '@nestjs/mapped-types';
import { CreateUtazasiIrodaDto } from './create-utazasi-iroda.dto';
import { IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, Max, Min } from 'class-validator';

export class UpdateUtazasiIrodaDto extends PartialType(CreateUtazasiIrodaDto) {
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    destination: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    @Min(30)
    description: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    @IsUrl()
    imgUrl: string;

    @IsInt()
    @IsOptional()
    price: number;

    @IsOptional()
    @Min(0)
    @Max(30)
    discount: number;
}
