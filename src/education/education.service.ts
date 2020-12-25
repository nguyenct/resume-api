import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education, EducationDocument } from './schemas/education.schema';

@Injectable()
export class EducationService {
  constructor(@InjectModel(Education.name) private educationModel: Model<EducationDocument>) {}

  async create(createEducationDto: CreateEducationDto): Promise<Education> {
    const createdEducation = new this.educationModel(createEducationDto);
    return createdEducation.save();
  }

  async findAll(): Promise<Education[]> {
    return this.educationModel.find();
  }

  async update(id: string, updateEducationDto: UpdateEducationDto): Promise<Education> {
    return this.educationModel.findByIdAndUpdate(id, updateEducationDto, { new: true, useFindAndModify: false });
  }

  async remove(id: string): Promise<any> {
    return this.educationModel.deleteOne({ _id: id })
  }
}
