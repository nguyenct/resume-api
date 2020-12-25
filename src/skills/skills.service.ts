import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill, SkillDocument } from './schemas/skill.schema';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel(Skill.name) private skillModel: Model<SkillDocument>,
  ) {}

  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    const createdSkill = new this.skillModel(createSkillDto);
    return createdSkill.save();
  }

  async findAll(): Promise<Skill[]> {
    return this.skillModel.find();
  }

  async update(id: string, updateSkillDto: UpdateSkillDto): Promise<Skill> {
    return this.skillModel.findByIdAndUpdate(id, updateSkillDto, {
      new: true,
      useFindAndModify: false,
    });
  }

  async remove(id: string): Promise<any> {
    return this.skillModel.deleteOne({ _id: id });
  }
}
