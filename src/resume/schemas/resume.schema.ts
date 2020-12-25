import { ApiPropertyOptional } from "@nestjs/swagger";
import { Award } from "src/awards/schemas/award.schema";
import { Basic } from "src/basics/schemas/basic.schema";
import { Education } from "src/education/schemas/education.schema";
import { Experience } from "src/experience/schemas/experience.schema";
import { Skill } from "src/skills/schemas/skill.schema";
import { Volunteer } from "src/volunteer/schemas/volunteer.schema";

export class Resume {
  @ApiPropertyOptional()
  basics: Basic;
  
  @ApiPropertyOptional()
  work: Experience[];

  @ApiPropertyOptional()
  volunteer: Volunteer[];

  @ApiPropertyOptional()
  education: Education[];

  @ApiPropertyOptional()
  awards: Award[];

  @ApiPropertyOptional()
  skills: Skill[];
}
