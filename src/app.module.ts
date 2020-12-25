import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SkillsModule } from './skills/skills.module';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BasicsModule } from './basics/basics.module';
import { ResumesController } from './resumes/resumes.controller';
import { AwardsModule } from './awards/awards.module';
import config from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('database').uri,
      }),
      inject: [ConfigService],
    }),
    BasicsModule,
    EducationModule,
    ExperienceModule,
    SkillsModule,
    AuthModule,
    UsersModule,
    AwardsModule,
  ],
  controllers: [ResumesController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configService: ConfigService) {}
}
