import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateEducationDto {
  @IsNotEmpty()
  institution: string;

  @IsNotEmpty()
  area: string;

  @IsNotEmpty()
  studyType: string;

  @IsNotEmpty()
  startDate: Date;

  @ApiPropertyOptional()
  endDate: Date;

  @ApiPropertyOptional()
  gpa: number;

  @ApiPropertyOptional()
  courses: string[];
}
