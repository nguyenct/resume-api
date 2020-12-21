import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BasicsService } from './basics.service';
import { CreateBasicDto } from './dto/create-basic.dto';
import { UpdateBasicDto } from './dto/update-basic.dto';

@ApiTags('Basics')
@Controller('basics')
export class BasicsController {
  constructor(private readonly basicsService: BasicsService) {}

  @Post()
  create(@Body() createBasicDto: CreateBasicDto) {
    return this.basicsService.create(createBasicDto);
  }

  @Get()
  findAll() {
    return this.basicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basicsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBasicDto: UpdateBasicDto) {
    return this.basicsService.update(+id, updateBasicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basicsService.remove(+id);
  }
}
