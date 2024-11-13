import { IsNumber, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindOneParams {
  id: number;
}

export class Create {
  @ApiPropertyOptional({
    type: String,
  })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    type: String,
  })
  @IsString()
  model: string;

  @ApiPropertyOptional({
    type: String,
  })
  @IsString()
  manufacturer: string;

  @ApiPropertyOptional({
    type: String,
  })
  @IsString()
  starship_class: string;

  @ApiPropertyOptional({
    type: Number,
  })
  @IsNumber()
  cost_in_credits: number;

  @ApiPropertyOptional({
    type: Number,
  })
  @IsNumber()
  passengers: number;

  @ApiPropertyOptional({
    type: Number,
  })
  @IsNumber()
  cargo_capacity: number;
}
