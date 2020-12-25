import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBasicDto } from './dto/create-basic.dto';
import { UpdateBasicDto } from './dto/update-basic.dto';
import { Basic, BasicDocument } from './schemas/basic.schema';

@Injectable()
export class BasicsService {
  constructor(
    @InjectModel(Basic.name) private basicModel: Model<BasicDocument>,
  ) {}

  async create(createBasicDto: CreateBasicDto): Promise<Basic> {
    const basics = await this.basicModel.find({}, null, { limit: 1 });
    const alreadyExists = basics.length > 0;
    if (alreadyExists) {
      throw new HttpException(
        'Basic information already exists, please delete or update',
        HttpStatus.CONFLICT,
      );
    }
    const createdBasic = new this.basicModel(createBasicDto);
    return createdBasic.save();
  }

  async findAll(): Promise<Basic[]> {
    return this.basicModel.find();
  }

  async findOne(id: string): Promise<Basic> {
    return this.basicModel.findById(id);
  }

  async update(id: string, updateBasicDto: UpdateBasicDto): Promise<Basic> {
    return this.basicModel.findByIdAndUpdate(id, updateBasicDto, {
      new: true,
      useFindAndModify: false,
    });
  }

  async remove(id: string): Promise<any> {
    return this.basicModel.deleteOne({ _id: id });
  }
}
