import { Injectable } from '@nestjs/common';
import { CreateBasicDto } from './dto/create-basic.dto';
import { UpdateBasicDto } from './dto/update-basic.dto';

@Injectable()
export class BasicsService {
  create(createBasicDto: CreateBasicDto) {
    return 'This action adds a new basic';
  }

  findAll() {
    return `This action returns all basics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basic`;
  }

  update(id: number, updateBasicDto: UpdateBasicDto) {
    return `This action updates a #${id} basic`;
  }

  remove(id: number) {
    return `This action removes a #${id} basic`;
  }
}
