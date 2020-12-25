import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience, ExperienceDocument } from './schemas/experience.schema';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel(Experience.name)
    private experienceModel: Model<ExperienceDocument>,
  ) {}

  async create(createExperienceDto: CreateExperienceDto): Promise<Experience> {
    const createdExperience = new this.experienceModel(createExperienceDto);
    return createdExperience.save();
  }

  async findAll(): Promise<Experience[]> {
    return this.experienceModel.find();
  }

  async update(
    id: string,
    updateExperienceDto: UpdateExperienceDto,
  ): Promise<Experience> {
    return this.experienceModel.findByIdAndUpdate(id, updateExperienceDto, {
      new: true,
      useFindAndModify: false,
    });
  }

  async remove(id: string): Promise<any> {
    return this.experienceModel.deleteOne({ _id: id });
  }
}
