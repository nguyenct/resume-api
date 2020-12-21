import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SkillsModule } from './skills/skills.module';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BasicsModule } from './basics/basics.module';
import { ResumesController } from './resumes/resumes.controller';
import config from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    BasicsModule,
    EducationModule,
    ExperienceModule,
    SkillsModule,
    ProjectsModule, 
    AuthModule,
    UsersModule,
  ],
  controllers: [ResumesController],
  providers: [AppService],
})
export class AppModule {}
