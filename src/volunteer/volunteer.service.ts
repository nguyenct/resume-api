import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { UpdateVolunteerDto } from './dto/update-volunteer.dto';
import { Volunteer, VolunteerDocument } from './schemas/volunteer.schema';

@Injectable()
export class VolunteerService {
  constructor(
    @InjectModel(Volunteer.name)
    private volunteerModel: Model<VolunteerDocument>,
  ) {}

  async create(createVolunteerDto: CreateVolunteerDto): Promise<Volunteer> {
    const createdVolunteer = new this.volunteerModel(createVolunteerDto);
    return createdVolunteer.save();
  }

  async findAll(): Promise<Volunteer[]> {
    return this.volunteerModel.find();
  }

  async update(
    id: string,
    updateVolunteerDto: UpdateVolunteerDto,
  ): Promise<Volunteer> {
    return this.volunteerModel.findByIdAndUpdate(id, updateVolunteerDto, {
      new: true,
      useFindAndModify: false,
    });
  }

  async remove(id: string): Promise<any> {
    return this.volunteerModel.deleteOne({ _id: id });
  }
}
