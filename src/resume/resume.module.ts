import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { ExperienceModule } from 'src/experience/experience.module';
import { BasicsModule } from 'src/basics/basics.module';
import { EducationModule } from 'src/education/education.module';
import { SkillsModule } from 'src/skills/skills.module';
import { AwardsModule } from 'src/awards/awards.module';
import { VolunteerModule } from 'src/volunteer/volunteer.module';

@Module({
  imports: [
    ExperienceModule,
    BasicsModule,
    EducationModule,
    SkillsModule,
    AwardsModule,
    VolunteerModule,
  ],
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
