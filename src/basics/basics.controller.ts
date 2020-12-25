import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BasicsService } from './basics.service';
import { CreateBasicDto } from './dto/create-basic.dto';
import { UpdateBasicDto } from './dto/update-basic.dto';

@ApiTags('Basics')
@Controller('basics')
export class BasicsController {
  constructor(private readonly basicsService: BasicsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create basic information',
    description: 'Creates the basic information resource. Note: Only one can exist.',
  })
  create(@Body() createBasicDto: CreateBasicDto) {
    return this.basicsService.create(createBasicDto);
  }

  @Get()
  @ApiOperation({
    summary: 'List basic information',
    description: 'Retrieves a list of the basic information resource. Note: Only one can exist.',
  })
  findAll() {
    return this.basicsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get basic information',
    description: 'Retrieves the basic information resource associated with the provided id. Note: Only one can exist.',
  })
  findOne(@Param('id') id: string) {
    return this.basicsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update basic information',
    description: 'Updates the basic information resource associated with the provided id. Note: Only one can exist.',
  })
  update(@Param('id') id: string, @Body() updateBasicDto: UpdateBasicDto) {
    return this.basicsService.update(id, updateBasicDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete basic information',
    description: 'Deletes the basic information resource associated with the provided id.',
  })
  remove(@Param('id') id: string) {
    return this.basicsService.remove(id);
  }
}
