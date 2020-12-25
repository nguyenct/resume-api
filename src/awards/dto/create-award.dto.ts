import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsISO8601, IsNotEmpty } from 'class-validator';

export class CreateAwardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsISO8601()
  date: string;

  @ApiPropertyOptional()
  awarder: string;

  @ApiPropertyOptional()
  summary: string;
}
