import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsDateString, IsISO8601, IsOptional } from "class-validator";

export class CreateExperienceDto {
  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  position: string;

  @ApiPropertyOptional()
  website: string;

  @IsNotEmpty()
  @IsISO8601()
  startDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsISO8601()
  endDate: string;

  @ApiPropertyOptional()
  summary: string;

  @ApiPropertyOptional()
  highlights: string[];
}
