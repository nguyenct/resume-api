import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsISO8601, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateEducationDto {
  @IsNotEmpty()
  institution: string;

  @IsNotEmpty()
  area: string;

  @IsNotEmpty()
  studyType: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsISO8601()
  startDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsISO8601()
  endDate: string;

  @ApiPropertyOptional()
  gpa: number;

  @ApiPropertyOptional()
  courses: string[];
}
