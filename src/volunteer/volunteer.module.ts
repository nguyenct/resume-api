import { Module } from '@nestjs/common';
import { VolunteerService } from './volunteer.service';
import { VolunteerController } from './volunteer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Volunteer, VolunteerSchema } from './schemas/volunteer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Volunteer.name, schema: VolunteerSchema },
    ]),
  ],
  controllers: [VolunteerController],
  providers: [VolunteerService],
  exports: [VolunteerService],
})
export class VolunteerModule {}
