import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SkillsModule } from './skills/skills.module';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';
import { ProjectsModule } from './projects/projects.module';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import config from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    SkillsModule,
    EducationModule,
    ExperienceModule,
    ProjectsModule,
    ProfileModule,
    AuthModule,
    UsersModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
