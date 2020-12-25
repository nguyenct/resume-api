import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAwardDto } from './dto/create-award.dto';
import { UpdateAwardDto } from './dto/update-award.dto';
import { Award, AwardDocument } from './schemas/award.schema';

@Injectable()
export class AwardsService {
  constructor(@InjectModel(Award.name) private awardModel: Model<AwardDocument>) {}

  async create(createAwardDto: CreateAwardDto): Promise<Award> {
    const createdAward = new this.awardModel(createAwardDto);
    return createdAward.save();
  }

  async findAll(): Promise<Award[]> {
    return this.awardModel.find();
  }

  async update(id: string, updateAwardDto: UpdateAwardDto): Promise<Award> {
    return this.awardModel.findByIdAndUpdate(id, updateAwardDto, { new: true, useFindAndModify: false });
  }

  async remove(id: string): Promise<any> {
    return this.awardModel.deleteOne({ _id: id })
  }
}

