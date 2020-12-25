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
  
  @ApiPropertyOptional({
    type: Experience,
    isArray: true,
  })
  work: Experience[];

  @ApiPropertyOptional({
    type: Volunteer,
    isArray: true,
  })
  volunteer: Volunteer[];

  @ApiPropertyOptional({
    type: Education,
    isArray: true,
  })
  education: Education[];

  @ApiPropertyOptional({
    type: Award,
    isArray: true,
  })
  awards: Award[];

  @ApiPropertyOptional({
    type: Skill,
    isArray: true,
  })
  skills: Skill[];
}
