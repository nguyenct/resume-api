import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AwardsService } from 'src/awards/awards.service';
import { BasicsService } from 'src/basics/basics.service';
import { EducationService } from 'src/education/education.service';
import { ExperienceService } from 'src/experience/experience.service';
import { SkillsService } from 'src/skills/skills.service';
import { VolunteerService } from 'src/volunteer/volunteer.service';
import { Resume } from './schemas/resume.schema';

@Injectable()
export class ResumeService {
  constructor(
    private experienceService: ExperienceService,
    private basicsService: BasicsService,
    private educationService: EducationService,
    private skillsService: SkillsService,
    private awardsService: AwardsService,
    private volunteerService: VolunteerService,
  ) {}

  async get(): Promise<Resume> {
    const basics = await this.basicsService.findAll();
    return {
      basics: basics[0],
      work: await this.experienceService.findAll(),
      education: await this.educationService.findAll(),
      skills: await this.skillsService.findAll(),
      awards: await this.awardsService.findAll(),
      volunteer: await this.volunteerService.findAll(),
    };
  }
}
