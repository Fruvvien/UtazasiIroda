
import { IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, Max, Min, MinLength } from "class-validator";

export class CreateUtazasiIrodaDto {
    @IsString()
    @IsNotEmpty()
    destination: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(30)
    description: string;

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    imgUrl: string;

    @IsInt()
    price: number;

    @IsOptional()
    @Min(1)
    @Max(49)
    discount: number;
}
