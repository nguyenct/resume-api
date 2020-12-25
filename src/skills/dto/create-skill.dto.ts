import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateSkillDto {
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional()
  level: string;

  @IsNotEmpty()
  keywords: string[];
}
