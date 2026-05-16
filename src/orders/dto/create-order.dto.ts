import {
  Min,
  IsMongoId,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  @IsMongoId()
  readonly productId: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  readonly quantity: number;

  @IsString()
  @IsOptional()
  readonly customerName?: string;
}
